import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const Section = styled.section`
	background-color: #eee;
	border-top: solid 2px palevioletred;
	padding: 20px 25px;
	width: 500px;
	box-shadow: 0 2px 3px rgb(0, 0, 0, 0.3);
`;

export const App = () => {
	return (
		<Container>
			<Section>lala</Section>
		</Container>
	);
};