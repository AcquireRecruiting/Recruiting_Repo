import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Use only Routes, NOT BrowserRouter
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import TechPage from "./ui-components/TechPage";
import Actions from "./ui-components/Actions";
import Logo from "./ui-components/Logo.jpg";
import Dashboard from "./ui-components/Dashboard";
import "./App.css";

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
            <Route path="/Actions" element={<Actions />} /> 
            <Route path="/JobBoard" element={<Dashboard />} />
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
