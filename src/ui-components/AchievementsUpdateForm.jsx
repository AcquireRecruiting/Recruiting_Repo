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
import { getAchievements } from "../graphql/queries";
import { updateAchievements } from "../graphql/mutations";
const client = generateClient();
export default function AchievementsUpdateForm(props) {
  const {
    id: idProp,
    achievements: achievementsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    professionalachievements: "",
  };
  const [professionalachievements, setProfessionalachievements] =
    React.useState(initialValues.professionalachievements);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = achievementsRecord
      ? { ...initialValues, ...achievementsRecord }
      : initialValues;
    setProfessionalachievements(cleanValues.professionalachievements);
    setErrors({});
  };
  const [achievementsRecord, setAchievementsRecord] = React.useState(
    achievementsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAchievements.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAchievements
        : achievementsModelProp;
      setAchievementsRecord(record);
    };
    queryData();
  }, [idProp, achievementsModelProp]);
  React.useEffect(resetStateValues, [achievementsRecord]);
  const validations = {
    professionalachievements: [],
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
          professionalachievements: professionalachievements ?? null,
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
            query: updateAchievements.replaceAll("__typename", ""),
            variables: {
              input: {
                id: achievementsRecord.id,
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
      {...getOverrideProps(overrides, "AchievementsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Professionalachievements"
        isRequired={false}
        isReadOnly={false}
        value={professionalachievements}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              professionalachievements: value,
            };
            const result = onChange(modelFields);
            value = result?.professionalachievements ?? value;
          }
          if (errors.professionalachievements?.hasError) {
            runValidationTasks("professionalachievements", value);
          }
          setProfessionalachievements(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "professionalachievements",
            professionalachievements
          )
        }
        errorMessage={errors.professionalachievements?.errorMessage}
        hasError={errors.professionalachievements?.hasError}
        {...getOverrideProps(overrides, "professionalachievements")}
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
          isDisabled={!(idProp || achievementsModelProp)}
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
              !(idProp || achievementsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
