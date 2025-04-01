/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AcquireRecruitingHomeProps } from "./AcquireRecruitingHome";
import { ViewProps } from "@aws-amplify/ui-react";
import { AcqureLogoProps } from "./AcqureLogo";
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
export declare type WholeHomePageOverridesProps = {
    WholeHomePage?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    HOMEPAGE?: PrimitiveOverrideProps<ViewProps>;
    AcquireRecruitingHome?: AcquireRecruitingHomeProps;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    AcqureLogo?: AcqureLogoProps;
} & EscapeHatchProps;
export declare type WholeHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: WholeHomePageOverridesProps | undefined | null;
}>;
export default function WholeHomePage(props: WholeHomePageProps): React.ReactElement;
