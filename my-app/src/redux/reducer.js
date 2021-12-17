import { GET_CITY, DELETE_CITY } from './actions';

const initialState = {
	cities: [],
	found : ''
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_CITY:
			if (payload) {
				if (!(state.cities.find((city) => city.id === payload.id))) {
					return {...state, cities: [...state.cities, payload], found: ''};
				} else {
					return {...state, found: 'repeat'};
				}
			} 
			return {...state, found: 'notFound'};
		case DELETE_CITY:
			return {...state, cities: state.cities.filter(city => city.id !== payload)};
		default:
			return state;
	}
}

export default rootReducer;
