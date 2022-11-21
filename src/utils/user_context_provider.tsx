import { UserStatus } from '$gql/generated'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

export type User = {
	id: any
	name: string
	email: string
	status: UserStatus
	phone?: string
	photo?: string
	resume?: string
	createdAt?: Date
	updatedAt?: Date
}

type UserState = [User, Dispatch<SetStateAction<User>>]

export const UserContext = createContext<UserState>({} as UserState)

type Props = {
	children: React.ReactNode
}

export default ({ children }: Props) => (
	<UserContext.Provider value={useState<User>(null!)}>
		{children}
	</UserContext.Provider>
)
