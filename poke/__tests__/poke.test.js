import { render, waitFor } from '@testing-library/react';
import Poke from '../pages/poke';

describe('Poke', () => {
	it('renders pokemones', async () => {
		const mockResults = [
			{
				name: 'chanchito',
				url: 'https://www.dominio.com/pokemones/1',
			},
		];
		global.fetch = jest.fn().mockImplementation((url) => {
			return new Promise((resolve) => {
				resolve({
					json: () =>
						Promise.resolve({
							results: mockResults,
						}),
				});
			});
		});

		const { getByText } = render(<Poke />);

		const loading = getByText('Cargando...');
		expect(loading).toBeInTheDocument();
		await waitFor(() => getByText('MI APP DE POKEMONES'));
        const element = screen.getByTestId(1);
        const anchor = element.children[0];
        expect(anchor.href).toHaveAttribute('href', '/pokemones/1');
        expect(anchor).toHaveTextContent('chanchito');
	});
});
