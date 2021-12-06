import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { clearFilteredCountries } from '../../actions/countriesActions'
import { Card, CardBody, CardDescription, CardImage, CardTitle, Description } from './CountryItem.styles'

const CountryItem = ({country}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const goToCountryInfo = ()=>{
        dispatch(clearFilteredCountries())
        navigate('/' + country.name)
    }

    return (
        <Card onClick={goToCountryInfo}>
            <CardImage src={country.flags.png}/>
            <CardBody>
                <CardTitle>{country.name}</CardTitle>
                <CardDescription>
                    <Description>
                        <strong>
                            Population: 
                        </strong>
                        {" " + country.population}
                        
                    </Description>
                    <Description>
                        <strong>
                            Region: 
                        </strong>
                        {" " + country.region}
                        
                    </Description>
                    <Description>
                        <strong>
                            Capital: 
                        </strong>
                        {" " + country.capital}
                    </Description>

                </CardDescription>
            </CardBody>
        </Card>
    )
}

export default CountryItem
