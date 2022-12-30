import { ENDPOINT_URL_WS } from '@env'
import { createContext } from 'react'
import {
	RTCIceCandidate,
	RTCPeerConnection,
	RTCSessionDescription,
} from 'react-native-webrtc'

import { RTCSessionDescriptionInit } from 'react-native-webrtc/lib/typescript/RTCSessionDescription'

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

type ContextType = {
	pc: RTCPeerConnection
	socket: WebSocket
}

export const WebRTCContext = createContext<ContextType>(undefined!)

type Props = {
	children: React.ReactNode
}

const WebRTCContextProvider: React.FC<Props> = ({ children }) => {
	const ws = new WebSocket(ENDPOINT_URL_WS)
	const pc = new RTCPeerConnection({
		iceServers: [
			{
				urls: [
					'stun:stun1.l.google.com:19302',
					'stun:stun2.l.google.com:19302',
				],
			},
			{
				urls: ['turn:35.198.0.186:3478'],
				username: 'cancer',
				credential: 'cancer',
			},
		],
		iceCandidatePoolSize: 10,
	})

	pc.onicecandidate = async ({ candidate }: any) => {
		if (candidate) {
			// await offerCandidates.add(event.candidate.toJSON())
			ws.send(
				JSON.stringify({
					type: 'AddIceCandidate',
					data: JSON.stringify(candidate),
				})
			)
			// console.log(candidate)
		}
	}
	pc.onnnegotiationended = async () => {
		const answer = await pc.createAnswer()
		await pc.setLocalDescription(new RTCSessionDescription(answer as any))
	}

	ws.onopen = () => {
		ws.send(
			JSON.stringify({
				type: 'Connection',
				data: JSON.stringify({
					id: '8c11462f-37d9-40be-a6de-d52a9ffbac9e',
					slave: false,
				}),
			})
		)
	}

	ws.onerror = console.error
	ws.onclose = console.warn

	ws.onmessage = async (e) => {
		const req: Req = JSON.parse(e.data)

		switch (req.type) {
			case ReqMessageType.DidMatch:
				break
			case ReqMessageType.WebRTCConRequested:
				const offer_desc = await pc.createOffer({})
				pc.setLocalDescription(offer_desc as RTCSessionDescriptionInit)
				ws.send(
					JSON.stringify({
						type: '',
						data: JSON.stringify(offer_desc),
					})
				)
				break
			case ReqMessageType.WebRTCAnswer:
				const answer_data = JSON.parse(req.data)
				const answer = new RTCSessionDescription(answer_data.code)
				pc.setRemoteDescription(answer)
				break
			case ReqMessageType.IceCandidateAdded:
				const ice_data: RTCIceCandidate = JSON.parse(req.data)
				console.log(ice_data)
				pc.addIceCandidate(ice_data)
				break
			case ReqMessageType.Error:
				console.error(req.data)
				break

			default:
				break
		}
	}

	return (
		<WebRTCContext.Provider value={{ pc, socket: ws }}>
			{children}
		</WebRTCContext.Provider>
	)
}

export default WebRTCContextProvider
