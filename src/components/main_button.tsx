import styled from 'styled-components/native'

const MainButton: React.FC = () => {
	return (
		<Container>
			<Text>Help!</Text>
		</Container>
	)
}

export default MainButton

const Container = styled.View`
	margin: 100%;
	background-color: #fff;
	justify-content: center;
	align-items: center;
`

const Text = styled.Text`
	color: white;
	font-size: 36px;
`
