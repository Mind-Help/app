import styled from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import GearSvg from '$assets/vectors/gear.svg'
import Pfp from './pfp'

const Header: React.FC = () => {
	const nav = useNavigation()
	const route = useRoute()

	return (
		<Container>
			<Pfp />
			<GearSvg
				onPress={() => {
					if (route.name === 'settings') nav.goBack()
					else nav.navigate('settings')
				}}
			/>
		</Container>
	)
}

export default Header

const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.dark1};
	justify-content: space-between;
	flex-direction: row;
	padding: 14px 24px;
	width: 100%;
	border: 1px solid transparent;
	border-bottom-color: ${({ theme }) => theme.colors.blue4};
`
