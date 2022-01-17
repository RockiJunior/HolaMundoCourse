const url = 'https://jsonplaceholder.typicode.com/users';

const fn = async () => {
	const response = await (url,
	{
		method: 'POST', // 'get', 'post', 'put', 'delete'
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer acadebieseexistiruntokendeautorizacion'
		},
		body: JSON.stringify({
			name: 'chanchito feliz',
			website: 'google.com'
		})
	});
	const data = await response.json();
	console.log(data);
};
fn()