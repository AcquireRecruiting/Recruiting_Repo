import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator, ThemeProvider, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports"; 
import AcquireRecruitingHome from "./ui-components/AcquireRecruitingHome";
import { BrowserRouter as Router } from "react-router-dom";
import BusinessCard from "./ui-components/Businesscard";
import AIcard from "./ui-components/AIcard";
import Navbar from "./ui-components/NavBarHeader";

// Configure AWS Amplify
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500">
          <h1 className="text-white text-4xl font-bold mb-8">Welcome, {user?.username}!</h1>

          <div className="flex flex-col space-y-6">
            <Button 
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              Job Board
            </Button>
            <Button 
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              AI Card
            </Button>
            <Button 
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              Business Card
            </Button>
          </div>

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