import { Dimensions, TouchableOpacityProps } from 'react-native'
import { transparentize } from 'color2k'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type Tprops = TouchableOpacityProps & {
	label: string
	backgroundColor?: string
	color?: string
}

const Button: React.FC<Tprops> = ({ label, color, ...props }) => {
	return (
		<Container {...props}>
			<Text color={color}>{label}</Text>
		</Container>
	)
}

export default Button

const Container = styled.TouchableOpacity<{ backgroundColor: string }>`
	background-color: ${({ theme, backgroundColor }) =>
		backgroundColor || theme.colors.light1};
	max-width: ${Dimensions.get('window').width}px;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: ${RFValue(8)}px 0;
	border-radius: 4px;
	border-bottom-width: 2px;
	border-right-width: 2px;
	border-color: ${({ theme }) => transparentize(theme.colors.dark4, 0.5)};
`

const Text = styled.Text<{ color: string }>`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	letter-spacing: 0.72px;
	color: ${({ theme, color }) => color || theme.colors.dark1};
`
