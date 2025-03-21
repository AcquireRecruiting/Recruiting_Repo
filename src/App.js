import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Dashboard from "./ui-components/Dashboard";
import PrivateProfile from "./ui-components/PrivateProfile";
import PublicProfile from "./ui-components/PublicProfile";
import EmployerProfile from "./ui-components/EmployerProfile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <div className="App h-screen flex flex-col items-center justify-center overflow-hidden"></div>
      <Authenticator>
        {({ signOut }) => (
          <main>
            <main className="w-full max-w-screen-lg px-4"></main>
            <header className='App-header'>
              {/* Home Page */}
              <Router>
                <nav>
                  <ul>
                    <li><Link to="/employer">Employer Profile</Link></li>
                    <li><Link to="/private">Private Profile</Link></li>
                    <li><Link to="/public">Public Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                  </ul>
                </nav>
                <Routes>
                  <Route path="/employer" element={<EmployerProfile />} />
                  <Route path="/private" element={<PrivateProfile />} />
                  <Route path="/public" element={<PublicProfile />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </Router>

              {/* Sign Out Button */}
              <button 
                onClick={signOut} 
                style={{ margin: '20px', fontSize: '0.8rem', padding: '5px 10px', marginTop: '20px' }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
