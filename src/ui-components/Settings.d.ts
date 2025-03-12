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
export declare type SettingsOverridesProps = {
    Settings?: PrimitiveOverrideProps<ViewProps>;
    Form?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 2610465"?: PrimitiveOverrideProps<FlexProps>;
    "Joe Barberio"?: PrimitiveOverrideProps<TextProps>;
    "Change profile photo"?: PrimitiveOverrideProps<TextProps>;
    Input21666?: PrimitiveOverrideProps<FlexProps>;
    "Input title21667"?: PrimitiveOverrideProps<TextProps>;
    Field21668?: PrimitiveOverrideProps<FlexProps>;
    Label21669?: PrimitiveOverrideProps<TextProps>;
    Input21670?: PrimitiveOverrideProps<FlexProps>;
    "Input title21671"?: PrimitiveOverrideProps<TextProps>;
    Field21672?: PrimitiveOverrideProps<FlexProps>;
    Label21673?: PrimitiveOverrideProps<TextProps>;
    "Input List"?: PrimitiveOverrideProps<FlexProps>;
    "Input title21675"?: PrimitiveOverrideProps<TextProps>;
    Field21676?: PrimitiveOverrideProps<FlexProps>;
    Label21677?: PrimitiveOverrideProps<TextProps>;
    Field21678?: PrimitiveOverrideProps<FlexProps>;
    Label21679?: PrimitiveOverrideProps<TextProps>;
    Field21680?: PrimitiveOverrideProps<FlexProps>;
    Label21681?: PrimitiveOverrideProps<TextProps>;
    "Frame 2610466"?: PrimitiveOverrideProps<FlexProps>;
    "plus-circle"?: PrimitiveOverrideProps<ViewProps>;
    Vector21684?: PrimitiveOverrideProps<IconProps>;
    Vector21685?: PrimitiveOverrideProps<IconProps>;
    Vector21686?: PrimitiveOverrideProps<IconProps>;
    "Add another"?: PrimitiveOverrideProps<TextProps>;
    "Large input"?: PrimitiveOverrideProps<FlexProps>;
    Bio?: PrimitiveOverrideProps<TextProps>;
    "Text area"?: PrimitiveOverrideProps<FlexProps>;
    Label21691?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Primary?: PrimitiveOverrideProps<TextProps>;
    "Edit profile"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SettingsOverridesProps | undefined | null;
}>;
export default function Settings(props: SettingsProps): React.ReactElement;
