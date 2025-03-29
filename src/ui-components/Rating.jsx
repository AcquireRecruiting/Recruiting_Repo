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
import { Flex, View } from "@aws-amplify/ui-react";
export default function Rating(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "\uD83D\uDD12Icon28327838": {},
        "\uD83D\uDD12Icon28327839": {},
        "\uD83D\uDD12Icon28327840": {},
        "\uD83D\uDD12Icon28327841": {},
        "\uD83D\uDD12Icon28327842": {},
        Rating: {},
      },
      variantValues: { size: "default" },
    },
    {
      overrides: {
        "\uD83D\uDD12Icon28327838": { width: "16px", height: "16px" },
        "\uD83D\uDD12Icon28327839": { width: "16px", height: "16px" },
        "\uD83D\uDD12Icon28327840": { width: "16px", height: "16px" },
        "\uD83D\uDD12Icon28327841": { width: "16px", height: "16px" },
        "\uD83D\uDD12Icon28327842": { width: "16px", height: "16px" },
        Rating: {},
      },
      variantValues: { size: "small" },
    },
    {
      overrides: {
        "\uD83D\uDD12Icon28327838": { width: "36px", height: "36px" },
        "\uD83D\uDD12Icon28327839": { width: "36px", height: "36px" },
        "\uD83D\uDD12Icon28327840": { width: "36px", height: "36px" },
        "\uD83D\uDD12Icon28327841": { width: "36px", height: "36px" },
        "\uD83D\uDD12Icon28327842": { width: "36px", height: "36px" },
        Rating: {},
      },
      variantValues: { size: "large" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Rating")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon28327838")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon28327839")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon28327840")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon28327841")}
      ></View>
      <View
        width="24px"
        height="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon28327842")}
      ></View>
    </Flex>
  );
}
