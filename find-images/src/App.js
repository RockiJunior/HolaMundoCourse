// import './App.css';
import { Formik, Form, Field } from 'formik';
import './header.css';
import './content.css';
import './article.css';
import axios from 'axios';
import { useState } from 'react';

export const App = () => {
	const [photos, setPhotos] = useState([]);

	const open = (url) => () => {
		window.open(url);
	};

	return (
		<div>
			<header>
				<Formik
					initialValues={{ search: '' }}
					onSubmit={async (values) => {
						const response = await axios(
							`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
							{
								headers: {
									Authorization:
										'Client-ID nSeviNuTUQqhigl1UauADRWdTtXCoyU-DhNPO58a5-o',
								},
							}
						);
						const { data } = response;
						setPhotos(data.results);
					}}
				>
					<Form>
						<Field name="search" />
					</Form>
				</Formik>
			</header>
			<div className="container">
				<div className="center">
					{photos.map((photo) => (
						<article key={photo.id} onClick={open(photo.links.html)}>
							<img src={photo.urls.small} alt={photo.alt_description} />
							<p>{[photo.description, photo.alt_description].join(' - ')}</p>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};
