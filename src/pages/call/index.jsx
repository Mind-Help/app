import { useState, useEffect, useContext } from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import {
	RTCSessionDescription,
	RTCView,
	MediaStream,
	mediaDevices,
} from 'react-native-webrtc'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import PhoneSvg from '$assets/vectors/phone_cancel.svg'
import CameraSvg from '$assets/vectors/camera_turnoff.svg'
import { theme } from '$utils/theme'
import { ENDPOINT_URL_WS } from '@env'
import { WebRTCContext } from '$utils/webrtc_context'

const Call = () => {
	const [remoteStream, setRemoteStream] = useState(null)
	const [localStream, setLocalStream] = useState(null)
	const { pc } = useContext(WebRTCContext)

	const startCall = async () => {
		// const channelDoc = firestore().collection('channels').doc()
		// const offerCandidates = channelDoc.collection('offerCandidates')
		// const answerCandidates = channelDoc.collection('answerCandidates')

		// setChannelId(channelDoc.id)

		//create offer
		const offerDescription = await pc.createOffer()
		await pc.setLocalDescription(offerDescription)

		const offer = {
			sdp: offerDescription.sdp,
			type: offerDescription.type,
		}

		// await channelDoc.set({ offer })

		// Listen for remote answer
		// channelDoc.onSnapshot((snapshot) => {
		// 	const data = snapshot.data()
		// 	if (!pc.currentRemoteDescription && data?.answer) {
		// 		const answerDescription = new RTCSessionDescription(data.answer)
		// 		pc.setRemoteDescription(answerDescription)
		// 	}
		// })

		// When answered, add candidate to peer connection
		// answerCandidates.onSnapshot((snapshot) => {
		// 	snapshot.docChanges().forEach((change) => {
		// 		if (change.type === 'added') {
		// 			const data = change.doc.data()
		// 			pc.addIceCandidate(new RTCIceCandidate(data))
		// 		}
		// 	})
		// })
	}

	const joinCall = async () => {
		// const channelDoc = firestore().collection('channels').doc(channelId)
		// const offerCandidates = channelDoc.collection('offerCandidates')
		// const answerCandidates = channelDoc.collection('answerCandidates')

		/*pc.onicecandidate = async (event) => {
			// if (event.candidate) {
			// 	await answerCandidates.add(event.candidate.toJSON())
			// }
		}*/

		// const channelDocument = await channelDoc.get()
		// const channelData = channelDocument.data()

		// const offerDescription = channelData.offer
		const offerDescription = {
			type: 'offer',
			sdp: 'v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 7593998125510474752 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=fingerprint:sha-256 A3:87:8F:AB:78:7D:77:72:FD:50:43:D6:F9:ED:D0:8A:E3:7C:A2:9E:93:F3:D9:5C:91:A3:57:30:FE:04:E6:57\r\na=group:BUNDLE 0 1\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=audio 9 UDP/TLS/RTP/SAVPF 109 9 0 8 101\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2/recvonly urn:ietf:params:rtp-hdrext:csrc-audio-level\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=fmtp:109 maxplaybackrate=48000;stereo=1;useinbandfec=1\r\na=fmtp:101 0-15\r\na=ice-pwd:a046e7994ecaae46214b4a4449afe612\r\na=ice-ufrag:68fe559f\r\na=mid:0\r\na=msid:{532626b2-0e7b-416d-a747-df32e7c01438} {f645e6ab-2824-46e1-9bfa-be74288adf4e}\r\na=rtcp-mux\r\na=rtpmap:109 opus/48000/2\r\na=rtpmap:9 G722/8000/1\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000/1\r\na=setup:actpass\r\na=ssrc:433841757 cname:{5fc4bbed-6b39-474e-8744-f5f829e5170d}\r\nm=video 9 UDP/TLS/RTP/SAVPF 120 124 121 125 126 127 97 98\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:4 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:5 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:6/recvonly http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:7 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=fmtp:126 profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1\r\na=fmtp:97 profile-level-id=42e01f;level-asymmetry-allowed=1\r\na=fmtp:120 max-fs=12288;max-fr=60\r\na=fmtp:124 apt=120\r\na=fmtp:121 max-fs=12288;max-fr=60\r\na=fmtp:125 apt=121\r\na=fmtp:127 apt=126\r\na=fmtp:98 apt=97\r\na=ice-pwd:a046e7994ecaae46214b4a4449afe612\r\na=ice-ufrag:68fe559f\r\na=mid:1\r\na=msid:{532626b2-0e7b-416d-a747-df32e7c01438} {5b989a6c-9982-4faa-9863-81cd111ff750}\r\na=rtcp-fb:120 nack\r\na=rtcp-fb:120 nack pli\r\na=rtcp-fb:120 ccm fir\r\na=rtcp-fb:120 goog-remb\r\na=rtcp-fb:120 transport-cc\r\na=rtcp-fb:121 nack\r\na=rtcp-fb:121 nack pli\r\na=rtcp-fb:121 ccm fir\r\na=rtcp-fb:121 goog-remb\r\na=rtcp-fb:121 transport-cc\r\na=rtcp-fb:126 nack\r\na=rtcp-fb:126 nack pli\r\na=rtcp-fb:126 ccm fir\r\na=rtcp-fb:126 goog-remb\r\na=rtcp-fb:126 transport-cc\r\na=rtcp-fb:97 nack\r\na=rtcp-fb:97 nack pli\r\na=rtcp-fb:97 ccm fir\r\na=rtcp-fb:97 goog-remb\r\na=rtcp-fb:97 transport-cc\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:120 VP8/90000\r\na=rtpmap:124 rtx/90000\r\na=rtpmap:121 VP9/90000\r\na=rtpmap:125 rtx/90000\r\na=rtpmap:126 H264/90000\r\na=rtpmap:127 rtx/90000\r\na=rtpmap:97 H264/90000\r\na=rtpmap:98 rtx/90000\r\na=setup:actpass\r\na=ssrc:2603369845 cname:{5fc4bbed-6b39-474e-8744-f5f829e5170d}\r\na=ssrc:2241497586 cname:{5fc4bbed-6b39-474e-8744-f5f829e5170d}\r\na=ssrc-group:FID 2603369845 2241497586\r\n',
		}

		await pc.setRemoteDescription(
			new RTCSessionDescription(offerDescription)
		)

		const answerDescription = await pc.createAnswer()
		await pc.setLocalDescription(answerDescription)

		const answer = {
			type: answerDescription.type,
			sdp: answerDescription.sdp,
		}

		console.log({ answer })

		// await channelDoc.update({ answer })

		// offerCandidates.onSnapshot((snapshot) => {
		// 	snapshot.docChanges().forEach((change) => {
		// 		if (change.type === 'added') {
		// 			const data = change.doc.data()
		// 			pc.addIceCandidate(new RTCIceCandidate(data))
		// 		}
		// 	})
		// })
	}

	useEffect(() => {
		const start = async () => {
			const local = await mediaDevices.getUserMedia({
				video: true,
				audio: true,
			})
			pc._remoteStreams.set('local', local)
			setLocalStream(local)
			const remote = new MediaStream()
			setRemoteStream(remote)

			// Push tracks from local stream to peer connection
			local.getTracks().forEach((track) => {
				console.log(pc?._remoteStreams)
				pc?._remoteStreams.forEach((val) => val.addTrack(track))
			})

			// Pull tracks from remote stream, add to video stream
			pc.ontrack = (event) => {
				event.streams[0].getTracks().forEach((track) => {
					remote.addTrack(track)
				})
			}

			pc.onaddstream = (event) => {
				setRemoteStream(event.stream)
			}
		}
		start()
		joinCall()
	}, [])

	return (
		<Container behavior="position">
			<SafeAreaView>
				{remoteStream && (
					<RemoteStream
						streamURL={remoteStream?.toURL()}
						objectFit="cover"
						mirror
					/>
				)}
				<Bottom>
					<SecondaryButton>
						<CameraSvg style={buttons.secondary} />
					</SecondaryButton>
					<PrimaryButton>
						<PhoneSvg style={buttons.primary} />
					</PrimaryButton>
					{localStream && (
						<LocalStream
							streamURL={localStream?.toURL()}
							objectFit="cover"
							mirror
						/>
					)}
				</Bottom>
			</SafeAreaView>
		</Container>
	)
}

