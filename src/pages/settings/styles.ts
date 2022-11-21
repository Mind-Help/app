import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.dark4};
	align-items: center;
	justify-content: center;
`

export const OptionsWrapper = styled.View``

export const Option = styled.Text`
	text-align: center;
	font-size: 24px;
	padding: 16px;
	color: ${({ theme }) => theme.colors.light1};
	width: ${Dimensions.get('window').width}px;
	font-family: ${({ theme }) => theme.fonts.light};
	background-color: ${({ theme }) => theme.colors.dark4};
	border-bottom-color: ${({ theme }) => theme.colors.blue3};
	border-bottom-width: 2px;
`
