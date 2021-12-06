import { SET_COUNTRY_BY_NAME, SEARCH_AND_FILTER_COUNTRIES, SET_COUNTRIES, REMOVE_COUNTRY, CLEAR_FILTERED_COUNTRIES } from "../types/types"


export const getCountries = () =>{
    return async (dispatch)=> {
       const response = await fetch("https://restcountries.com/v2/all")
       const countries = await response.json()
       dispatch(setCountries(countries))
    }
}
export const getCountryByName = (name) => {
    return async (dispatch) => {
        const response = await fetch("https://restcountries.com/v2/name/"+name)
        const data = await response.json()
        console.log("XDXD",data)
        dispatch(setCountry(data[0]))
    }
}

export const removeCountry = ()=> {
    return {
        type:REMOVE_COUNTRY
    }
}

export const clearFilteredCountries = ()=> {
    return {
        type:CLEAR_FILTERED_COUNTRIES
    }
}
export const setCountry = (country) => {

    return {
        type:SET_COUNTRY_BY_NAME,
        payload:{
            country
        }
        
    }
}
export const searchAndFilterCountries = (search,filter) =>{
    return {

        type:SEARCH_AND_FILTER_COUNTRIES,
        payload: {search,filter}
    }

}


export const setCountries = (countries=[])=> {
    return {
        type:SET_COUNTRIES,
        payload:{
            countries
        }
    }
}