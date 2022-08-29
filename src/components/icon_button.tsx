import { Dimensions, TouchableOpacityProps } from 'react-native'
import { transparentize } from 'color2k'
import Svg, { SvgProps } from 'react-native-svg'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type Tprops = TouchableOpacityProps & {
	icon: React.FC<SvgProps>
	label: string
}

const IconButton: React.FC<Tprops> = ({ icon, label, ...props }) => {
	return (
		<Container {...props}>
			<Icon as={icon} />
			<Text>{label}</Text>
		</Container>
	)
}

export default IconButton

const Container = styled.TouchableOpacity`
	position: relative;
	background-color: ${({ theme }) => theme.colors.light1};
	max-width: ${Dimensions.get('window').width}px;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: ${RFValue(8)}px ${RFValue(72)}px;
	border-radius: 4px;
	border-bottom-width: 2px;
	border-right-width: 2px;
	border-color: ${({ theme }) => transparentize(theme.colors.dark4, 0.5)};
`

const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	letter-spacing: 0.72px;
	color: ${({ theme }) => theme.colors.dark1};
`

const Icon = styled(Svg)`
	position: absolute;
	top: ${RFValue(4)}px;
	left: ${RFValue(4)}px;
	width: ${RFValue(26)}px;
	height: ${RFValue(26)}px;
`
