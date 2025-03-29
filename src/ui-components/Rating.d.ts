/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type RatingOverridesProps = {
    Rating?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon28327838"?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon28327839"?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon28327840"?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon28327841"?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon28327842"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type RatingProps = React.PropsWithChildren<Partial<FlexProps> & {
    size?: "default" | "large" | "small";
} & {
    overrides?: RatingOverridesProps | undefined | null;
}>;
export default function Rating(props: RatingProps): React.ReactElement;
