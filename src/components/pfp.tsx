import { Image } from 'react-native'

import UserPng from '$assets/bitmap/user.png'

import { theme } from '$utils/theme'

type Props = {
	border_color?: string
	image?: string
}

const Pfp: React.FC<Props> = ({ border_color, image }) => {
	return (
		<Image
			source={
				image
					? {
							uri: image,
							width: 36,
							height: 36,
					  }
					: UserPng
			}
			style={{
				borderRadius: 36 / 2,
				borderWidth: 1,
				borderColor: border_color ?? theme.colors.blue3,
				width: 36,
				height: 36,
			}}
		/>
	)
}

export default Pfp
