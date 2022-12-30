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
	ModalError,
	ModalHeader,
	ModalLoading,
} from './styles'
import { ENDPOINT_URL_WS } from '@env'
import { RTCPeerConnection } from 'react-native-webrtc'
// import { WebRTCContext } from '$utils/webrtc_context'

type WsResMessage = {
	type: ReqMessageType
	content: string
}
type WsReqMessage = {
	type: ResMessageType
	content: string
}

enum ResMessageType {
	Connection = 'Connection',
	CodeRequest = 'CodeRequest',
	PeerConnectionEstablished = 'PeerConnectionEstablished',
}

enum ReqMessageType {
	CodeResponse = 'CodeResponse',
	Error = 'Error',
}

const stringfy = (data: object) => JSON.stringify(data)
const to_req = (type: ReqMessageType | ResMessageType, data: object) =>
	stringfy({ type, data: stringfy(data) })

const Home: React.FC = () => {
	const [user] = useContext(UserContext)
	const [modal_visible, set_modal_visible] = useState(false)
	const [error_message, set_error_message] = useState('')
	// const pc = useContext(WebRTCContext)

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

	const handle_click = () => {
		set_modal_visible(true)
		const ws = new WebSocket(ENDPOINT_URL_WS)

		ws.onmessage = async (e) => {
			const message: WsResMessage = JSON.parse(e.data)

			if (
				message.type === ReqMessageType.Error &&
				typeof message.content === 'string'
			) {
				set_error_message(message.content)
				return
			}

			// const offer_description = await pc.createOffer({})
			// await pc.setLocalDescription(offer_description as any)
			// ws.send(
			// 	to_req(ReqMessageType.CodeResponse, {
			// 		user_id: user.id,
			// 		target_id: message.content,
			// 		code: {
			// 			sdp: pc.localDescription?.sdp,
			// 			type: pc.localDescription?.type,
			// 		},
			// 	})
			// )
		}

		ws.onopen = () => {
			ws.send(
				to_req(ResMessageType.Connection, {
					id: user.id,
					slave: false,
				})
			)
		}
		ws.onclose = (e) => {
			// set_modal_visible(false)
		}

		nav.navigate('chatting')
	}

	useEffect(() => set_modal_color(get_random_color), [modal_visible])

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
						{!error_message ? (
							<ModalLoading size="large" color={modal_color} />
						) : (
							<ModalError>{error_message}</ModalError>
						)}
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
				<MainButton onPress={handle_click} />
				<WaterMark />
			</Container>
		</>
	)
}

export default Home
