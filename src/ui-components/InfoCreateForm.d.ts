/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type InfoCreateFormInputValues = {
    name?: string;
    birthdate?: string;
    education?: string;
    currentjobtitle?: string;
    fieldofinterest?: string;
    email?: string;
};
export declare type InfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    currentjobtitle?: ValidationFunction<string>;
    fieldofinterest?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InfoCreateFormOverridesProps = {
    InfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    currentjobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    fieldofinterest?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InfoCreateFormProps = React.PropsWithChildren<{
    overrides?: InfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InfoCreateFormInputValues) => InfoCreateFormInputValues;
    onSuccess?: (fields: InfoCreateFormInputValues) => void;
    onError?: (fields: InfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InfoCreateFormInputValues) => InfoCreateFormInputValues;
    onValidate?: InfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function InfoCreateForm(props: InfoCreateFormProps): React.ReactElement;
