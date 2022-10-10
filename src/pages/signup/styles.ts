import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import LogoSvg from '../../assets/vectors/logo.svg'

export const Container = styled.View`
	position: relative;
	flex: 1;
	background-color: ${({ theme }) => theme.colors.dark1};
	justify-content: center;
	align-items: center;
	padding: 0 ${RFValue(36)}px;
`

export const Logo = styled(LogoSvg)`
	position: absolute;
	top: ${RFValue(28)}px;
	left: ${RFValue(28)}px;
`

export const Heading = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.light3};
	font-size: 36px;
	letter-spacing: ${(36 / 100) * 12}px;
	margin-bottom: ${RFValue(36)}px;
`

export const FormContainer = styled.View`
	padding: ${RFValue(40)}px ${RFValue(30)}px;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.blue4};
	width: 100%;
`
