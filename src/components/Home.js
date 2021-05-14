import Hero from './Hero.js';

const Home = () => {
	return (
		<>
			<Hero text='Welcome to React 201' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 offset-lg-2 my-5'>
						<p className="lead">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
							consectetur cum saepe modi recusandae quibusdam, eveniet delectus
							ab necessitatibus officia repudiandae minima ea. Culpa voluptates
							a dolor nostrum repellat vero!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
