/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function EmployerProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1259px"
      height="1807px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EmployerProfile")}
      {...rest}
    >
      <View
        width="1280px"
        height="1762px"
        {...getOverrideProps(overrides, "Portfolio")}
      ></View>
    </View>
  );
}
