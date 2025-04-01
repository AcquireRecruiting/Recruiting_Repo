import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator, ThemeProvider, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports"; 
import TechPage from "./ui-components/TechPage";
import Logo from "./ui-components/Logo"; // ✅ Make sure this path is correct

// Configure AWS Amplify
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500">
       <img src={Logo} alt="AcquireRecruiting" className="w-32 h-auto" />
        {/* Tech Page */}
          <TechPage/>

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
