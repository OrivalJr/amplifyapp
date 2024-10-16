/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Condominio } from "../models";
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
    nome?: string;
    endereco?: string;
    celular?: string;
    foto?: string;
};
export declare type CondominioUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    celular?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CondominioUpdateFormOverridesProps = {
    CondominioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CondominioUpdateFormProps = React.PropsWithChildren<{
    overrides?: CondominioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    condominio?: Condominio;
    onSubmit?: (fields: CondominioUpdateFormInputValues) => CondominioUpdateFormInputValues;
    onSuccess?: (fields: CondominioUpdateFormInputValues) => void;
    onError?: (fields: CondominioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CondominioUpdateFormInputValues) => CondominioUpdateFormInputValues;
    onValidate?: CondominioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CondominioUpdateForm(props: CondominioUpdateFormProps): React.ReactElement;
