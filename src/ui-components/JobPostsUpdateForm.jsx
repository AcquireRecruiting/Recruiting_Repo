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
import { getJobPosts } from "../graphql/queries";
import { updateJobPosts } from "../graphql/mutations";
const client = generateClient();
export default function JobPostsUpdateForm(props) {
  const {
    id: idProp,
    jobPosts: jobPostsModelProp,
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
    const cleanValues = jobPostsRecord
      ? { ...initialValues, ...jobPostsRecord }
      : initialValues;
    setJobtitle(cleanValues.jobtitle);
    setJobdescription(cleanValues.jobdescription);
    setSalaryrange(cleanValues.salaryrange);
    setErrors({});
  };
  const [jobPostsRecord, setJobPostsRecord] = React.useState(jobPostsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getJobPosts.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getJobPosts
        : jobPostsModelProp;
      setJobPostsRecord(record);
    };
    queryData();
  }, [idProp, jobPostsModelProp]);
  React.useEffect(resetStateValues, [jobPostsRecord]);
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
          jobdescription: jobdescription ?? null,
          salaryrange: salaryrange ?? null,
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
            query: updateJobPosts.replaceAll("__typename", ""),
            variables: {
              input: {
                id: jobPostsRecord.id,
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
      {...getOverrideProps(overrides, "JobPostsUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || jobPostsModelProp)}
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
              !(idProp || jobPostsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
