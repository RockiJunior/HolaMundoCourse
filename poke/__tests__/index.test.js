import { render, screen } from '@testing-library/react';
import Index, { getStaticProps } from '../pages/index';

describe('Index file', () => {
	describe('Index Component', () => {
		it('Se renderiza correctamente', () => {
			const { getByText, getByTestId } = render(
				<Index
					pokemones={[
						{
							name: 'Chanchito feliz',
							url: '/pokemon/detalle/1',
						},
					]}
				/>
			);

			// _------------------------MODO FACIL
			// const paragraph = screen.getByText('MI APP DE POKEMONES');
			// expect(paragraph).toBeInTheDocument();

			// un poco mas especifico:
			// en el elemento html que tenga el atributo data-testid="titulo"
			const paragraph = getByTestId('titulo');
			expect(paragraph).toBeInTheDocument();
			// --------------------------------------------------
			const chanchito = getByText('Chanchito feliz');
			expect(chanchito).toBeInTheDocument();
		});
	});

	describe('getStaticProps', () => {
		// los describe no pueden ser async en la funcion de su segundo argumento
		// aqui debemos simular el funcionamiento de fetch ya que fetch no
		// funciona en archivos node (o de backend).
		// hay que simular un fetch y lo que retorna ese fetch, entonces recién
		// ahi podemos realizar una comparacion o utilizar el resultado de ese fetch
		it('return pokemones', async () => {
			// los async solo van en los it
			global.fetch = jest.fn().mockImplementation((url) => {
				
                expect(url).toBe(
					'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
				);
				
                return new Promise((resolve) => {
					resolve({
						json: () =>
							Promise.resolve({
								results: 'lista de pokemones',
							}),
					});
				});
			});
            
			const { props } = await getStaticProps();
			expect(props.pokemones).toBe('lista de pokemones');
		});
	});
});
