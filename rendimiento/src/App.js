import { useCallback, useState, useMemo } from 'react';
import Title from './components/Title';
import MyForm from './components/Forms/MyForm';
import MyList from './components/Lists/MyList';

function App() {
	const [valores, setValores] = useState([]);
	const handleSubmit = useCallback((values) => {
		setValores((data) => [...data, values]);
	}, []);

	console.time('memo');

	const iterator = 50000000;
	const memoized = useMemo(() => {
		let total = 0;
		for (let i = 0; i < iterator; i++) {
			total = total * iterator;
		}
	}, [iterator]);

	console.timeEnd('memo');

	return (
		<div>
			<Title>Mi título</Title>
			<MyForm onSubmit={handleSubmit} />
			<MyList data={valores} />
		</div>
	);
}

export default App;
