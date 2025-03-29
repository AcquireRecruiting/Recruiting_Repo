import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';// Importing Components
import Navbar from "./ui-components/navbar";  // ✅ Import Navbar
import studioTheme from "./ui-components/studioTheme";  // ✅ Import Studio Theme
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavbarHeader from "./ui-components/NavBarHeader";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Authenticator>
          {({ signOut }) => (
            <main className="w-full">
             <NavbarHeader />

              {/* Sign Out Button */}
              <div className="text-center mt-4">
                <button 
                  onClick={signOut} 
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Sign Out
                </button>
              </div>
            </main>
          )}
        </Authenticator>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
