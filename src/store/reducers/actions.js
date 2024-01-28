export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";

export const SEARCH_TOWN_FIELD_MUTATION_OBSERVER = "SEARCH_TOWN_FIELD_MUTATION_OBSERVER";
export const SEARCH_WEATHER_IN_TOWN = "SEARCH_WEATHER_IN_TOWN";

export const actionCreators = {
    setWeatherData: (payload) => ({ type: SET_WEATHER_DATA, payload }),
    fetchWeatherData: (payload) => ({ type: FETCH_WEATHER_DATA, payload }),

    searchTownFieldMutationObserver: (payload) => ({ type: SEARCH_TOWN_FIELD_MUTATION_OBSERVER, payload }),
    searchWeatherInTown: (payload) => ({ type: SEARCH_WEATHER_IN_TOWN, payload }),
};