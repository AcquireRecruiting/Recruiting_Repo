/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ProductCardOverridesProps = {
    "72"?: PrimitiveOverrideProps<TextProps>;
    ProductCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<FlexProps>;
    Tags?: PrimitiveOverrideProps<FlexProps>;
    Badge13137?: PrimitiveOverrideProps<FlexProps>;
    Badge13138?: PrimitiveOverrideProps<FlexProps>;
    Badge13139?: PrimitiveOverrideProps<FlexProps>;
    "Information about this product."?: PrimitiveOverrideProps<TextProps>;
    Quote?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "\u201CThis is a quote.\u201C"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    Feature13146?: PrimitiveOverrideProps<FlexProps>;
    Icon13147?: PrimitiveOverrideProps<ViewProps>;
    Vector13148?: PrimitiveOverrideProps<IconProps>;
    Fast?: PrimitiveOverrideProps<TextProps>;
    Feature13150?: PrimitiveOverrideProps<FlexProps>;
    Icon13151?: PrimitiveOverrideProps<ViewProps>;
    Vector13152?: PrimitiveOverrideProps<IconProps>;
    Fun?: PrimitiveOverrideProps<TextProps>;
    Feature13154?: PrimitiveOverrideProps<FlexProps>;
    Icon13155?: PrimitiveOverrideProps<ViewProps>;
    Vector13156?: PrimitiveOverrideProps<IconProps>;
    Flirty?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProductCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductCardOverridesProps | undefined | null;
}>;
export default function ProductCard(props: ProductCardProps): React.ReactElement;
