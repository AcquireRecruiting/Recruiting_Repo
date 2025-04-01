import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports"; 
import TechPage from "./ui-components/TechPage";
import Logo from "./ui-components/Logo.jpg";
import "./App.css";

// Configure AWS Amplify
Amplify.configure(awsExports);

function App({ signOut }) {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500">
          {/* Display Logo */}
          <img src={Logo} alt="AcquireRecruiting" className="max-w-full h-auto mb-0 mx-auto" />
          {/* Tech Page */}
          <TechPage />

          {/* Sign Out Button */}
          <Button 
            onClick={signOut} 
            className="mt-8 px-6 py-3 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            Sign Out
          </Button>
        </div>
      )}
    </Authenticator>
  );
}



export default withAuthenticator(App);
