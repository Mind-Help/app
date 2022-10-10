import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { UserStatus } from 'src/gql/generated'

type User = {
	name: string
	email: string
	status: UserStatus
	phone: string
}

type UserState = [User, Dispatch<SetStateAction<User>>]

export const UserContext = createContext<UserState>({} as UserState)

type Props = {
	children: React.ReactNode
}

export default ({ children }: Props) => (
	<UserContext.Provider value={useState<User>({} as User)}>
		{children}
	</UserContext.Provider>
)
