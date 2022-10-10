import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  UUID: any;
};

export type Doctor = {
  __typename?: 'Doctor';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  patientsHistory: Array<Scalars['String']>;
  phone: Scalars['String'];
  resume: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DoctorIt = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  resume: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDoctor: Doctor;
  createUser: User;
  deleteDoctor: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
};


export type MutationCreateDoctorArgs = {
  data: DoctorIt;
};


export type MutationCreateUserArgs = {
  data: UserIt;
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getDoctor: Doctor;
  getDoctors: Array<Doctor>;
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetDoctorArgs = {
  id: Scalars['UUID'];
};


export type QueryGetUserArgs = {
  id: Scalars['UUID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  docsHistory: Array<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  respDocId?: Maybe<Scalars['String']>;
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
};

export type UserIt = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  status?: InputMaybe<UserStatus>;
};

export enum UserStatus {
  Normal = 'NORMAL',
  Pro = 'PRO'
}

export type RegisterMutationVariables = Exact<{
  data: UserIt;
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', status: UserStatus } };


export const RegisterDocument = gql`
    mutation Register($data: UserIT!) {
  createUser(data: $data) {
    status
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;