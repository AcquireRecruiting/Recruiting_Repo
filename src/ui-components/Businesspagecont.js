import React from "react";
import { Flex } from "@aws-amplify/ui-react";
import "./Businesspagecont.css";

const BusinessPage = () => {
    return (
      <div className="tech-container">
        <div className="dashboard-container">
          <Flex direction="column" alignItems="center" gap="2rem">
            {/* Load Dashboard Component */}
            <BusinessPage />
          </Flex>
        </div>
      </div>
    );
  };

  
export default BusinessPage;