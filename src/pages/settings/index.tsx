import { useContext, useState } from 'react'
import { transparentize } from 'color2k'
import { useNavigation } from '@react-navigation/native'

import Header from '$components/header'
import { theme } from '$utils/theme'
import { UserContext } from '$utils/user_context_provider'

import WaterMark from '$components/water_mark'

import { Container, Option, OptionsWrapper } from './styles'
import SupportSystem from '$components/support_system'

const Settings: React.FC = () => {
	const nav = useNavigation()
	const [support_visible, set_support_visible] = useState(false)
	const [_, set_user] = useContext(UserContext)

	return (
		<>
			<Header />
			<Container
				colors={[
					transparentize(theme.colors.dark4, 50),
					theme.colors.dark1,
				]}
			>
				<OptionsWrapper>
					<Option onPress={() => {}}>usuário</Option>
					<Option onPress={() => set_support_visible(true)}>
						suporte
					</Option>
					<Option
						onPress={() => {
							nav.navigate('first')
							set_user(undefined!)
						}}
					>
						desconectar
					</Option>
				</OptionsWrapper>
				<SupportSystem
					transparent={true}
					animationType="slide"
					visible={support_visible}
					onRequestClose={() => set_support_visible(false)}
					set_visible={set_support_visible}
				/>
			</Container>
			<WaterMark />
		</>
	)
}

export default Settings
