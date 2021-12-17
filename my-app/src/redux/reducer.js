import { GET_CITY, DELETE_CITY } from './actions';

const initialState = {
	cities: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_CITY:
			if (payload && !state.cities.find((city) => city.id === payload.id)) {
				state.cities.push(payload);
				return state;
			}
			return state;
		case DELETE_CITY:
			return state;
		default:
			return state;
	}
}

export default rootReducer;
