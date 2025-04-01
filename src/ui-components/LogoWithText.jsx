/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function LogoWithText(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Acquire_logo_black 1": {},
        "Acquire_logo_black 2": {},
        "Acquire Recruiting": {},
        logo: {},
        LogoWithText: {},
      },
      variantValues: { color: "brand" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="177px"
      height="34px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogoWithText")}
      {...rest}
    >
      <View
        width="127.88px"
        height="18.91px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <Image
          width="22.75px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-0.91px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Acquire_logo_black 1")}
        ></Image>
        <Image
          width="22.75px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-0.91px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Acquire_logo_black 2")}
        ></Image>
        <Text
          fontFamily="Russo One"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="214px"
          height="49px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="31px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Acquire Recruiting"
          {...getOverrideProps(overrides, "Acquire Recruiting")}
        ></Text>
      </View>
    </View>
  );
}
