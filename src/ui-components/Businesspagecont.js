import React from "react";
import { Flex } from "@aws-amplify/ui-react";
import "./Businesspagecont.css";
import EmployerProfile from '/ui-components/EmployerProfile'

const BusinessPage = () => {
    return (
      <div className="tech-container">
        <div className="dashboard-container">
          <Flex direction="column" alignItems="center" gap="2rem">
            {/* Load Dashboard Component */}
            <EmployerProfile />
          </Flex>
        </div>
      </div>
    );
  };

  
export default BusinessPage;