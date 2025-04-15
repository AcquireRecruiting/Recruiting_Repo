//* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading } from "@aws-amplify/ui-react"; // ✅ import Heading
import NavBarSide from "./NavBarSide";
import StandardCard from "./StandardCard";
import MarketingFooter from "./MarketingFooter";

export default function JobBoard(props) {
  const { overrides, ...rest } = props;

  return (
    <Flex
      direction="column"
      width="100%"
      minHeight="100vh"
      backgroundColor="#ffffff"
      {...getOverrideProps(overrides, "JobBoard")}
      {...rest}
    >
      {/* Main Row: Sidebar + Content */}
      <Flex
        direction="row"
        flex="1"
        overflow="hidden" // restrict scroll to the content area
      >
        {/* Sidebar */}
        <Flex
          direction="column"
          width="240px"
          minWidth="200px"
          padding="2rem 1rem"
          backgroundColor="#ffffff"
          borderRight="1px solid #ddd"
        >
          <NavBarSide />
        </Flex>

        {/* Main Content */}
        <Flex
          direction="column" // 📦 wrap cards and heading together
          flex="1"
          gap="1.5rem"
          padding="2rem"
          overflow="auto"
          backgroundColor="#ffffff"
          borderRadius="16px"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
          margin="2rem"
        >
          {/* Heading */}
          <Heading level={3}>Job Board</Heading>

          {/* Card Grid */}
          <Flex
            direction="row"
            flexWrap="wrap"
            gap="2rem"
            justifyContent="flex-start"
          >
            <StandardCard width="calc(50% - 1rem)" height="300px" />
            <StandardCard width="calc(50% - 1rem)" height="300px" />
            <StandardCard width="calc(50% - 1rem)" height="300px" />
            <StandardCard width="calc(50% - 1rem)" height="300px" />
          </Flex>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex justifyContent="center" width="100%" padding="2rem 0">
        <MarketingFooter />
      </Flex>
    </Flex>
  );
}