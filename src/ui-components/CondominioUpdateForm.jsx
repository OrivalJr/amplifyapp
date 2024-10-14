/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCondominio } from "../../queries";
import { updateCondominio } from "../../mutations";
const client = generateClient();
export default function CondominioUpdateForm(props) {
  const {
    id: idProp,
    condominio: condominioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    endereco: "",
    cell: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [endereco, setEndereco] = React.useState(initialValues.endereco);
  const [cell, setCell] = React.useState(initialValues.cell);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = condominioRecord
      ? { ...initialValues, ...condominioRecord }
      : initialValues;
    setName(cleanValues.name);
    setEndereco(cleanValues.endereco);
    setCell(cleanValues.cell);
    setErrors({});
  };
  const [condominioRecord, setCondominioRecord] =
    React.useState(condominioModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCondominio.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCondominio
        : condominioModelProp;
      setCondominioRecord(record);
    };
    queryData();
  }, [idProp, condominioModelProp]);
  React.useEffect(resetStateValues, [condominioRecord]);
  const validations = {
    name: [{ type: "Required" }],
    endereco: [{ type: "Required" }],
    cell: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          endereco,
          cell,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCondominio.replaceAll("__typename", ""),
            variables: {
              input: {
                id: condominioRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CondominioUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              endereco,
              cell,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Endereco"
        isRequired={true}
        isReadOnly={false}
        value={endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              endereco: value,
              cell,
            };
            const result = onChange(modelFields);
            value = result?.endereco ?? value;
          }
          if (errors.endereco?.hasError) {
            runValidationTasks("endereco", value);
          }
          setEndereco(value);
        }}
        onBlur={() => runValidationTasks("endereco", endereco)}
        errorMessage={errors.endereco?.errorMessage}
        hasError={errors.endereco?.hasError}
        {...getOverrideProps(overrides, "endereco")}
      ></TextField>
      <TextField
        label="Cell"
        isRequired={true}
        isReadOnly={false}
        value={cell}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              endereco,
              cell: value,
            };
            const result = onChange(modelFields);
            value = result?.cell ?? value;
          }
          if (errors.cell?.hasError) {
            runValidationTasks("cell", value);
          }
          setCell(value);
        }}
        onBlur={() => runValidationTasks("cell", cell)}
        errorMessage={errors.cell?.errorMessage}
        hasError={errors.cell?.hasError}
        {...getOverrideProps(overrides, "cell")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || condominioModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || condominioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
