import { useRef } from 'react'
import { Animated, GestureResponderEvent, PressableProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const plate_offset = RFValue(4)
const MainButton: React.FC<PressableProps> = (props) => {
	const dropdown = useRef(new Animated.Value(-plate_offset)).current
	const text_mb = useRef(new Animated.Value(0)).current

	const handle_click = (e: GestureResponderEvent) => {
		Animated.timing(dropdown, {
			toValue: plate_offset,
			duration: 200,
			useNativeDriver: true,
		}).start()
		Animated.timing(text_mb, {
			toValue: plate_offset * 2,
			duration: 200,
			useNativeDriver: true,
		}).start()

		if (props.onPressIn) props.onPressIn(e)
	}
	const handle_pressout = (e: GestureResponderEvent) => {
		Animated.timing(dropdown, {
			toValue: -plate_offset,
			duration: 200,
			useNativeDriver: true,
		}).start()
		Animated.timing(text_mb, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start()

		if (props.onPressOut) props.onPressOut(e)
	}

	return (
		<Container
			{...(props as any)}
			onPressIn={handle_click}
			onPressOut={handle_pressout}
		>
			<Text
				style={{
					transform: [
						{ translateY: text_mb },
						{ translateX: text_mb },
					],
				}}
			>
				Help!
			</Text>
			<FrontPlate
				style={{
					transform: [
						{
							translateX: dropdown,
						},
						{
							translateY: dropdown,
						},
					],
				}}
			/>
			<BackPlate />
		</Container>
	)
}

export default MainButton

const Container = styled.Pressable`
	position: relative;
	justify-content: center;
	align-items: center;
`
const Text = styled(Animated.Text)`
	color: ${({ theme }) => theme.colors.dark4};
	font-family: ${({ theme }) => theme.fonts.bold};
	letter-spacing: 2.16px;
	font-size: 18px;
	z-index: 20;
	margin-bottom: ${plate_offset * 2}px;
`

const Plate = styled(Animated.View)`
	position: absolute;
	width: ${RFValue(260)}px;
	height: ${RFValue(48)}px;
`
const FrontPlate = styled(Plate)`
	z-index: 10;
	background-color: ${({ theme }) => theme.colors.yellow};
`
const BackPlate = styled(Plate)`
	z-index: 1;
	transform: translate(${plate_offset}px, ${plate_offset}px);
	background-color: ${({ theme }) => theme.colors.orange};
`
