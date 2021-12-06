import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { getCountries } from '../../actions/countriesActions'
import CountryItem from '../../components/CountryItem/CountryItem'
import Loader from '../../components/Loader/Loader'
import {  CountriesContainer } from './Countries.styles'

const Countries = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
        
    }, [dispatch])
    
    return (
        <CountriesContainer>
            {props.filteredCountries.length > 0 ? 
                props.filteredCountries.map((country,index) => (
                    <CountryItem country={country} key={index}/>
                ))
            :
            <Loader />}
        </CountriesContainer>
    )
}

const mapStateToProps = (state =>{
    return {
        filteredCountries: state.countriesReducer.filteredCountries
    }
})


export default connect(mapStateToProps)(Countries) 
