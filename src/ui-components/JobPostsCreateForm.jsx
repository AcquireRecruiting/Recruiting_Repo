/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { JobPosts } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function JobPostsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    jobtitle: "",
    jobdescription: "",
    salaryrange: "",
  };
  const [jobtitle, setJobtitle] = React.useState(initialValues.jobtitle);
  const [jobdescription, setJobdescription] = React.useState(
    initialValues.jobdescription
  );
  const [salaryrange, setSalaryrange] = React.useState(
    initialValues.salaryrange
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setJobtitle(initialValues.jobtitle);
    setJobdescription(initialValues.jobdescription);
    setSalaryrange(initialValues.salaryrange);
    setErrors({});
  };
  const validations = {
    jobtitle: [{ type: "Required" }],
    jobdescription: [],
    salaryrange: [],
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
          jobtitle,
          jobdescription,
          salaryrange,
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
          await DataStore.save(new JobPosts(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "JobPostsCreateForm")}
      {...rest}
    >
      <TextField
        label="Jobtitle"
        isRequired={true}
        isReadOnly={false}
        value={jobtitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobtitle: value,
              jobdescription,
              salaryrange,
            };
            const result = onChange(modelFields);
            value = result?.jobtitle ?? value;
          }
          if (errors.jobtitle?.hasError) {
            runValidationTasks("jobtitle", value);
          }
          setJobtitle(value);
        }}
        onBlur={() => runValidationTasks("jobtitle", jobtitle)}
        errorMessage={errors.jobtitle?.errorMessage}
        hasError={errors.jobtitle?.hasError}
        {...getOverrideProps(overrides, "jobtitle")}
      ></TextField>
      <TextField
        label="Jobdescription"
        isRequired={false}
        isReadOnly={false}
        value={jobdescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jobtitle,
              jobdescription: value,
              salaryrange,
            };
            const result = onChange(modelFields);
            value = result?.jobdescription ?? value;
          }
          if (errors.jobdescription?.hasError) {
            runValidationTasks("jobdescription", value);
          }
          setJobdescription(value);
        }}
        onBlur={() => runValidationTasks("jobdescription", jobdescription)}
        errorMessage={errors.jobdescription?.errorMessage}
        hasError={errors.jobdescription?.hasError}
        {...getOverrideProps(overrides, "jobdescription")}
      ></TextField>
      <TextField
        label="Salaryrange"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salaryrange}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              jobtitle,
              jobdescription,
              salaryrange: value,
            };
            const result = onChange(modelFields);
            value = result?.salaryrange ?? value;
          }
          if (errors.salaryrange?.hasError) {
            runValidationTasks("salaryrange", value);
          }
          setSalaryrange(value);
        }}
        onBlur={() => runValidationTasks("salaryrange", salaryrange)}
        errorMessage={errors.salaryrange?.errorMessage}
        hasError={errors.salaryrange?.hasError}
        {...getOverrideProps(overrides, "salaryrange")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
