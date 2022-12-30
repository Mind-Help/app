import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import Pfp from '$components/pfp'

import Phone from '$assets/vectors/phone.svg'
import Camera from '$assets/vectors/camera.svg'
import { GestureResponderEvent } from 'react-native'

type Props = {
	name: string
	camera_press: (event: GestureResponderEvent) => void
	phone_press: (event: GestureResponderEvent) => void
}

const ChatHeader: React.FC<Props> = ({ name, camera_press, phone_press }) => {
	return (
		<Container>
			<Left>
				<Pfp />
				<Name>{name}</Name>
			</Left>
			<Right>
				<Camera
					height={28}
					width={28}
					style={{ marginRight: 12 }}
					onPress={camera_press}
				/>
				<Phone height={20} width={20} onPress={phone_press} />
			</Right>
		</Container>
	)
}

export default ChatHeader

const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.dark1};
	border-bottom-color: ${({ theme }) => theme.colors.blue4};
	border-bottom-width: 2px;
	padding: ${RFValue(12)}px ${RFValue(24)}px;
`

const Left = styled.View`
	flex-direction: row;
	align-items: center;
`

const Name = styled.Text`
	font-size: 18px;
	letter-spacing: 1.08px;
	margin-left: ${RFValue(8)}px;
	color: ${({ theme }) => theme.colors.light2};
`

const Right = styled.View`
	flex-direction: row;
	align-items: center;
`
