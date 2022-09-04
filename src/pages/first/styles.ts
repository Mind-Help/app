import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
	margin-top: ${StatusBar.currentHeight}px;
	flex: 1;
	justify-content: space-around;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.dark1};
`

export const ButtonsContainer = styled.View`
	justify-content: space-between;
	height: ${RFValue(180)}px;
`
