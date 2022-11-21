import TextButton from '$components/text_button'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.dark4};
	align-items: center;
	justify-content: center;
`

export const ModalContentWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const ModalContent = styled.View`
	background-color: ${({ theme }) => theme.colors.dark3};
	border: 1px solid ${({ theme }) => theme.colors.light1};
	padding: 16px;
	border-radius: 4px;
	align-items: center;
`

export const ModalHeader = styled.Text`
	color: ${({ theme }) => theme.colors.light3};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: 18px;
`

export const ModalLoading = styled.ActivityIndicator`
	margin: 12px 0;
`

export const ModalButton = styled(TextButton)``
