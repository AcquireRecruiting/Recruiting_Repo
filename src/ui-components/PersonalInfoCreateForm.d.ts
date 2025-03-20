/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PersonalInfoCreateFormInputValues = {
    name?: string;
    birthdate?: string;
    education?: string;
    currentjobtitle?: string;
    fieldofinterest?: string;
    email?: string;
};
export declare type PersonalInfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    currentjobtitle?: ValidationFunction<string>;
    fieldofinterest?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalInfoCreateFormOverridesProps = {
    PersonalInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextAreaFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    currentjobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    fieldofinterest?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonalInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonalInfoCreateFormInputValues) => PersonalInfoCreateFormInputValues;
    onSuccess?: (fields: PersonalInfoCreateFormInputValues) => void;
    onError?: (fields: PersonalInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonalInfoCreateFormInputValues) => PersonalInfoCreateFormInputValues;
    onValidate?: PersonalInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalInfoCreateForm(props: PersonalInfoCreateFormProps): React.ReactElement;
