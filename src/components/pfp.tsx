import { Image } from 'react-native'

import { theme } from '$utils/theme'

type Props = {
	border_color?: string
}

const Pfp: React.FC<Props> = ({ border_color }) => {
	return (
		<Image
			source={{
				uri: 'https://github.com/kkuriboh.png',
				width: 36,
				height: 36,
			}}
			style={{
				borderRadius: 36 / 2,
				borderWidth: 1,
				borderColor: border_color ?? theme.colors.blue3,
			}}
		/>
	)
}

export default Pfp
