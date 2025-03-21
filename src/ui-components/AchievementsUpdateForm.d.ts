/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Achievements } from "../models";
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
export declare type AchievementsUpdateFormInputValues = {
    professionalachievements?: string;
};
export declare type AchievementsUpdateFormValidationValues = {
    professionalachievements?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AchievementsUpdateFormOverridesProps = {
    AchievementsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    professionalachievements?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AchievementsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AchievementsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    achievements?: Achievements;
    onSubmit?: (fields: AchievementsUpdateFormInputValues) => AchievementsUpdateFormInputValues;
    onSuccess?: (fields: AchievementsUpdateFormInputValues) => void;
    onError?: (fields: AchievementsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AchievementsUpdateFormInputValues) => AchievementsUpdateFormInputValues;
    onValidate?: AchievementsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AchievementsUpdateForm(props: AchievementsUpdateFormProps): React.ReactElement;
