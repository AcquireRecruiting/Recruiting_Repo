// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BusinessInfo, Achievements, Info, JobPosts, Training } = initSchema(schema);

export {
  BusinessInfo,
  Achievements,
  Info,
  JobPosts,
  Training
};