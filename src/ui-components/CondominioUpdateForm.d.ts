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
export declare type CondominioUpdateFormInputValues = {
    name?: string;
    endereco?: string;
    cell?: string;
};
export declare type CondominioUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CondominioUpdateFormOverridesProps = {
    CondominioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CondominioUpdateFormProps = React.PropsWithChildren<{
    overrides?: CondominioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    condominio?: any;
    onSubmit?: (fields: CondominioUpdateFormInputValues) => CondominioUpdateFormInputValues;
    onSuccess?: (fields: CondominioUpdateFormInputValues) => void;
    onError?: (fields: CondominioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CondominioUpdateFormInputValues) => CondominioUpdateFormInputValues;
    onValidate?: CondominioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CondominioUpdateForm(props: CondominioUpdateFormProps): React.ReactElement;
