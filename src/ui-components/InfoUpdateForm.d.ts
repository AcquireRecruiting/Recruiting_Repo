/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Info } from "../models";
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
export declare type InfoUpdateFormInputValues = {
    name?: string;
    birthdate?: string;
    education?: string;
    currentjobtitle?: string;
    fieldofinterest?: string;
    email?: string;
};
export declare type InfoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    currentjobtitle?: ValidationFunction<string>;
    fieldofinterest?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InfoUpdateFormOverridesProps = {
    InfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    currentjobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    fieldofinterest?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: InfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    info?: Info;
    onSubmit?: (fields: InfoUpdateFormInputValues) => InfoUpdateFormInputValues;
    onSuccess?: (fields: InfoUpdateFormInputValues) => void;
    onError?: (fields: InfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InfoUpdateFormInputValues) => InfoUpdateFormInputValues;
    onValidate?: InfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InfoUpdateForm(props: InfoUpdateFormProps): React.ReactElement;
