import styled from 'styled-components/native'
import { transparentize } from 'color2k'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from '$utils/theme'

import ChatBg from '$assets/vectors/chat_bg.svg'
import { Dimensions } from 'react-native'

export const Container = styled.View`
	flex: 1;
	position: relative;
	background-color: ${({ theme }) => theme.colors.dark1};
	/* justify-content: flex-end; */
`

export const ContainerBg = styled(ChatBg)`
	position: absolute;
`

export const MessageInput = styled.View`
	width: ${Dimensions.get('window').width}px;
	padding: 0 ${RFValue(18)}px;
	margin-bottom: ${RFValue(18)}px;
	flex-direction: row;
`

export const Input = styled.TextInput.attrs({
	placeholder: 'Digite sua mensagem',
	placeholderTextColor: transparentize(theme.colors.light1, 0.5),
})`
	flex: 1;
	padding: 6px 12px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.dark3};
	color: ${({ theme }) => theme.colors.light1};
	font-size: 12px;
	letter-spacing: 1.44px;
	border-bottom-width: 2px;
	border-right-width: 2px;
	border-color: ${({ theme }) => transparentize(theme.colors.dark2, 0.5)};
`

export const Button = styled.TouchableOpacity.attrs({})`
	justify-content: center;
	align-items: center;
	padding: 6px 8px;
	border-radius: 4px;
	margin-left: 8px;
	background-color: ${({ theme }) => theme.colors.dark3};
	border-bottom-width: 2px;
	border-right-width: 2px;
	border-color: ${({ theme }) => transparentize(theme.colors.dark2, 0.5)};
`

export const Messages = styled.FlatList`
	flex: 1;
`
