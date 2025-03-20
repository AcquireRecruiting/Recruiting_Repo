/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Portfolio from "./Portfolio";
import { View } from "@aws-amplify/ui-react";
export default function EmployerProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1767px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EmployerProfile")}
      {...rest}
    >
      <Portfolio
        width="1440px"
        height="1767px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Portfolio")}
      ></Portfolio>
    </View>
  );
}
