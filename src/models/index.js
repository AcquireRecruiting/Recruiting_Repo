// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Achievements, PersonalInfo, JobPosts } = initSchema(schema);

export {
  Achievements,
  PersonalInfo,
  JobPosts
};