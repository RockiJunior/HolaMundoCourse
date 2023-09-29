import styled, { keyframes } from 'styled-components';

const P = styled.p`
	font-size: 24px;
	color: red;
`;

const Content = styled.div`
	padding: 20px 25px;
`;

const Button = styled.button`
	background-color: ${(props) => (props.primary ? 'red' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'red')};
	padding: 10px 15px;
	border: solid 2px red;
	border-radius: 4px;
	transition: box-shadow 0.2s ease;

	&.secondary {
		background-color: blue;
		border: solid 2px blue;
		color: white;
	}

	&:hover {
		box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
	}

	// si no colocamos el "&" antes del selector de clase, entonces solo le va a aplicar los estilos
	// a los elementos que sean hijos del componente Button, y obviamente tengan la clase colocada
	// por ej:
	.info {
		font-size: 28px;
	}
`;

const Blockbutton = styled(Button)`
	width: 100%;
	font-size: 24px;
`;

const Link = ({ className, ...props }) => {
	return (
		<a
			className={className}
			{...props}
			//  href="#"
		>
			Link
		</a>
	);
};
const StyledLink = styled(Link)`
	color: blue;
`;

// podriamos hacer esto:

// const Input = ({className})=>{
// 	return (
// 		<input type="text" className={className} />
// 	)
// }

// pero styled components nos entrega una funcionalidad que ya nos resuelve la forma en que se pasan las props
// y evita tener que envolver un input dentro de otro componente en vano:

const Input = styled.input.attrs((props) => ({
	type: 'text',
	color: props.color || 'red',
}))`
	font-size: 20px;
	border: 1px solid red;
	color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
	type: 'password',
})`
	// acá podemos sobreescribir los estilos que ya tiene Input
`;

const girar = keyframes`
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${girar} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;

export const App = () => {
	return (
		<Content>
			<P>Hello, i'm a paragraph</P>
			<Button>
				Send <p className="info">Info</p>
			</Button>
			<Button primary>Send</Button>
			<Button className="secondary">Send</Button>
			{/* Esto que viene acá abajo es una forma de tratar a un styled-component como una etiqueta ancord (colocando as="a") */}
			{/* <Blockbutton primary as="a" href="#">
				Send
			</Blockbutton> */}
			<Blockbutton primary>Send</Blockbutton>
			<Link>Link</Link>
			<StyledLink>Link con estilo</StyledLink>
			<Input color="blue" />
			<Password />
			<br />
			<Rotate>Estoy Girando</Rotate>
		</Content>
	);
};
