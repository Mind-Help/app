import ChatHeader from '$components/chat_header'

import Arrow from '$assets/vectors/arrow.svg'

import {
	Button,
	Container,
	ContainerBg,
	Input,
	MessageInput,
	Messages,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import {
	RTCSessionDescription,
	RTCIceCandidate,
	RTCPeerConnection,
} from 'react-native-webrtc'
import { ENDPOINT_URL_WS } from '@env'
import { RTCSessionDescriptionInit } from 'react-native-webrtc/lib/typescript/RTCSessionDescription'
// import { WebRTCContext } from '$utils/webrtc_context'

enum ReqMessageType {
	WebRTCConRequested = 'WebRTCConRequested',
	WebRTCAnswer = 'WebRTCAnswer',
	// WebRTCConAccepted = "WebRTCConAccepted",
	IceCandidateAdded = 'IceCandidateAdded',
	DidMatch = 'DidMatch',
	Error = 'Error',
}

type Req = {
	type: ReqMessageType
	data: string
}

const Chat: React.FC = () => {
	// const [user] = useContext(UserContext)
	const nav = useNavigation()
	return (
		<>
			<ChatHeader
				name="Anon"
				camera_press={() => nav.navigate('call')}
				phone_press={() => nav.navigate('call')}
			/>
			<Container>
				<ContainerBg />
				<Messages />
				<MessageInput>
					<Input />
					<Button>
						<Arrow height={24} width={24} />
					</Button>
				</MessageInput>
			</Container>
		</>
	)
}

export default Chat
