/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Training } from "../models";
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
export declare type TrainingUpdateFormInputValues = {
    title?: string;
    description?: string;
    videoUrl?: string;
    createdAt?: string;
};
export declare type TrainingUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingUpdateFormOverridesProps = {
    TrainingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    training?: Training;
    onSubmit?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onSuccess?: (fields: TrainingUpdateFormInputValues) => void;
    onError?: (fields: TrainingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onValidate?: TrainingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingUpdateForm(props: TrainingUpdateFormProps): React.ReactElement;
