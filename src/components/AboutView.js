import Hero from './Hero.js';

const AboutView = () => {
	return (
		<>
			<Hero text='About us' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 offset-lg-2 my-5'>
						<img
							src='https://images.unsplash.com/photo-1619978762902-5eb1b2bee966?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
							alt='' width="400px"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutView;
