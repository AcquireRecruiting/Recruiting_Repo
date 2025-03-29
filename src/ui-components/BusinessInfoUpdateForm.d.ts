/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BusinessInfo } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessInfoUpdateFormInputValues = {
    BusinessName?: string;
    BusinessCategory?: string;
};
export declare type BusinessInfoUpdateFormValidationValues = {
    BusinessName?: ValidationFunction<string>;
    BusinessCategory?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessInfoUpdateFormOverridesProps = {
    BusinessInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    BusinessName?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessCategory?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessInfo?: BusinessInfo;
    onSubmit?: (fields: BusinessInfoUpdateFormInputValues) => BusinessInfoUpdateFormInputValues;
    onSuccess?: (fields: BusinessInfoUpdateFormInputValues) => void;
    onError?: (fields: BusinessInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessInfoUpdateFormInputValues) => BusinessInfoUpdateFormInputValues;
    onValidate?: BusinessInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessInfoUpdateForm(props: BusinessInfoUpdateFormProps): React.ReactElement;
