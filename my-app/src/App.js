import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad';

/* const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
 */
function App() {

	return (
		<div className="App">
			<Route path='/'><Redirect to='/home'/></Route>
			<Route path="/" render={() => <Nav />} />
			<Route
				exact
				path="/home"
				component={Cards} 
			/>
			<Route path="/about" component={About} />
			<Route
				exact
				path="/ciudad/:id"
				render={({ match }) => (
					<Ciudad id={match.params.id}/>
				)}
			/>
		</div>
	);
}

export default App;
