/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      title
      description
      videoUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      title
      description
      videoUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      title
      description
      videoUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createBusinessInfo = /* GraphQL */ `
  mutation CreateBusinessInfo(
    $input: CreateBusinessInfoInput!
    $condition: ModelBusinessInfoConditionInput
  ) {
    createBusinessInfo(input: $input, condition: $condition) {
      id
      BusinessName
      BusinessCategory
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateBusinessInfo = /* GraphQL */ `
  mutation UpdateBusinessInfo(
    $input: UpdateBusinessInfoInput!
    $condition: ModelBusinessInfoConditionInput
  ) {
    updateBusinessInfo(input: $input, condition: $condition) {
      id
      BusinessName
      BusinessCategory
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteBusinessInfo = /* GraphQL */ `
  mutation DeleteBusinessInfo(
    $input: DeleteBusinessInfoInput!
    $condition: ModelBusinessInfoConditionInput
  ) {
    deleteBusinessInfo(input: $input, condition: $condition) {
      id
      BusinessName
      BusinessCategory
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
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
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
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
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
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
