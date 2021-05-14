import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import SearchView from './components/SearchView.js';
import AboutView from './components/AboutView.js';
import MovieView from './components/MovieView.js';
import { Switch, Route } from 'react-router-dom';

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=46bb169836263cddc402ee72442cbbf0&language=en-US&query=${searchText}&page=1&include_adult=false`
			)
				.then(response => response.json())
				.then(data => {
					setSearchResults(data.results);
				});
		}
	}, [searchText]);

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about' component={AboutView} />
				<Route path='/search'>
					<SearchView keyword={searchText} searchResults={searchResults} />
				</Route>
				<Route path='/movies/:id' component={MovieView} />
			</Switch>
		</div>
	);
}

export default App;
