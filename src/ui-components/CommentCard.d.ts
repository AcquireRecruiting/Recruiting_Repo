/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CommentCardOverridesProps = {
    "9913221"?: PrimitiveOverrideProps<TextProps>;
    "9913224"?: PrimitiveOverrideProps<TextProps>;
    "9913227"?: PrimitiveOverrideProps<TextProps>;
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13207?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame13211?: PrimitiveOverrideProps<FlexProps>;
    Frame13212?: PrimitiveOverrideProps<FlexProps>;
    Frame13213?: PrimitiveOverrideProps<FlexProps>;
    Scott?: PrimitiveOverrideProps<TextProps>;
    Frame13215?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13216?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share13218?: PrimitiveOverrideProps<FlexProps>;
    Share13219?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13220?: MyIconProps;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13223?: MyIconProps;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13226?: MyIconProps;
    MyIcon13228?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