const Container = styled.KeyboardAvoidingView`
	position: relative;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.dark1};
`

const RemoteStream = styled(RTCView)`
	width: ${Dimensions.get('window').width}px;
	height: ${Dimensions.get('window').height}px;
`

const Bottom = styled.View`
	position: absolute;
	bottom: 24px;
	flex-direction: row;
	width: ${Dimensions.get('window').width}px;
	justify-content: center;
	align-items: flex-end;
`

const LocalStream = styled(RTCView)`
	position: absolute;
	right: ${RFValue(12)}px;
	width: ${RFValue(100)}px;
	height: ${RFValue(160)}px;
	border-width: 2px;
	border-color: ${({ theme }) => theme.colors.green};
	border-radius: 4px;
`

const buttons = StyleSheet.create({
	primary: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.red,
	},
	secondary: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.yellow,
	},
})

const PrimaryButton = styled.Pressable`
	position: absolute;
	margin: 0 auto;
	border-radius: 999px;
	justify-content: center;
	align-items: center;
	padding: ${RFValue(26)}px;
	max-width: ${RFValue(80)}px;
	max-height: ${RFValue(80)}px;
	background-color: ${({ theme }) => theme.colors.red};
	margin: 0 32px;
`

const SecondaryButton = styled.Pressable`
	position: absolute;
	left: ${RFValue(56)}px;
	border-radius: 999px;
	justify-content: center;
	align-items: center;
	padding: ${RFValue(16)}px;
	background-color: ${({ theme }) => theme.colors.yellow};
	max-width: ${RFValue(60)}px;
	max-height: ${RFValue(60)}px;
`

export default Call
