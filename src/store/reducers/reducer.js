
import { SET_WEATHER_DATA, SEARCH_TOWN_FIELD_MUTATION_OBSERVER, SEARCH_WEATHER_IN_TOWN } from './actions';

const initialState = {
    weatherData: null,
    searchTownField: '',
    townToSearch: 'Ростов-на-Дону',
    searchHistory: new Set(),
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return { ...state, weatherData: action.payload };

        case SEARCH_TOWN_FIELD_MUTATION_OBSERVER:
            return { ...state, searchTownField: action.payload };

        case SEARCH_WEATHER_IN_TOWN:
            return { ...state, townToSearch: action.payload, searchTownField: "", searchHistory: new Set([...state.searchHistory, action.payload]) };

        default:
            return state;
    };
}

export default reducer;