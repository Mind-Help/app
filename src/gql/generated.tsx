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
  JSONObject: any;
  UUID: any;
};

export type GoogleUserIt = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDoctor: User;
  createUser: User;
  deleteDoctor: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: User;
  signUpGoogle: User;
  updateUser: User;
};


export type MutationCreateDoctorArgs = {
  data: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: UserIt;
};


export type MutationDeleteDoctorArgs = {
  where: Where;
};


export type MutationDeleteUserArgs = {
  where: Where;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpGoogleArgs = {
  data: GoogleUserIt;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserIt;
};

export type Query = {
  __typename?: 'Query';
  getDoctor: User;
  getDoctors: Array<User>;
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetDoctorArgs = {
  where: Where;
};


export type QueryGetUserArgs = {
  where: Where;
};

export type UpdateUserIt = {
  data: Scalars['JSONObject'];
  id: Scalars['UUID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
};

export type UserIt = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum UserStatus {
  Normal = 'NORMAL',
  Pro = 'PRO'
}

export type Where = {
  field: WhereFields;
  value: Scalars['String'];
};

export enum WhereFields {
  Email = 'EMAIL',
  Id = 'ID',
  Phone = 'PHONE'
}

export type SignUpGoogleMutationVariables = Exact<{
  data: GoogleUserIt;
}>;


export type SignUpGoogleMutation = { __typename?: 'Mutation', signUpGoogle: { __typename?: 'User', id: any, name: string, email: string, phone?: string | null, photo?: string | null, resume?: string | null, status: UserStatus, createdAt: any, updatedAt: any } };

export type RegisterMutationVariables = Exact<{
  data: UserIt;
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: any, status: UserStatus } };


export const SignUpGoogleDocument = gql`
    mutation SignUpGoogle($data: GoogleUserIT!) {
  signUpGoogle(data: $data) {
    id
    name
    email
    phone
    photo
    resume
    status
    createdAt
    updatedAt
  }
}
    `;
export type SignUpGoogleMutationFn = Apollo.MutationFunction<SignUpGoogleMutation, SignUpGoogleMutationVariables>;

/**
 * __useSignUpGoogleMutation__
 *
 * To run a mutation, you first call `useSignUpGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpGoogleMutation, { data, loading, error }] = useSignUpGoogleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpGoogleMutation(baseOptions?: Apollo.MutationHookOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpGoogleMutation, SignUpGoogleMutationVariables>(SignUpGoogleDocument, options);
      }
export type SignUpGoogleMutationHookResult = ReturnType<typeof useSignUpGoogleMutation>;
export type SignUpGoogleMutationResult = Apollo.MutationResult<SignUpGoogleMutation>;
export type SignUpGoogleMutationOptions = Apollo.BaseMutationOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: UserIT!) {
  createUser(data: $data) {
    id
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