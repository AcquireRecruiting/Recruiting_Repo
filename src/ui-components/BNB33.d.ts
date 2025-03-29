/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BNB33OverridesProps = {
    BNB33?: PrimitiveOverrideProps<ViewProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 373"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 205"?: PrimitiveOverrideProps<IconProps>;
    "Frame 1991"?: PrimitiveOverrideProps<FlexProps>;
    "navigation/menu - left"?: PrimitiveOverrideProps<FlexProps>;
    "navigation/menu - home2828518"?: PrimitiveOverrideProps<FlexProps>;
    home?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "navigation/menu - home2828521"?: PrimitiveOverrideProps<FlexProps>;
    search?: PrimitiveOverrideProps<ViewProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    "navigation/menu - right"?: PrimitiveOverrideProps<FlexProps>;
    "navigation/menu - home2828525"?: PrimitiveOverrideProps<FlexProps>;
    cart?: PrimitiveOverrideProps<ViewProps>;
    Cart?: PrimitiveOverrideProps<TextProps>;
    "navigation/menu - home2828528"?: PrimitiveOverrideProps<FlexProps>;
    user?: PrimitiveOverrideProps<ViewProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "Frame 46"?: PrimitiveOverrideProps<ViewProps>;
    shop?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type BNB33Props = React.PropsWithChildren<Partial<ViewProps> & {
    mode?: "Dark" | "Default";
    status?: "Cart" | "Home" | "Profile" | "Search" | "Shop";
} & {
    overrides?: BNB33OverridesProps | undefined | null;
}>;
export default function BNB33(props: BNB33Props): React.ReactElement;
