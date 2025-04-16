import React, { useEffect, useRef, useState } from "react";
import "./AIPage.css";
import { View, Text, TextField, Flex } from "@aws-amplify/ui-react";
import { OpenAIAssistant } from "./OpenAI/OpenAIAssistant";

export default function AIPage(props) {
  const { overrides, ...rest } = props;
  const aiAssistant = useRef(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    aiAssistant.current = new OpenAIAssistant();
    aiAssistant.current.init().then(() => {
      aiAssistant.current.startSession();
    });

    return () => {
      aiAssistant.current.stopSession();
      aiAssistant.current = null;
    };
  }, []);

  return (
    <View
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      padding="32px"
      {...rest}
    >
      <Flex direction="column" alignItems="center" gap="24px" width="100%" maxWidth="600px">
        <Text
          fontSize="32px"
          fontWeight="700"
          color="#566587"
        >
          AI Assistant
        </Text>
        <TextField
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="large"
          variation="default"
          width="100%"
        />
      </Flex>
    </View>
  );
}
