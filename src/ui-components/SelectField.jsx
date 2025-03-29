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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SelectField(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: {},
        border: {},
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: {},
        border: {},
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: {},
        border: {},
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: {},
        border: {},
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: { padding: "6px 12px 6px 12px" },
        border: {},
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: { padding: "6px 12px 6px 12px" },
        border: {},
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: { borderRadius: "4px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: { borderRadius: "4px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: { borderRadius: "4px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: { borderRadius: "4px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: { borderRadius: "4px", padding: "6px 12px 6px 12px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: { borderRadius: "4px", padding: "6px 12px 6px 12px" },
        border: {
          paths: [
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(137,148,159,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ],
          display: "block",
        },
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px" },
        "\uD83D\uDD12Icon": {},
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: {},
        "\uD83D\uDD12Icon": {},
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px" },
        "\uD83D\uDD12Icon": { width: "16px", height: "16px" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        SelectField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="column"
      width="300px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "SelectField")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
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
        children="Label"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="left"
        display="none"
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
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        {...getOverrideProps(overrides, "descriptiveText")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(137,148,159,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          display="flex"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Placeholder"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
          ></View>
        </Flex>
        <Icon
          width="unset"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
          paths={[
            {
              d: "M0 0L300 0L300 -1L0 -1L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "border")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
