import Hero from './Hero.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieView = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [movieDetails, setMovieDetails] = useState({});

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=46bb169836263cddc402ee72442cbbf0&language=en-US`
		)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	function renderMovieDetails() {
		if (isLoading) {
			return <Hero text='Loading...' />;
		}
		if (movieDetails) {
			const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
			const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
			const genericPoster =
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';

			return (
				<>
					<Hero text={movieDetails.original_title} backdrop={backdropUrl} />;
					<div className='container my-5'>
						<div className='row'>
							<div className='col-md-3'>
								{movieDetails.poster_path == null ? (
									<img
										src={genericPoster}
										alt='...'
										className='img-fluid shadow rounded w-75'
									/>
								) : (
									<img
										src={posterPath}
										alt='...'
										className='img-fluid shadow rounded'
									/>
								)}
							</div>
							<div className='col-md-9'>
								<h2>{movieDetails.original_title}</h2>
								<p className='lead'>{movieDetails.overview}</p>
								{movieDetails.vote_average && (
									<strong>Rating: {movieDetails.vote_average}</strong>
								)}
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	return renderMovieDetails();
};

export default MovieView;
