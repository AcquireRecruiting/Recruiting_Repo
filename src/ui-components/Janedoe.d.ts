/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type JanedoeOverridesProps = {
    Janedoe?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Card143486?: PrimitiveOverrideProps<FlexProps>;
    "paperclip 1143487"?: PrimitiveOverrideProps<ViewProps>;
    Copy143483?: PrimitiveOverrideProps<FlexProps>;
    "Professional Achievements"?: PrimitiveOverrideProps<TextProps>;
    "Professional Achievements Description"?: PrimitiveOverrideProps<TextProps>;
    Copy33159?: PrimitiveOverrideProps<FlexProps>;
    "Interests/Hobbies"?: PrimitiveOverrideProps<TextProps>;
    "Interests/Hobbies Description"?: PrimitiveOverrideProps<TextProps>;
    Copy143488?: PrimitiveOverrideProps<FlexProps>;
    "Work History"?: PrimitiveOverrideProps<TextProps>;
    "Work History Description"?: PrimitiveOverrideProps<TextProps>;
    Card143481?: PrimitiveOverrideProps<FlexProps>;
    "paperclip 1143482"?: PrimitiveOverrideProps<ViewProps>;
    Copy143472?: PrimitiveOverrideProps<FlexProps>;
    Education?: PrimitiveOverrideProps<TextProps>;
    "Education Description"?: PrimitiveOverrideProps<TextProps>;
    Copy143491?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    "Social Icons"?: PrimitiveOverrideProps<FlexProps>;
    "Buttons / Icon143495"?: PrimitiveOverrideProps<ViewProps>;
    Icon143496?: PrimitiveOverrideProps<ViewProps>;
    Icon143497?: PrimitiveOverrideProps<IconProps>;
    "Icons / Social / facebook"?: PrimitiveOverrideProps<ViewProps>;
    Vector143499?: PrimitiveOverrideProps<IconProps>;
    "Buttons / Icon143500"?: PrimitiveOverrideProps<ViewProps>;
    Icon143501?: PrimitiveOverrideProps<ViewProps>;
    Icon143502?: PrimitiveOverrideProps<IconProps>;
    "Icons / Social / linkedin"?: PrimitiveOverrideProps<ViewProps>;
    Vector143504?: PrimitiveOverrideProps<IconProps>;
    "Buttons / Icon143505"?: PrimitiveOverrideProps<ViewProps>;
    Icon143506?: PrimitiveOverrideProps<ViewProps>;
    Icon143507?: PrimitiveOverrideProps<IconProps>;
    "Icons / Social / youtube"?: PrimitiveOverrideProps<ViewProps>;
    Vector143509?: PrimitiveOverrideProps<IconProps>;
    "Buttons / Icon143510"?: PrimitiveOverrideProps<ViewProps>;
    Icon143511?: PrimitiveOverrideProps<ViewProps>;
    Icon143512?: PrimitiveOverrideProps<IconProps>;
    "Icons / Social / instagram"?: PrimitiveOverrideProps<ViewProps>;
    Vector143514?: PrimitiveOverrideProps<IconProps>;
    "00 Primary button"?: PrimitiveOverrideProps<FlexProps>;
    "View Resume"?: PrimitiveOverrideProps<TextProps>;
    "List card"?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Footer Company Name"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    Navigation?: PrimitiveOverrideProps<ViewProps>;
    Avatar153766?: PrimitiveOverrideProps<FlexProps>;
    Avatar153767?: PrimitiveOverrideProps<ViewProps>;
    "Avatar Image"?: PrimitiveOverrideProps<ImageProps>;
    "chevron-down"?: PrimitiveOverrideProps<ViewProps>;
    Vector153770?: PrimitiveOverrideProps<IconProps>;
    List?: PrimitiveOverrideProps<FlexProps>;
    "My Page"?: PrimitiveOverrideProps<TextProps>;
    Explore?: PrimitiveOverrideProps<TextProps>;
    Calendar?: PrimitiveOverrideProps<TextProps>;
    Chat?: PrimitiveOverrideProps<TextProps>;
    "Company Name"?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    Graphic?: PrimitiveOverrideProps<ViewProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type JanedoeProps = React.PropsWithChildren<Partial<ViewProps> & {
    achievements?: String;
    hobbies?: String;
    workhistory?: String;
    education?: String;
    about?: String;
    name?: String;
    facebook?: String;
    linkedin?: String;
    youtube?: String;
    instagram?: String;
    resume?: String;
    graphic?: React.ReactNode;
} & {
    overrides?: JanedoeOverridesProps | undefined | null;
}>;
export default function Janedoe(props: JanedoeProps): React.ReactElement;
