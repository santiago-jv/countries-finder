import { initialState } from "../constants";
import { SET_COUNTRIES, SEARCH_AND_FILTER_COUNTRIES ,SET_COUNTRY_BY_NAME, REMOVE_COUNTRY, CLEAR_FILTERED_COUNTRIES} from "../types/types";

export const countriesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SET_COUNTRIES:

            return {
                ...state,
                countries:action.payload.countries,
                filteredCountries:action.payload.countries
                
            }
        case SEARCH_AND_FILTER_COUNTRIES:

            const filter = action.payload.filter;
            const word = action.payload.search.toLowerCase();
            const length = word.length
            let filteredCountries = state.countries
            if(word !== "" && filter !== "Filter by Region"){
                filteredCountries = state.countries.filter(country => (country.name.slice(0,length).toLowerCase() === word) && country.region === filter)
            }
            else if (word !== "") {
                filteredCountries =  state.countries.filter(country => country.name.slice(0,length).toLowerCase() === word)

            }
            else if (filter !== "Filter by Region"){
                filteredCountries =  state.countries.filter(country => country.region === filter)

            }
           
            return {
                ...state,
                search:action.payload.search,
                filter,                
                filteredCountries
            }
        case SET_COUNTRY_BY_NAME :
            return {
                ...state,
                country: action.payload.country
            }
        case REMOVE_COUNTRY:
            return {
                ...state,
                country: null
            }

        case CLEAR_FILTERED_COUNTRIES:
            return {
                ...state,
                filteredCountries:state.countries
            }
        default:
            return state;

    }
}

