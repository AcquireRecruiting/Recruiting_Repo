/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
import NavbarHeader from "./NavBarHeader"; // ✅ Correct relative path
import StandardCard from "./StandardCard";

export default function JobBoard(props) {
  return (
    <div className="tech-container">
      <div className="dashboard-container">
        <Flex direction="column" alignItems="center" gap="2rem">
          {/* Load Dashboard Component */}
          <NavbarHeader />
          <StandardCard />
          <StandardCard />
        </Flex>
      </div>
    </div>
  );
}
