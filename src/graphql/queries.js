/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTrainings = /* GraphQL */ `
  query SyncTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBusinessInfo = /* GraphQL */ `
  query GetBusinessInfo($id: ID!) {
    getBusinessInfo(id: $id) {
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
export const listBusinessInfos = /* GraphQL */ `
  query ListBusinessInfos(
    $filter: ModelBusinessInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBusinessInfos = /* GraphQL */ `
  query SyncBusinessInfos(
    $filter: ModelBusinessInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinessInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
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
export const getInfo = /* GraphQL */ `
  query GetInfo($id: ID!) {
    getInfo(id: $id) {
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
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncInfos = /* GraphQL */ `
  query SyncInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfos(
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
