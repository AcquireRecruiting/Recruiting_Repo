/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoWithTextOverridesProps = {
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    "Acquire_logo_black 1"?: PrimitiveOverrideProps<ImageProps>;
    "Acquire_logo_black 2"?: PrimitiveOverrideProps<ImageProps>;
    "Acquire Recruiting"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogoWithTextProps = React.PropsWithChildren<Partial<ViewProps> & {
    color?: "brand";
} & {
    overrides?: LogoWithTextOverridesProps | undefined | null;
}>;
export default function LogoWithText(props: LogoWithTextProps): React.ReactElement;
