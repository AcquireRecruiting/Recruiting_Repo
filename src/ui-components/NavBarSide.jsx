/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import { Link } from "react-router-dom";
export default function NavBarSide(props) {
  const { overrides, ...rest } = props;

  const navItem = (to, iconType, label, overridePrefix) => (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Flex
        gap="8px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        padding="0px"
        backgroundColor="#ffffff"
        {...getOverrideProps(overrides, `link${overridePrefix}`)}
      >
        <Flex
          borderRadius="4px"
          padding="6px"
          backgroundColor="rgba(125,152,186,0.86)"
          {...getOverrideProps(overrides, `icon${overridePrefix}`)}
        >
          <MyIcon
            width="18px"
            height="18px"
            type={iconType}
            {...getOverrideProps(overrides, `MyIcon${overridePrefix}`)}
          />
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(24,29,38,1)"
          lineHeight="24px"
          letterSpacing="0.01px"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, `label${overridePrefix}`)}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  );

  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      height="762px"
      padding="32px 0px"
      backgroundColor="#ffffff"
      {...getOverrideProps(overrides, "NavBarSide")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        grow="1"
        padding="0px"
        backgroundColor="#ffffff"
        {...getOverrideProps(overrides, "Frame 32113438")}
      >
        <Flex
          gap="32px"
          direction="column"
          height="618px"
          padding="0px 32px"
          backgroundColor="#ffffff"
          {...getOverrideProps(overrides, "Frame 32113439")}
        >
          {/* Home Section */}
          <Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Frame 414")}>
            {navItem("/", "home", "Home", "13444")}
          </Flex>

          {/* Manage Section */}
          <Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Section13446")}>
            <Text
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              {...getOverrideProps(overrides, "label13447")}
            >
            </Text>
            {navItem("/content", "content", "Content", "13450")}
            {navItem("/users", "group", "Users", "13454")}
            {navItem("/files", "file", "Files", "13458")}
          </Flex>

          {/* Setup Section */}
          <Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Section13460")}>
            <Text
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              {...getOverrideProps(overrides, "label13461")}
            >
            </Text>
            {navItem("/data", "data", "Data", "13464")}
            {navItem("/storage", "storage", "Storage", "13468")}
            {navItem("/auth", "authentication", "Authentication", "13472")}
          </Flex>
        </Flex>

        {/* Footer / Bottom Section if needed */}
        <Flex
          gap="32px"
          direction="column"
          padding="0px"
          {...getOverrideProps(overrides, "Frame 32113474")}
        >
          {/* Add footer links or profile icon here if needed */}
        </Flex>
      </Flex>
    </Flex>
  );
}