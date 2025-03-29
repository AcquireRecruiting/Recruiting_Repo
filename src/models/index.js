// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BusinessInfo, Achievements, PersonalInfo, JobPosts } = initSchema(schema);

export {
  BusinessInfo,
  Achievements,
  PersonalInfo,
  JobPosts
};