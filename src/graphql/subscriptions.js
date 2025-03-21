/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAchievements = /* GraphQL */ `
  subscription OnCreateAchievements(
    $filter: ModelSubscriptionAchievementsFilterInput
    $owner: String
  ) {
    onCreateAchievements(filter: $filter, owner: $owner) {
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
export const onUpdateAchievements = /* GraphQL */ `
  subscription OnUpdateAchievements(
    $filter: ModelSubscriptionAchievementsFilterInput
    $owner: String
  ) {
    onUpdateAchievements(filter: $filter, owner: $owner) {
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
export const onDeleteAchievements = /* GraphQL */ `
  subscription OnDeleteAchievements(
    $filter: ModelSubscriptionAchievementsFilterInput
    $owner: String
  ) {
    onDeleteAchievements(filter: $filter, owner: $owner) {
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
export const onCreatePersonalInfo = /* GraphQL */ `
  subscription OnCreatePersonalInfo(
    $filter: ModelSubscriptionPersonalInfoFilterInput
  ) {
    onCreatePersonalInfo(filter: $filter) {
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
export const onUpdatePersonalInfo = /* GraphQL */ `
  subscription OnUpdatePersonalInfo(
    $filter: ModelSubscriptionPersonalInfoFilterInput
  ) {
    onUpdatePersonalInfo(filter: $filter) {
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
export const onDeletePersonalInfo = /* GraphQL */ `
  subscription OnDeletePersonalInfo(
    $filter: ModelSubscriptionPersonalInfoFilterInput
  ) {
    onDeletePersonalInfo(filter: $filter) {
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
export const onCreateJobPosts = /* GraphQL */ `
  subscription OnCreateJobPosts(
    $filter: ModelSubscriptionJobPostsFilterInput
    $owner: String
  ) {
    onCreateJobPosts(filter: $filter, owner: $owner) {
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
export const onUpdateJobPosts = /* GraphQL */ `
  subscription OnUpdateJobPosts(
    $filter: ModelSubscriptionJobPostsFilterInput
    $owner: String
  ) {
    onUpdateJobPosts(filter: $filter, owner: $owner) {
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
export const onDeleteJobPosts = /* GraphQL */ `
  subscription OnDeleteJobPosts(
    $filter: ModelSubscriptionJobPostsFilterInput
    $owner: String
  ) {
    onDeleteJobPosts(filter: $filter, owner: $owner) {
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
