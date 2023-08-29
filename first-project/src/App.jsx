import './App.css';
import { useState } from 'react';

import { Card } from './components/Card/Card';
import { Container } from './components/Container/Container';
import { UserForm } from './components/Form/UserForm';

export const App = () => {
	const [users, setUsers] = useState([]);

	const handleSubmit = user => {
		setUsers([...users, user]);
	};

	return (
		<div style={{ marginTop: '15%' }}>
			<Container>
				<Card>
					<div style={{ padding: 20 }}>
						<UserForm handleSubmit={handleSubmit} />
					</div>
				</Card>
				<Card>
					<ul>
						{users.map((user) => (
							<li key={user.email}>
								{`${user.name} ${user.lastName}: ${user.email}`}
							</li>
						))}
					</ul>
				</Card>
			</Container>
		</div>
	);
};
