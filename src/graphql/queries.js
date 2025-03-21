/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAchievements = /* GraphQL */ `
  query GetAchievements($id: ID!) {
    getAchievements(id: $id) {
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
export const listAchievements = /* GraphQL */ `
  query ListAchievements(
    $filter: ModelAchievementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAchievements = /* GraphQL */ `
  query SyncAchievements(
    $filter: ModelAchievementsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAchievements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPersonalInfo = /* GraphQL */ `
  query GetPersonalInfo($id: ID!) {
    getPersonalInfo(id: $id) {
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
export const listPersonalInfos = /* GraphQL */ `
  query ListPersonalInfos(
    $filter: ModelPersonalInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPersonalInfos = /* GraphQL */ `
  query SyncPersonalInfos(
    $filter: ModelPersonalInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonalInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getJobPosts = /* GraphQL */ `
  query GetJobPosts($id: ID!) {
    getJobPosts(id: $id) {
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
export const listJobPosts = /* GraphQL */ `
  query ListJobPosts(
    $filter: ModelJobPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncJobPosts = /* GraphQL */ `
  query SyncJobPosts(
    $filter: ModelJobPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJobPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
