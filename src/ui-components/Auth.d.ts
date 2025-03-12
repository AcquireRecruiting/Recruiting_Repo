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
export declare type AuthOverridesProps = {
    Auth?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Copy?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    "Input and  button"?: PrimitiveOverrideProps<FlexProps>;
    Field?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    Button2365?: PrimitiveOverrideProps<FlexProps>;
    "Primary Button Text"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<FlexProps>;
    "Divider Line2368"?: PrimitiveOverrideProps<ViewProps>;
    "Divider Text"?: PrimitiveOverrideProps<TextProps>;
    "Divider Line2370"?: PrimitiveOverrideProps<ViewProps>;
    Button2371?: PrimitiveOverrideProps<ViewProps>;
    "Google Button Text"?: PrimitiveOverrideProps<TextProps>;
    Google?: PrimitiveOverrideProps<ViewProps>;
    Vector2374?: PrimitiveOverrideProps<IconProps>;
    Vector2375?: PrimitiveOverrideProps<IconProps>;
    Vector2376?: PrimitiveOverrideProps<IconProps>;
    Vector2377?: PrimitiveOverrideProps<IconProps>;
    "Terms and Privacy Text"?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AuthProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AuthOverridesProps | undefined | null;
}>;
export default function Auth(props: AuthProps): React.ReactElement;
