import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Ciudad.css'

function Ciudad({ id, cities }) {
	const [city, setCity] = useState({});
	const history = useHistory()

	useEffect(() => {
		const cityData = cities.find((elem) => parseInt(id) === elem.id);
		console.log(cityData);
		setCity(cityData);
	}, []);

	function handleBack(e) {
		e.preventDefault()
		history.goBack()
	}

	function round(num) {
		const entero = Math.floor(num);
		const decimal = parseFloat((num - entero).toString().slice(0, 5));
		return entero + decimal;
	}

	if (!city) {
		return <div>This city is not in the list.</div>;
	}
	return (
		<div className="ciudad">
			<div className="container card-body">
				<h2 className='margin'>{city.name}</h2>
				<img
								className="iconoClima"
								src={'http://openweathermap.org/img/wn/' + city.img + '@2x.png'}
								width="120"
								height="120"
								alt=""
							/>
				<div className="info">
					<div className='margin'>Temperture: <b>{round(city.temp/10)} ºC</b></div>
					<div className='margin'>Weather: <b>{city.weather}</b></div>
					<div className='margin'>Wind: <b>{city.wind} km/h</b></div>
					<div className='margin'>Clouds: <b>{city.clouds}</b></div>
					<div className='margin'>Latitud: <b>{city.latitud}º</b></div>
					<div className='margin'>Longitud: <b>{city.longitud}º</b></div>
				</div>
			</div>
			<button className='btn btn-primary backBtn' onClick={e => {handleBack(e)}}><b>{'<'}</b></button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		cities: state.cities,
	};
}

export default connect(mapStateToProps, null)(Ciudad);
