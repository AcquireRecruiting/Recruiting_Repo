import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAchievements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Achievements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly professionalachievements?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAchievements = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Achievements, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly professionalachievements?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Achievements = LazyLoading extends LazyLoadingDisabled ? EagerAchievements : LazyAchievements

export declare const Achievements: (new (init: ModelInit<Achievements>) => Achievements) & {
  copyOf(source: Achievements, mutator: (draft: MutableModel<Achievements>) => MutableModel<Achievements> | void): Achievements;
}

type EagerPersonalInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PersonalInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly birthdate?: string | null;
  readonly education?: string | null;
  readonly currentjobtitle?: string | null;
  readonly fieldofinterest?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonalInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PersonalInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly birthdate?: string | null;
  readonly education?: string | null;
  readonly currentjobtitle?: string | null;
  readonly fieldofinterest?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PersonalInfo = LazyLoading extends LazyLoadingDisabled ? EagerPersonalInfo : LazyPersonalInfo

export declare const PersonalInfo: (new (init: ModelInit<PersonalInfo>) => PersonalInfo) & {
  copyOf(source: PersonalInfo, mutator: (draft: MutableModel<PersonalInfo>) => MutableModel<PersonalInfo> | void): PersonalInfo;
}

type EagerJobPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPosts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobtitle: string;
  readonly jobdescription?: string | null;
  readonly salaryrange?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPosts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly jobtitle: string;
  readonly jobdescription?: string | null;
  readonly salaryrange?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobPosts = LazyLoading extends LazyLoadingDisabled ? EagerJobPosts : LazyJobPosts

export declare const JobPosts: (new (init: ModelInit<JobPosts>) => JobPosts) & {
  copyOf(source: JobPosts, mutator: (draft: MutableModel<JobPosts>) => MutableModel<JobPosts> | void): JobPosts;
}