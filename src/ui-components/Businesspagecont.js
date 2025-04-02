import React from "react";
import { Flex } from "@aws-amplify/ui-react";
import "./AIAssistant.css";
import Dashboard from "../ui-components/Dashboard"; // ✅ Ensure correct import path

const JobBoard = () => {
    return (
      <div className="tech-container">
        <div className="dashboard-container">
          <Flex direction="column" alignItems="center" gap="2rem">
            {/* Load Dashboard Component */}
            <Dashboard />
          </Flex>
        </div>
      </div>
    );
  };

  
export default JobBoard;