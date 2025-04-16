import React from "react";
import { Routes, Route } from "react-router-dom"; 
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import TechPage from "./ui-components/TechPage";
import AIPage from "./ui-components/AIPage";
import Logo from "./ui-components/Logo.jpg";
import Dashboard from "./ui-components/Dashboard";
import "./App.css";
import JobBoard from "./ui-components/JobBoard";
import { TodoCreateForm } from './ui-components';


// Configure AWS Amplify
Amplify.configure(awsExports);

function App({ signOut }) {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500">
          {/* Logo */}
          <img src={Logo} alt="AcquireRecruiting" className="max-w-full h-auto mb-4 mx-auto" />

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<TechPage />} /> {/* Home Page */}
            <Route path="/AIPage" element={<AIPage />} /> 
            <Route path="/JobBoard" element={<JobBoard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
          
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
