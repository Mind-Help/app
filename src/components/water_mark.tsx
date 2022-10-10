import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const WaterMark: React.FC = () => {
	return <Text>MindHelp&copy;</Text>
}

const Text = styled.Text`
	position: absolute;
	bottom: ${RFValue(30)}px;
	left: ${Dimensions.get('window').width / 2 - 30}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.dark4};
	letter-spacing: 0.6px;
	font-size: 10px;
`
