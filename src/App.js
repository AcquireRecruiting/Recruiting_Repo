import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';


// Importing Components
import Dashboard from "./ui-components/Dashboard";
import EmployeeMatch from "./ui-components/Janedoe";
import EmployerProfile from "./ui-components/EmployerProfile";
import Navbar from "./ui-components/navbar";  // ✅ Import Navbar

// Import React Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Authenticator>
          {({ signOut }) => (
            <main className="w-full">
              {/* Navigation Bar */}
              <nav className="w-full bg-gray-100 p-4 text-center">
                <ul className="flex justify-center space-x-6">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/employer">Employer Profile</Link></li>
                  <li><Link to="/employeematch">Employee Match</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
              <navbar />  
              {/* Page Content */}
              <div className="max-w-screen-lg w-full mx-auto p-6">
                <Routes>
                  <Route path="/employer" element={<EmployerProfile />} />
                  <Route path="/employeematch" element={<EmployeeMatch />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </div>

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
