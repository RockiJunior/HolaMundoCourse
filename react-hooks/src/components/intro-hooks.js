const MyComponent = (props) => {
	const { myProp } = props;
	return <div>Nombre: {myProp}</div>;
};

export const App = () => {
	return <MyComponent myProp={'lalala'} />;
};
