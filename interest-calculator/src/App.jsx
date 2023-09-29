import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { useState } from 'react';
import { Balance } from './components/Balance';

const compoundInterest = (deposit, contribution, years, rate) => {
	let total = deposit;
	for (let i = 0; i < years; i++) {
		total = (total + contribution) * (rate + 1);
	}
	return Math.round(total);
};

export const App = () => {
	const [balance, setBalance] = useState('');

	const handleSubmit = ({ deposit, contribution, years, rate }) => {
		const result = compoundInterest(
			Number(deposit),
			Number(contribution),
			Number(years),
			Number(rate)
		);
		setBalance(formatter.format(result));
	};

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return (
		<Container>
			<Section>
				<Formik
					initialValues={{ deposit: '', contribution: '', years: '', rate: '' }}
					onSubmit={handleSubmit}
					validationSchema={Yup.object({
						deposit: Yup.number()
							.required('Required')
							.typeError('Must be a valid number'),
						contribution: Yup.number()
							.required('Required')
							.typeError('Must be a valid number'),
						years: Yup.number()
							.required('Required')
							.typeError('Must be a valid number'),
						rate: Yup.number()
							.required('Required')
							.typeError('Must be a valid number')
							.min(0, 'Min value must be 0')
							.max(1, 'Max value must be 1'),
					})}
				>
					<Form>
						<Input name="deposit" label="Initial Deposit"></Input>
						<Input name="contribution" label="Anual Contribution"></Input>
						<Input name="years" label="Years"></Input>
						<Input name="rate" label="Estimated Interest"></Input>
						<Button type="submit">Calculate</Button>
					</Form>
				</Formik>
				{balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
			</Section>
		</Container>
	);
};
