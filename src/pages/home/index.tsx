import { transparentize } from 'color2k'

import Header from '$components/header'
import { WaterMark } from '$components/water_mark'

import { theme } from '$utils/theme'

import { Container } from './styles'
import MainButton from '$components/main_button'

const Home: React.FC = () => {
	return (
		<Container
			colors={[
				transparentize(theme.colors.dark4, 50),
				theme.colors.dark1,
			]}
		>
			<Header />
			<MainButton />
			<WaterMark />
		</Container>
	)
}

export default Home
