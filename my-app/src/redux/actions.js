export const GET_CITY = 'GET_CITY'
export const DELETE_CITY = 'DELETE_CITY'

export const getCity = function (name = '') {
	return function (dispatch) {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4ae2636d8dfbdc3044bede63951a019b`
		)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const city = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					dispatch({type:GET_CITY, payload: city})
				} else {
					dispatch({type:GET_CITY, payload: null})
				}
			});
	};
};

export const deleteCity = function (cityId) {
  return {type: DELETE_CITY, payload: cityId}
}
