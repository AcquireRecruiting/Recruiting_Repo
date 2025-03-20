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
export declare type JobPostsUpdateFormInputValues = {
    jobtitle?: string;
    jobdescription?: string;
    salaryrange?: number;
};
export declare type JobPostsUpdateFormValidationValues = {
    jobtitle?: ValidationFunction<string>;
    jobdescription?: ValidationFunction<string>;
    salaryrange?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobPostsUpdateFormOverridesProps = {
    JobPostsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    jobdescription?: PrimitiveOverrideProps<TextFieldProps>;
    salaryrange?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobPostsUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobPostsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobPosts?: any;
    onSubmit?: (fields: JobPostsUpdateFormInputValues) => JobPostsUpdateFormInputValues;
    onSuccess?: (fields: JobPostsUpdateFormInputValues) => void;
    onError?: (fields: JobPostsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobPostsUpdateFormInputValues) => JobPostsUpdateFormInputValues;
    onValidate?: JobPostsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobPostsUpdateForm(props: JobPostsUpdateFormProps): React.ReactElement;
