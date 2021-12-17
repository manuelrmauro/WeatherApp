import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand">
				<Link to="/">
					<img
						id="logoHenry"
						src=''
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
					/>
					Weather App
				</Link>
        <Link to="/about">
          <span> - About</span>
        </Link>
			</span>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
