/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
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
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <View
        width="1280px"
        height="1775px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1), rgba(231,231,231,1), rgba(110,135,151,1))"
        {...getOverrideProps(overrides, "HomePage1214")}
      >
        <Image
          width="89.2px"
          height="98px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="114px"
          left="calc(50% - 44.6px - 13.4px)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Acquire_logo_gold 1")}
        ></Image>
        <Flex
          width="1280px"
          height="unset"
          {...getOverrideProps(overrides, "NavBarHeader2")}
        ></Flex>
      </View>
    </View>
  );
}
