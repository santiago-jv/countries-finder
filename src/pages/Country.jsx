import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCountryByName } from '../actions/countriesActions';
import Button  from '../components/Button/Button'
import CountryInformation from '../components/CountryInformation/CountryInformation'

const Country = () => {
    const {country} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountryByName(country))
    }, [dispatch,country])
    return (
        <>   


            <Button/>
            <CountryInformation />
            
        </>
    )
}

export default Country
