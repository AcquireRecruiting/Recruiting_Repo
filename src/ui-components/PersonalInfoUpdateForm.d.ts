/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PersonalInfo } from "../models";
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
export declare type PersonalInfoUpdateFormInputValues = {
    name?: string;
    birthdate?: string;
    education?: string;
    currentjobtitle?: string;
    fieldofinterest?: string;
    email?: string;
};
export declare type PersonalInfoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    currentjobtitle?: ValidationFunction<string>;
    fieldofinterest?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalInfoUpdateFormOverridesProps = {
    PersonalInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextAreaFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    currentjobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    fieldofinterest?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonalInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    personalInfo?: PersonalInfo;
    onSubmit?: (fields: PersonalInfoUpdateFormInputValues) => PersonalInfoUpdateFormInputValues;
    onSuccess?: (fields: PersonalInfoUpdateFormInputValues) => void;
    onError?: (fields: PersonalInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonalInfoUpdateFormInputValues) => PersonalInfoUpdateFormInputValues;
    onValidate?: PersonalInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalInfoUpdateForm(props: PersonalInfoUpdateFormProps): React.ReactElement;
