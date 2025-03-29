/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { BusinessInfo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function BusinessInfoUpdateForm(props) {
  const {
    id: idProp,
    businessInfo: businessInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    BusinessName: "",
    BusinessCategory: "",
  };
  const [BusinessName, setBusinessName] = React.useState(
    initialValues.BusinessName
  );
  const [BusinessCategory, setBusinessCategory] = React.useState(
    initialValues.BusinessCategory
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = businessInfoRecord
      ? { ...initialValues, ...businessInfoRecord }
      : initialValues;
    setBusinessName(cleanValues.BusinessName);
    setBusinessCategory(cleanValues.BusinessCategory);
    setErrors({});
  };
  const [businessInfoRecord, setBusinessInfoRecord] = React.useState(
    businessInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BusinessInfo, idProp)
        : businessInfoModelProp;
      setBusinessInfoRecord(record);
    };
    queryData();
  }, [idProp, businessInfoModelProp]);
  React.useEffect(resetStateValues, [businessInfoRecord]);
  const validations = {
    BusinessName: [],
    BusinessCategory: [],
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
          BusinessName,
          BusinessCategory,
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
          await DataStore.save(
            BusinessInfo.copyOf(businessInfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={BusinessName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BusinessName: value,
              BusinessCategory,
            };
            const result = onChange(modelFields);
            value = result?.BusinessName ?? value;
          }
          if (errors.BusinessName?.hasError) {
            runValidationTasks("BusinessName", value);
          }
          setBusinessName(value);
        }}
        onBlur={() => runValidationTasks("BusinessName", BusinessName)}
        errorMessage={errors.BusinessName?.errorMessage}
        hasError={errors.BusinessName?.hasError}
        {...getOverrideProps(overrides, "BusinessName")}
      ></TextField>
      <TextField
        label="Business category"
        isRequired={false}
        isReadOnly={false}
        value={BusinessCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BusinessName,
              BusinessCategory: value,
            };
            const result = onChange(modelFields);
            value = result?.BusinessCategory ?? value;
          }
          if (errors.BusinessCategory?.hasError) {
            runValidationTasks("BusinessCategory", value);
          }
          setBusinessCategory(value);
        }}
        onBlur={() => runValidationTasks("BusinessCategory", BusinessCategory)}
        errorMessage={errors.BusinessCategory?.errorMessage}
        hasError={errors.BusinessCategory?.hasError}
        {...getOverrideProps(overrides, "BusinessCategory")}
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
          isDisabled={!(idProp || businessInfoModelProp)}
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
              !(idProp || businessInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
