import Hero from './Hero.js';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const detailUrl = `/movies/${movie.id}`;
	const genericPoster =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
	
	function RenderPoster() {
	if (movie.poster_path == null) {
		return (
			<img
				src={genericPoster}
				className='card-img-top my-5 py-2 mh-100'
				alt={movie.original_title}
				
			/>
		)
	} else {
		return (
			<img
				src={posterUrl}
				className='card-img-top mh-100'
				alt={movie.original_title}
			/>
		);
	}

	}

	return (
		<div className='col-lg-3 col-md-3 col-2 my-4'>
			<div className='card' style={{ width: '18em', height: '550px' }}>
				<RenderPoster />						  
				<div className='card-body'>
					<h5 className='card-title'>{movie.original_title} </h5>
					<Link to={detailUrl} className='btn btn-primary'>
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;
	
	const resultsHtml = searchResults.map((obj, idx) => {
		return <MovieCard movie={obj} key={idx} />;
	});

	const RenderSearchResult = () => {
		if (searchResults.length > 0) {
			return (
				<div className='container'>
					<div className='row'>{resultsHtml}</div>
				</div>
			)
		} else {
			return (
				<>
					<h1 className='text-center mt-5'>
						There is no results. Try with another keywords.
					</h1>
					<img src='https://images.unsplash.com/photo-1555861496-0666c8981751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' className= "w-50 img-fluid rounded mx-auto d-block mt-5" style={{opacity: "0.8"}} alt="..." />
				</>
			);
		}
	}

	return (
		<>
			<Hero text={title} />
			<RenderSearchResult />
		</>
	);
};

export default SearchView;
