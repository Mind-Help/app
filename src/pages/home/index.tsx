import { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { transparentize } from 'color2k'
import { useNavigation } from '@react-navigation/native'

import { theme } from '$utils/theme'
import { UserContext } from '$utils/user_context_provider'

import Header from '$components/header'
import WaterMark from '$components/water_mark'
import MainButton from '$components/main_button'

import {
	Container,
	ModalButton,
	ModalContent,
	ModalContentWrapper,
	ModalHeader,
	ModalLoading,
} from './styles'

const Home: React.FC = () => {
	const [modal_visible, set_modal_visible] = useState(false)
	const nav = useNavigation()

	const active_indicator_colors = [
		theme.colors.yellow,
		theme.colors.mauve,
		theme.colors.orange,
		theme.colors.green,
		theme.colors.red,
	]
	const get_random_color = () =>
		active_indicator_colors[
			Math.floor(Math.random() * active_indicator_colors.length)
		]
	const [modal_color, set_modal_color] = useState(get_random_color())
	useEffect(() => set_modal_color(get_random_color), [modal_visible])

	// const [user] = useContext(UserContext)
	// if (user === null) nav.navigate('first')

	return (
		<>
			<Header />
			<Modal
				animationType="slide"
				visible={modal_visible}
				onRequestClose={() => set_modal_visible(false)}
				transparent={true}
			>
				<ModalContentWrapper>
					<ModalContent>
						<ModalHeader>buscando um profissional</ModalHeader>
						<ModalLoading size="large" color={modal_color} />
						<ModalButton
							label="cancelar"
							color={theme.colors.blue2}
							onPress={() => set_modal_visible(false)}
						/>
					</ModalContent>
				</ModalContentWrapper>
			</Modal>
			<Container
				colors={[
					transparentize(theme.colors.dark4, 50),
					theme.colors.dark1,
				]}
			>
				<MainButton onPress={() => set_modal_visible(true)} />
				<WaterMark />
			</Container>
		</>
	)
}

export default Home
