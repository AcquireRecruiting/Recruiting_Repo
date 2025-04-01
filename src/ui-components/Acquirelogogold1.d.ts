/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Acquirelogogold1OverridesProps = {
    Acquirelogogold1?: PrimitiveOverrideProps<ViewProps>;
    "Acquire_logo_gold 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Acquirelogogold1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Acquirelogogold1OverridesProps | undefined | null;
}>;
export default function Acquirelogogold1(props: Acquirelogogold1Props): React.ReactElement;
