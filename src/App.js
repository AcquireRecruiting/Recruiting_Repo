import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports"; 
import AcquireRecruitingHome from "./ui-components/AcquireRecruitingHome";
import AcquireLogoGold1 from "./ui-components/Acquirelogogold1";
import { BrowserRouter as Router } from "react-router-dom";
import BusinessCard from "./ui-components/Businesscard";
import JobBoard from "./ui-components/JobBoard";
import AIcard from "./ui-components/AIcard";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center">
      <Router>
        <Authenticator>
          {({ signOut }) => (
            <main className="w-full flex flex-col items-center justify-center">
            

               {/* Centered Content Container */}
        <div className="w-full flex flex-col items-center justify-center space-y-10 mt-10">

{/* Business Page */}
<div className="w-full max-w-4xl flex justify-center">
  <BusinessCard />
</div>

{/* Job Board */}
<div className="w-full max-w-4xl flex justify-center">
  <JobBoard />
</div>

{/* Product Card */}
<div className="w-full max-w-4xl flex justify-center">
  <AIcard />
</div>
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
