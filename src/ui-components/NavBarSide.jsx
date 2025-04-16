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


// Reusable NavItem component
const NavItem = ({ label, iconType, to, overrides, overridePrefix }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <Flex
      gap="8px"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      shrink="0"
      position="relative"
      padding="0px"
      {...getOverrideProps(overrides, `${overridePrefix}Link`)}
    >
      <Flex
        borderRadius="4px"
        padding="6px"
        backgroundColor="rgba(125,152,186,0.86)"
        {...getOverrideProps(overrides, `${overridePrefix}IconContainer`)}
      >
        <MyIcon
          width="18px"
          height="18px"
          type={iconType}
          {...getOverrideProps(overrides, `${overridePrefix}Icon`)}
        />
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(24,29,38,1)"
        lineHeight="24px"
        textAlign="left"
        whiteSpace="pre-wrap"
        children={label}
        {...getOverrideProps(overrides, `${overridePrefix}Label`)}
      />
    </Flex>
  </Link>
);
export default function NavBarSide(props) {
  const { overrides, ...rest } = props;

  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      height="762px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px"
      {...getOverrideProps(overrides, "NavBarSide")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px"
        {...getOverrideProps(overrides, "Frame 32113438")}
      >
        <Flex
          gap="32px"
          direction="column"
          height="618px"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px"
          {...getOverrideProps(overrides, "Frame 32113439")}
        >
        {/* Section: Home */}
<Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Frame 414")}>
  <NavItem label="Home" iconType="home" to="/" overrides={overrides} overridePrefix="home" />
</Flex>

{/* Section: Dashboard, Users, Files */}
<Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Section13446")}>
  <NavItem label="Dashboard" iconType="content" to="/dashboard" overrides={overrides} overridePrefix="dashboard" />
  <NavItem label="Users" iconType="group" to="/users" overrides={overrides} overridePrefix="users" />
  <NavItem label="Files" iconType="file" to="/files" overrides={overrides} overridePrefix="files" />
</Flex>

{/* Section: Data, Settings */}
<Flex direction="column" gap="16px" {...getOverrideProps(overrides, "Section13460")}>
  <NavItem label="Data" iconType="data" to="/data" overrides={overrides} overridePrefix="data" />
  <NavItem label="Settings" iconType="storage" to="/settings" overrides={overrides} overridePrefix="settings" />
</Flex>
        </Flex>

        {/* Footer / Profile Section */}
        <Flex
          gap="32px"
          direction="column"
          padding="0px"
          {...getOverrideProps(overrides, "Frame 32113474")}
        >
          <Flex
            gap="9px"
            direction="row"
            width="385px"
            alignItems="center"
            padding="0px 32px"
            {...getOverrideProps(overrides, "Frame 416")}
          >
            <Flex
              gap="16px"
              direction="row"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              {...getOverrideProps(overrides, "Frame 415")}
            >
              <Image
                width="48px"
                height="48px"
                borderRadius="40px"
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1163")}
              />
              <Flex
                direction="column"
                width="100px"
                alignItems="flex-start"
                {...getOverrideProps(overrides, "Frame 32113478")}
              />
            </Flex>
            <MyIcon
              width="24px"
              height="24px"
              type="settings"
              {...getOverrideProps(overrides, "MyIcon13480")}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}