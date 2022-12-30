import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const WaterMark: React.FC = () => {
	return <Text>MindHelp&copy;</Text>
}

export default WaterMark

const Text = styled.Text`
	position: absolute;
	bottom: ${RFValue(30)}px;
	width: ${Dimensions.get('window').width}px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.dark4};
	letter-spacing: 0.6px;
	font-size: 10px;
`
