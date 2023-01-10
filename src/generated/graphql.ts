import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRescuerToRescue?: Maybe<Rescue>;
  createRescue?: Maybe<Rescue>;
  createRescuer?: Maybe<Rescuer>;
};


export type MutationAddRescuerToRescueArgs = {
  rescueId: Scalars['ID'];
  rescuerId: Scalars['ID'];
};


export type MutationCreateRescueArgs = {
  name: Scalars['String'];
};


export type MutationCreateRescuerArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  rescue?: Maybe<Rescue>;
  rescuer?: Maybe<Rescuer>;
  rescuers?: Maybe<Array<Maybe<Rescuer>>>;
  rescues?: Maybe<Array<Maybe<Rescue>>>;
};


export type QueryRescueArgs = {
  id: Scalars['ID'];
};


export type QueryRescuerArgs = {
  id: Scalars['ID'];
};

export type Rescue = {
  __typename?: 'Rescue';
  id: Scalars['ID'];
  name: Scalars['String'];
  rescuers?: Maybe<Array<Maybe<Rescuer>>>;
};

export type Rescuer = {
  __typename?: 'Rescuer';
  id: Scalars['ID'];
  name: Scalars['String'];
  rescues?: Maybe<Array<Maybe<Rescue>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Rescue: ResolverTypeWrapper<Rescue>;
  Rescuer: ResolverTypeWrapper<Rescuer>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Rescue: Rescue;
  Rescuer: Rescuer;
  String: Scalars['String'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRescuerToRescue?: Resolver<Maybe<ResolversTypes['Rescue']>, ParentType, ContextType, RequireFields<MutationAddRescuerToRescueArgs, 'rescueId' | 'rescuerId'>>;
  createRescue?: Resolver<Maybe<ResolversTypes['Rescue']>, ParentType, ContextType, RequireFields<MutationCreateRescueArgs, 'name'>>;
  createRescuer?: Resolver<Maybe<ResolversTypes['Rescuer']>, ParentType, ContextType, RequireFields<MutationCreateRescuerArgs, 'name'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  rescue?: Resolver<Maybe<ResolversTypes['Rescue']>, ParentType, ContextType, RequireFields<QueryRescueArgs, 'id'>>;
  rescuer?: Resolver<Maybe<ResolversTypes['Rescuer']>, ParentType, ContextType, RequireFields<QueryRescuerArgs, 'id'>>;
  rescuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rescuer']>>>, ParentType, ContextType>;
  rescues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rescue']>>>, ParentType, ContextType>;
};

export type RescueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rescue'] = ResolversParentTypes['Rescue']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rescuers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rescuer']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RescuerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rescuer'] = ResolversParentTypes['Rescuer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rescues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rescue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rescue?: RescueResolvers<ContextType>;
  Rescuer?: RescuerResolvers<ContextType>;
};

