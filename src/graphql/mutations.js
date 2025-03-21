/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAchievements = /* GraphQL */ `
  mutation CreateAchievements(
    $input: CreateAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    createAchievements(input: $input, condition: $condition) {
      id
      professionalachievements
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateAchievements = /* GraphQL */ `
  mutation UpdateAchievements(
    $input: UpdateAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    updateAchievements(input: $input, condition: $condition) {
      id
      professionalachievements
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteAchievements = /* GraphQL */ `
  mutation DeleteAchievements(
    $input: DeleteAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    deleteAchievements(input: $input, condition: $condition) {
      id
      professionalachievements
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createPersonalInfo = /* GraphQL */ `
  mutation CreatePersonalInfo(
    $input: CreatePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    createPersonalInfo(input: $input, condition: $condition) {
      id
      name
      birthdate
      education
      currentjobtitle
      fieldofinterest
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePersonalInfo = /* GraphQL */ `
  mutation UpdatePersonalInfo(
    $input: UpdatePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    updatePersonalInfo(input: $input, condition: $condition) {
      id
      name
      birthdate
      education
      currentjobtitle
      fieldofinterest
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePersonalInfo = /* GraphQL */ `
  mutation DeletePersonalInfo(
    $input: DeletePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    deletePersonalInfo(input: $input, condition: $condition) {
      id
      name
      birthdate
      education
      currentjobtitle
      fieldofinterest
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createJobPosts = /* GraphQL */ `
  mutation CreateJobPosts(
    $input: CreateJobPostsInput!
    $condition: ModelJobPostsConditionInput
  ) {
    createJobPosts(input: $input, condition: $condition) {
      id
      jobtitle
      jobdescription
      salaryrange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateJobPosts = /* GraphQL */ `
  mutation UpdateJobPosts(
    $input: UpdateJobPostsInput!
    $condition: ModelJobPostsConditionInput
  ) {
    updateJobPosts(input: $input, condition: $condition) {
      id
      jobtitle
      jobdescription
      salaryrange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteJobPosts = /* GraphQL */ `
  mutation DeleteJobPosts(
    $input: DeleteJobPostsInput!
    $condition: ModelJobPostsConditionInput
  ) {
    deleteJobPosts(input: $input, condition: $condition) {
      id
      jobtitle
      jobdescription
      salaryrange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
