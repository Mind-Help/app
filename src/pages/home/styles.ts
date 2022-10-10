import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.dark4};
	padding-top: ${StatusBar.currentHeight}px;
	align-items: center;
`
