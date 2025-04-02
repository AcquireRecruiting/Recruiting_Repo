import React from "react";
import { Flex } from "@aws-amplify/ui-react";
import "./Actions.css";
import NavBarSide from "./NavBarSide"; // ✅ Ensure correct import path

const Actions = () => {
    return (
      <div className="tech-container">
        <div className="dashboard-container">
          <Flex direction="column" alignItems="center" gap="2rem">
            {/* Load Dashboard Component */}
            <NavBarSide />
          </Flex>
        </div>
      </div>
    );
  };

export default Actions;