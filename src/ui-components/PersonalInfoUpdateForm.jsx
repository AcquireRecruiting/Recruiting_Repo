/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { PersonalInfo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
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
    email: "",
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
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personalInfoRecord
      ? { ...initialValues, ...personalInfoRecord }
      : initialValues;
    setName(
      typeof cleanValues.name === "string" || cleanValues.name === null
        ? cleanValues.name
        : JSON.stringify(cleanValues.name)
    );
    setBirthdate(cleanValues.birthdate);
    setEducation(cleanValues.education);
    setCurrentjobtitle(cleanValues.currentjobtitle);
    setFieldofinterest(cleanValues.fieldofinterest);
    setEmail(cleanValues.email);
    setErrors({});
  };
  const [personalInfoRecord, setPersonalInfoRecord] = React.useState(
    personalInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PersonalInfo, idProp)
        : personalInfoModelProp;
      setPersonalInfoRecord(record);
    };
    queryData();
  }, [idProp, personalInfoModelProp]);
  React.useEffect(resetStateValues, [personalInfoRecord]);
  const validations = {
    name: [{ type: "Required" }, { type: "JSON" }],
    birthdate: [],
    education: [],
    currentjobtitle: [],
    fieldofinterest: [],
    email: [{ type: "Email" }],
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
          birthdate,
          education,
          currentjobtitle,
          fieldofinterest,
          email,
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
            PersonalInfo.copyOf(personalInfoRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PersonalInfoUpdateForm")}
      {...rest}
    >
      <TextAreaField
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
              email,
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
      ></TextAreaField>
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
              email,
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
              email,
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
              email,
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
              email,
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
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              birthdate,
              education,
              currentjobtitle,
              fieldofinterest,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
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
