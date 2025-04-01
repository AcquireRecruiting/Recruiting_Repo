/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32113438"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32113439"?: PrimitiveOverrideProps<FlexProps>;
    "Acquire_logo_black 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon13443?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13444?: MyIconProps;
    label13445?: PrimitiveOverrideProps<TextProps>;
    Section13446?: PrimitiveOverrideProps<FlexProps>;
    label13447?: PrimitiveOverrideProps<TextProps>;
    link13448?: PrimitiveOverrideProps<FlexProps>;
    icon13449?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13450?: MyIconProps;
    label13451?: PrimitiveOverrideProps<TextProps>;
    link13452?: PrimitiveOverrideProps<FlexProps>;
    icon13453?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13454?: MyIconProps;
    label13455?: PrimitiveOverrideProps<TextProps>;
    link13456?: PrimitiveOverrideProps<FlexProps>;
    icon13457?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13458?: MyIconProps;
    label13459?: PrimitiveOverrideProps<TextProps>;
    Section13460?: PrimitiveOverrideProps<FlexProps>;
    label13461?: PrimitiveOverrideProps<TextProps>;
    link13462?: PrimitiveOverrideProps<FlexProps>;
    icon13463?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13464?: MyIconProps;
    label13465?: PrimitiveOverrideProps<TextProps>;
    link13466?: PrimitiveOverrideProps<FlexProps>;
    icon13467?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13468?: MyIconProps;
    label13469?: PrimitiveOverrideProps<TextProps>;
    link13470?: PrimitiveOverrideProps<FlexProps>;
    icon13471?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13472?: MyIconProps;
    label13473?: PrimitiveOverrideProps<TextProps>;
    "Frame 32113474"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 32113478"?: PrimitiveOverrideProps<FlexProps>;
    "Wesley Peck"?: PrimitiveOverrideProps<TextProps>;
    MyIcon13480?: MyIconProps;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
