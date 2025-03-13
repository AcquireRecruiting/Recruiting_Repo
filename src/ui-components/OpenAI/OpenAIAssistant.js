// OpenAIAssistant.js
// import { toast } from 'react-toastify';
import { SYSTEM_DIRECTIVE, VOICE } from './Prompts.js';
import { OPENAI_API_KEY } from './APIKey.js';

export class OpenAIAssistant {
  constructor() {
    this.OPENAI_API_KEY = OPENAI_API_KEY;
    this.VOICE = VOICE;
    this.SYSTEM_DIRECTIVE = SYSTEM_DIRECTIVE;

    this.isSessionActive = false;
    this.peerConnection = null;
    this.dataChannel = null;
    this.audioElement = null;
    this.mediaStream = null;
    this.ephemeralKey = null;
    this.speechInterval = null;

    // Instantiate the ToolsRegistry to manage tools.api
    // this.toolsRegistry = new ToolsRegistry();

    // Bind addTools and removeTools to the instance
    // this.addTools = this.addTools.bind(this);
    // this.removeTools = this.removeTools.bind(this);
  }

  /**
   * Initializes the session by:
   * - Fetching an ephemeral key
   * - Creating the RTCPeerConnection and data channel
   * - Getting the microphone audio and adding it to the connection (muted)
   * - Performing the SDP offer/answer handshake with OpenAI's endpoint
   */
  async init() {
    // Fetch a session and get the ephemeral key
    const response = await fetch(
      'https://api.openai.com/v1/realtime/sessions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-realtime-preview-2024-12-17',
          voice: this.VOICE,
          instructions: this.SYSTEM_DIRECTIVE,
        }),
      },
    );
    const data = await response.json();
    this.ephemeralKey = data.client_secret.value;

    // Create the RTCPeerConnection and set up event handlers
    this.peerConnection = new RTCPeerConnection();
    this.audioElement = document.createElement('audio');
    this.audioElement.autoplay = true;
    this.peerConnection.ontrack = (event) => {
      // When a remote audio track is received, attach it to the audio element
      this.audioElement.srcObject = event.streams[0];
    };

    // Create a data channel for sending events
    this.dataChannel = this.peerConnection.createDataChannel('oai-events');

    // Set up the onmessage handler so that any event from the server
    // will automatically be passed to processIncomingResponse.
    this.dataChannel.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        // console.info("Received message from server:", message);
        this.processIncomingResponse(message);
      } catch (err) {
        console.error('Error parsing incoming message:', err);
      }
    };

    // Get audio from the user's microphone
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        channel
      });
    } catch (error) {
      console.error('Error accessing microphone:', error);
      // toast.error('Could not access microphone');
      return;
    }

    // Mute the audio track initially
    const audioTrack = this.mediaStream.getAudioTracks()[0];
    audioTrack.enabled = false; // Start muted

    // Add the audio track to the peer connection
    this.peerConnection.addTrack(audioTrack, this.mediaStream);

    // Create and set the local SDP offer
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);

    // Send the SDP offer to OpenAI’s endpoint for a remote SDP answer
    const sdpResponse = await fetch(
      `https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17`,
      {
        method: 'POST',
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${this.ephemeralKey}`,
          'Content-Type': 'application/sdp',
        },
      },
    );
    const answerSdp = await sdpResponse.text();
    const answer = { type: 'answer', sdp: answerSdp };
    await this.peerConnection.setRemoteDescription(answer);

    // Wait until the data channel is open
    await new Promise((resolve) => {
      if (this.dataChannel.readyState === 'open') {
        resolve();
      } else {
        this.dataChannel.onopen = () => {
          console.info('Data channel opened');
          resolve();
        };
      }
    });

    this.isSessionActive = true;
    console.info('AI Session initialized with muted audio');

    // Send an initial session update with the current tools.
    // this.sendClientEvent(this.toolsRegistry.getSessionUpdatePayload());
    return;
  }

  /**
   * Unmutes the audio track so that the microphone audio is sent to the connection.
   */
  async startListening() {

    if (this.mediaStream) {
      const audioTrack = this.mediaStream.getAudioTracks()[0];
      audioTrack.enabled = true;
      console.info('Audio track unmuted');
    } else {
      // toast.error('No media stream available.');
      console.error('No media stream available.');
    }
    return;
  }

  /**
   * Mutes the audio track so that no microphone audio is sent.
   */
  stopListening() {
    if (this.mediaStream) {
      const audioTrack = this.mediaStream.getAudioTracks()[0];
      audioTrack.enabled = false;
      console.info('Audio track muted');
    } else {
      // toast.warn('No active media stream to mute.');
      console.warn('No active media stream to mute.');
    }
  }

  /**
   * Fully terminates the session by closing the data channel and the RTCPeerConnection.
   */
  stopSession() {
    // Ensure audio capture is stopped
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = null;
    }
    if (this.dataChannel) {
      this.dataChannel.close();
      this.dataChannel = null;
    }
    if (this.peerConnection) {
      this.peerConnection.close();
      this.peerConnection = null;
    }
    this.isSessionActive = false;
    console.info('AI Session disconnected');
  }

  /**
   * Sends a JSON event through the data channel, if open.
   */
  sendClientEvent(message) {
    if (this.dataChannel && this.dataChannel.readyState === 'open') {
      message.event_id = message.event_id || crypto.randomUUID();
      this.dataChannel.send(JSON.stringify(message));
      console.info(`Event sent: ${message.type}`);
    } else {
      console.error(
        'Failed to send message - no data channel available',
        message,
      );
    }
  }

  /**
   * Helper for sending a text message.
   */
  sendTextMessage(message, requestResponse = false) {
    // Other Types include "input_attachments", "input_command", "input_query"
    const event = {
      type: 'conversation.item.create',
      item: {
        type: 'message',
        role: 'user',
        content: [{ type: 'input_text', text: message }],
      },
    };
    this.sendClientEvent(event);
    if (requestResponse) {
      this.sendClientEvent({ type: 'response.create' });
    }
  }

  /* ===== Tool Management and Function-Call Handling ===== */

  /**
   * Adds one or more tools and immediately updates the session.
   * @param {Array<Object>|Object} tools - A list of tool definitions or a single tool object with optional `handler` functions.
   */
  // addTools(tools) {
  //   console.log('Adding tools:', tools);
  //   if (Array.isArray(tools)) {
  //     tools.forEach((tool) => this.toolsRegistry.addTool(tool));
  //   } else {
  //     this.toolsRegistry.addTool(tools);
  //   }
  //   if (this.isSessionActive) {
  //     this.sendClientEvent(this.toolsRegistry.getSessionUpdatePayload());
  //   }
  // }

  /**
   * Removes one or more tools by name and immediately updates the session.
   * @param {string|Array<string>} toolNames - The name of the tool or a list of tool names to remove.
   */
  // removeTools(toolNames) {
  //   console.log('Removing tools:', toolNames);
  //   if (Array.isArray(toolNames)) {
  //     toolNames.forEach((toolName) => this.toolsRegistry.removeTool(toolName));
  //   } else {
  //     this.toolsRegistry.removeTool(toolNames);
  //   }
  //   if (this.isSessionActive) {
  //     this.sendClientEvent(this.toolsRegistry.getSessionUpdatePayload());
  //   }
  // }

  /**
   * Processes an incoming response event. If it contains a function call,
   * this method will look up the tool by name, invoke its handler with the
   * parsed arguments, and optionally send back a response with the result.
   *
   * @param {Object} event - The event received from the realtime API.
   */
  async processIncomingResponse(event) {
    if (
      event.type === 'response.done' &&
      event.response &&
      event.response.output
    ) {
      for (const output of event.response.output) {
        // if (output.type === 'function_call') {
        //   // const tool = this.toolsRegistry.getTool(output.name);
        //   if (tool && typeof tool.handler === 'function') {
        //     try {
        //       // Parse the arguments passed in the function call.
        //       const args = JSON.parse(output.arguments);
        //       const result = await tool.handler(args);
        //       console.info(
        //         `Tool "${output.name}" executed with result:`,
        //         result,
        //       );
        //       // [BROKEN] Optionally, send back a response event with the result.
        //       // This could come in handy for getting information from out backend...
        //       // if (result) {
        //       //   this.sendClientEvent({
        //       //     type: "conversation.item.create",
        //       //     item: {
        //       //       type: "function_call.response",
        //       //       name: output.name,
        //       //       result: result,
        //       //       },
        //       //   });
        //       // }
        //     } catch (error) {
        //       console.error(`Error executing tool "${output.name}":`, error);
        //     }
        //   } else {
        //     console.warn(`No handler defined for tool "${output.name}"`);
        //   }
        // }
      }
    } else if (event.type === 'output_audio_buffer.started') {
    // This would prevent the AI from trying to do stuff while it's talking, safe to ignore
    //   this.streamingTranscriptionInstance.lastSpeechTimestamp = Date.now();
    //   if (!this.speechInterval) {
    //     this.speechInterval = setInterval(() => {
    //       this.streamingTranscriptionInstance.lastSpeechTimestamp = Date.now();
    //     }, 1000);
    //   }
    // } else if (event.type === 'output_audio_buffer.stopped') {
    //   this.streamingTranscriptionInstance.lastSpeechTimestamp = Date.now();
    //   clearInterval(this.speechInterval);
    //   this.speechInterval = null;
    } else {
      // console.info('Event received:', event);
    }
  }
}

export default OpenAIAssistant;



// Usage: 
// const AI = new OpenAIAssistant();
// AI.init()
// AI.stopSession();
// AI.sendTextMessage("this is where you can prime the AI with some extra message after the fact or inline message");
// AI.startListening()