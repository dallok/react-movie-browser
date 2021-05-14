function Hero({ text, backdrop }) {
	return (
		<header className='bg-dark text-white p-5 hero-container'>
			<h1 className='hero-text'>{text}</h1>
			{backdrop !== 'https://image.tmdb.org/t/p/originalnull' ? (
				<div
					className='hero-backdrop'
					style={{ backgroundImage: `url(${backdrop})` }}
				></div>
			) : (
				<div
					className='hero-backdrop'
					style={{ backgroundImage: 'none' }}
				></div>
			)}
		</header>
	);
}

export default Hero;
