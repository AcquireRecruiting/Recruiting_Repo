import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBusinessInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BusinessName?: string | null;
  readonly BusinessCategory?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BusinessName?: string | null;
  readonly BusinessCategory?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessInfo = LazyLoading extends LazyLoadingDisabled ? EagerBusinessInfo : LazyBusinessInfo

export declare const BusinessInfo: (new (init: ModelInit<BusinessInfo>) => BusinessInfo) & {
  copyOf(source: BusinessInfo, mutator: (draft: MutableModel<BusinessInfo>) => MutableModel<BusinessInfo> | void): BusinessInfo;
}

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

type EagerInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Info, 'id'>;
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

type LazyInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Info, 'id'>;
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

export declare type Info = LazyLoading extends LazyLoadingDisabled ? EagerInfo : LazyInfo

export declare const Info: (new (init: ModelInit<Info>) => Info) & {
  copyOf(source: Info, mutator: (draft: MutableModel<Info>) => MutableModel<Info> | void): Info;
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

type EagerTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Training, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTraining = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Training, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly videoUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Training = LazyLoading extends LazyLoadingDisabled ? EagerTraining : LazyTraining

export declare const Training: (new (init: ModelInit<Training>) => Training) & {
  copyOf(source: Training, mutator: (draft: MutableModel<Training>) => MutableModel<Training> | void): Training;
}