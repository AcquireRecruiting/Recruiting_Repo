/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex } from "@aws-amplify/ui-react";
export default function XRXRNavigationbar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="363px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "XRXRNavigationbar")}
      {...rest}
    >
      <Flex
        width="394px"
        height="79px"
        {...getOverrideProps(overrides, "XR/XR Navigation bar")}
      ></Flex>
    </Flex>
  );
}
