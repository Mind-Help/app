import { Dimensions, ModalProps } from 'react-native'
import styled from 'styled-components/native'

import ReportSvg from '$assets/vectors/mad.svg'
import FeedbackSvg from '$assets/vectors/idea.svg'
import BugSvg from '$assets/vectors/bug.svg'
import TextButton from './text_button'
import { theme } from '$utils/theme'

type Props = {
	set_visible: (bool: boolean) => void
}

const SupportSystem: React.FC<ModalProps & Props> = (props) => {
	return (
		<Container {...props}>
			<ContentWrapper>
				<Content>
					<Options>
						<OptionWrapper>
							<OptionIcon>
								<BugSvg />
							</OptionIcon>
							<OptionText>Bug</OptionText>
						</OptionWrapper>
						<OptionWrapper>
							<OptionIcon>
								<FeedbackSvg />
							</OptionIcon>
							<OptionText>Feedback</OptionText>
						</OptionWrapper>
						<OptionWrapper>
							<OptionIcon>
								<ReportSvg />
							</OptionIcon>
							<OptionText>Denuncia</OptionText>
						</OptionWrapper>
					</Options>
					<Cancel
						label="cancelar"
						color={theme.colors.blue1}
						onPress={() => props.set_visible(false)}
					/>
				</Content>
			</ContentWrapper>
		</Container>
	)
}

export default SupportSystem

const Container = styled.Modal``

const ContentWrapper = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`
const Content = styled.View`
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.dark1};
	width: ${Dimensions.get('window').width}px;
	padding: 16px;
	border-top-width: 1px;
	border-top-color: ${({ theme }) => theme.colors.blue1};
`

const Options = styled.View`
	flex-direction: row;
`
const OptionWrapper = styled.Pressable`
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.dark3};
	min-width: ${Dimensions.get('window').width / 4}px;
	border-radius: 4px;
	padding: 16px;
	margin: 8px;
`
const OptionIcon = styled.View`
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
`
const OptionText = styled.Text`
	color: ${({ theme }) => theme.colors.light3};
	margin-top: 6px;
`

const Cancel = styled(TextButton)``
