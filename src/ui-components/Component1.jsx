/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="1775px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <View
        width="1280px"
        height="1775px"
        {...getOverrideProps(overrides, "navbar")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="700"
        color="rgba(79,136,177,1)"
        lineHeight="57.60000228881836px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.81px"
        width="646px"
        height="80px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.63%"
        bottom="89.86%"
        left="24.77%"
        right="24.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Professional Matches"
        {...getOverrideProps(overrides, "My Professional Matches")}
      ></Text>
      <Flex
        width="360px"
        height="56px"
        {...getOverrideProps(overrides, "Search bar")}
      ></Flex>
      <Flex
        width="935px"
        height="568px"
        {...getOverrideProps(overrides, "Stacked card11898")}
      ></Flex>
      <Flex
        width="935px"
        height="663px"
        {...getOverrideProps(overrides, "Stacked card11899")}
      ></Flex>
    </View>
  );
}
