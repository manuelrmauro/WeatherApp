import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand">
				<NavLink to="/home" activeClassName="btn-secondary" className="btn btn-outline-secondary btn-sm">
					<span className='button'>HOME</span>
				</NavLink>
				<NavLink to="/about" activeClassName="btn-secondary" className="btn btn-outline-secondary btn-sm">
					<span className='button'>ABOUT</span>
				</NavLink>
			</span>
			<SearchBar />
		</nav>
	);
}

export default Nav;
