/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32113483"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32113484"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    icon13487?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13488?: MyIconProps;
    label13489?: PrimitiveOverrideProps<TextProps>;
    Section13490?: PrimitiveOverrideProps<FlexProps>;
    label13491?: PrimitiveOverrideProps<TextProps>;
    link13492?: PrimitiveOverrideProps<FlexProps>;
    icon13493?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13494?: MyIconProps;
    label13495?: PrimitiveOverrideProps<TextProps>;
    link13496?: PrimitiveOverrideProps<FlexProps>;
    icon13497?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13498?: MyIconProps;
    label13499?: PrimitiveOverrideProps<TextProps>;
    link13500?: PrimitiveOverrideProps<FlexProps>;
    icon13501?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13502?: MyIconProps;
    label13503?: PrimitiveOverrideProps<TextProps>;
    Section13504?: PrimitiveOverrideProps<FlexProps>;
    label13505?: PrimitiveOverrideProps<TextProps>;
    link13506?: PrimitiveOverrideProps<FlexProps>;
    icon13507?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13508?: MyIconProps;
    label13509?: PrimitiveOverrideProps<TextProps>;
    link13510?: PrimitiveOverrideProps<FlexProps>;
    icon13511?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13512?: MyIconProps;
    label13513?: PrimitiveOverrideProps<TextProps>;
    link13514?: PrimitiveOverrideProps<FlexProps>;
    icon13515?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13516?: MyIconProps;
    label13517?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
