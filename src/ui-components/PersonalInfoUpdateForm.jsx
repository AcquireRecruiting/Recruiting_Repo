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
import { getPersonalInfo } from "../graphql/queries";
import { updatePersonalInfo } from "../graphql/mutations";
const client = generateClient();
export default function PersonalInfoUpdateForm(props) {
  const {
    id: idProp,
    personalInfo: personalInfoModelProp,
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
    birthdate: "",
    education: "",
    currentjobtitle: "",
    fieldofinterest: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [education, setEducation] = React.useState(initialValues.education);
  const [currentjobtitle, setCurrentjobtitle] = React.useState(
    initialValues.currentjobtitle
  );
  const [fieldofinterest, setFieldofinterest] = React.useState(
    initialValues.fieldofinterest
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personalInfoRecord
      ? { ...initialValues, ...personalInfoRecord }
      : initialValues;
    setName(cleanValues.name);
    setBirthdate(cleanValues.birthdate);
    setEducation(cleanValues.education);
    setCurrentjobtitle(cleanValues.currentjobtitle);
    setFieldofinterest(cleanValues.fieldofinterest);
    setErrors({});
  };
  const [personalInfoRecord, setPersonalInfoRecord] = React.useState(
    personalInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPersonalInfo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPersonalInfo
        : personalInfoModelProp;
      setPersonalInfoRecord(record);
    };
    queryData();
  }, [idProp, personalInfoModelProp]);
  React.useEffect(resetStateValues, [personalInfoRecord]);
  const validations = {
    name: [{ type: "Required" }],
    birthdate: [],
    education: [],
    currentjobtitle: [],
    fieldofinterest: [],
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
          birthdate: birthdate ?? null,
          education: education ?? null,
          currentjobtitle: currentjobtitle ?? null,
          fieldofinterest: fieldofinterest ?? null,
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
            query: updatePersonalInfo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: personalInfoRecord.id,
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
      {...getOverrideProps(overrides, "PersonalInfoUpdateForm")}
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
              birthdate,
              education,
              currentjobtitle,
              fieldofinterest,
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
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate: value,
              education,
              currentjobtitle,
              fieldofinterest,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              education: value,
              currentjobtitle,
              fieldofinterest,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Currentjobtitle"
        isRequired={false}
        isReadOnly={false}
        value={currentjobtitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              education,
              currentjobtitle: value,
              fieldofinterest,
            };
            const result = onChange(modelFields);
            value = result?.currentjobtitle ?? value;
          }
          if (errors.currentjobtitle?.hasError) {
            runValidationTasks("currentjobtitle", value);
          }
          setCurrentjobtitle(value);
        }}
        onBlur={() => runValidationTasks("currentjobtitle", currentjobtitle)}
        errorMessage={errors.currentjobtitle?.errorMessage}
        hasError={errors.currentjobtitle?.hasError}
        {...getOverrideProps(overrides, "currentjobtitle")}
      ></TextField>
      <TextField
        label="Fieldofinterest"
        isRequired={false}
        isReadOnly={false}
        value={fieldofinterest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              education,
              currentjobtitle,
              fieldofinterest: value,
            };
            const result = onChange(modelFields);
            value = result?.fieldofinterest ?? value;
          }
          if (errors.fieldofinterest?.hasError) {
            runValidationTasks("fieldofinterest", value);
          }
          setFieldofinterest(value);
        }}
        onBlur={() => runValidationTasks("fieldofinterest", fieldofinterest)}
        errorMessage={errors.fieldofinterest?.errorMessage}
        hasError={errors.fieldofinterest?.hasError}
        {...getOverrideProps(overrides, "fieldofinterest")}
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
          isDisabled={!(idProp || personalInfoModelProp)}
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
              !(idProp || personalInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
