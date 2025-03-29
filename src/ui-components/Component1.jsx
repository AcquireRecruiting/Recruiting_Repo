/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import XRXRNavigationbar from "./XRXRNavigationbar";
import { View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="363px"
      height="79px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <XRXRNavigationbar
        display="flex"
        gap="0"
        direction="row"
        width="363px"
        height="79px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "XR/XR Navigation bar")}
      ></XRXRNavigationbar>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "gmail_groups")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "stars")}
      ></View>
    </View>
  );
}
