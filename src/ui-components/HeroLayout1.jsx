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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Heading: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        Heading: { color: "rgba(255,255,255,1)", children: "BUSINESS PAGE" },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(0,0,0,1)" },
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
    {
      overrides: {
        Heading: {
          color: "rgba(255,255,255,1)",
          children: "RECRUITMENT / JOB BOARD",
        },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(0,0,0,1)" },
        HeroLayout1: {},
      },
      variantValues: { mode: "Mode3" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Russo One"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="AI ASSISTANT"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
          </Flex>
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
