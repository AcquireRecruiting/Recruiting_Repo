/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    TextField13254?: PrimitiveOverrideProps<FlexProps>;
    TextField13255?: PrimitiveOverrideProps<FlexProps>;
    TextField13256?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2813260"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2813261"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13262?: MyIconProps;
    Instagram?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon13265?: MyIconProps;
    Twitter?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
