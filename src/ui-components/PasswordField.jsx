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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import { Button as ButtonCustom } from "./Button";
export default function PasswordField(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { display: "none", size: "large" },
        Input: { padding: "8px 16px 8px 16px" },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: {
          fontSize: "20px",
          color: "rgba(99,107,117,1)",
          lineHeight: "30px",
          height: "unset",
        },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "large",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "large",
        },
        Input: { borderRadius: "4px", padding: "8px 16px 8px 16px" },
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
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { display: "none" },
        Input: { padding: "8px 16px 8px 16px" },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { color: "rgba(99,107,117,1)", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { display: "none", borderRadius: "0px 4px 4px 0px" },
        Input: { borderRadius: "4px", padding: "8px 16px 8px 16px" },
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
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { display: "none", size: "small" },
        Input: { padding: "6px 12px 6px 12px" },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: {
          fontSize: "14px",
          color: "rgba(99,107,117,1)",
          lineHeight: "21px",
          height: "unset",
        },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "small",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "small",
        },
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
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: {},
        Input: {},
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { size: "large", isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { borderRadius: "0px 4px 4px 0px", size: "large" },
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
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: {},
        Input: {},
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "0px 0px 0px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { display: "none" },
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { borderRadius: "0px 4px 4px 0px" },
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
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { size: "small" },
        Input: { padding: "0px 0px 0px 12px" },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { size: "small", isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "0px 0px 0px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "true",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px", display: "none" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { borderRadius: "0px 4px 4px 0px", size: "small" },
        Input: { borderRadius: "4px", padding: "0px 0px 0px 12px" },
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
        PasswordField: {},
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "true",
        variation: "quiet",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { display: "none", size: "large" },
        Input: { padding: "8px 16px 8px 16px" },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "large",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "large",
        },
        Input: { borderRadius: "4px", padding: "8px 16px 8px 16px" },
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
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { display: "none" },
        Input: { padding: "8px 16px 8px 16px" },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { display: "none", borderRadius: "0px 4px 4px 0px" },
        Input: { borderRadius: "4px", padding: "8px 16px 8px 16px" },
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
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { display: "none", size: "small" },
        Input: { padding: "6px 12px 6px 12px" },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "small",
          isDisabled: "true",
        },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "5px 11px 5px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: {
          display: "none",
          borderRadius: "0px 4px 4px 0px",
          size: "small",
        },
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
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "true",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { size: "large" },
        Input: {},
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { size: "large", isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "0px 0px 0px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "20px", lineHeight: "30px" },
        descriptiveText: {},
        placeholder: { fontSize: "20px", lineHeight: "30px", height: "unset" },
        Button: { borderRadius: "0px 4px 4px 0px", size: "large" },
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
        PasswordField: { gap: "12px" },
      },
      variantValues: {
        size: "large",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: {},
        Button: {},
        Input: {},
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "0px 0px 0px 15px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: {},
        descriptiveText: {},
        placeholder: { height: "unset" },
        Button: { borderRadius: "4px" },
        Input: {},
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
        PasswordField: {},
      },
      variantValues: {
        size: "default",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { size: "small" },
        Input: { padding: "0px 0px 0px 12px" },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { size: "small", isDisabled: "true" },
        Input: {
          border: "1px SOLID rgba(0,0,0,0)",
          borderRadius: "4px",
          padding: "0px 0px 0px 11px",
          backgroundColor: "rgba(233,235,236,1)",
        },
        border: {},
        InputGroup: {},
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "true",
        labelHidden: "false",
        variation: "default",
        hideShowPassword: "false",
      },
    },
    {
      overrides: {
        label: { fontSize: "14px", lineHeight: "21px" },
        descriptiveText: {},
        placeholder: { fontSize: "14px", lineHeight: "21px", height: "unset" },
        Button: { borderRadius: "0px 4px 4px 0px", size: "small" },
        Input: { borderRadius: "4px", padding: "0px 0px 0px 12px" },
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
        PasswordField: { gap: "4px" },
      },
      variantValues: {
        size: "small",
        isDisabled: "false",
        labelHidden: "false",
        variation: "quiet",
        hideShowPassword: "false",
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
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "PasswordField")}
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
          padding="0px 0px 0px 16px"
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
            height="40px"
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
          <ButtonCustom
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(137,148,159,1)"
            borderRadius="1px 5px 5px 1px"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={false}
            variation="default"
            {...getOverrideProps(overrides, "Button")}
          ></ButtonCustom>
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
