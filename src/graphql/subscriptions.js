/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onCreateTraining(filter: $filter) {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onUpdateTraining(filter: $filter) {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onDeleteTraining(filter: $filter) {
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
export const onCreateBusinessInfo = /* GraphQL */ `
  subscription OnCreateBusinessInfo(
    $filter: ModelSubscriptionBusinessInfoFilterInput
  ) {
    onCreateBusinessInfo(filter: $filter) {
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
export const onUpdateBusinessInfo = /* GraphQL */ `
  subscription OnUpdateBusinessInfo(
    $filter: ModelSubscriptionBusinessInfoFilterInput
  ) {
    onUpdateBusinessInfo(filter: $filter) {
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
export const onDeleteBusinessInfo = /* GraphQL */ `
  subscription OnDeleteBusinessInfo(
    $filter: ModelSubscriptionBusinessInfoFilterInput
  ) {
    onDeleteBusinessInfo(filter: $filter) {
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
export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onCreateInfo(filter: $filter) {
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
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onUpdateInfo(filter: $filter) {
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
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo($filter: ModelSubscriptionInfoFilterInput) {
    onDeleteInfo(filter: $filter) {
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
