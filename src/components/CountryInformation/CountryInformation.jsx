import React from 'react'
import {  useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import {
    CountryContainer,
    CountryImage,
    Image,
    CountryInfo,
    CountryName,
    PrimaryDescription,
    Description,
    Label,
    MainDescription,
    TextContainer,
    SecondaryDescription,
    BorderCountries,
    Item,
    ItemsContainer
} from "./CountryInformation.styles"
const CountryInformation = (props) => {
    const country = useSelector(state=>state.countriesReducer.country)
    return (
        <CountryContainer>
            {country ? 
                <>
                    <CountryImage>
                        <Image src={country.flag}/>
                    </CountryImage>
                    
                    <CountryInfo>
                        <CountryName>
                            { country.name}
                        </CountryName>
                    
                        <MainDescription>
                            <PrimaryDescription>
                                <TextContainer>
                                    <Description>
                                        <Label>Native name:</Label> {  country.nativeName}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Population:</Label> { country.population}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Region:</Label> {country.region}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Sub Region:</Label> {country.subregion}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Capital:</Label> { country.capital}
                                    </Description>
                                </TextContainer>
                            </PrimaryDescription>
        
        
                            <SecondaryDescription>
                                <TextContainer>
                                    <Description>
                                        <Label>Top Level Domain:</Label> { country.topLevelDomain}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Currencies:</Label> { country.currencies[0].name}
                                    </Description>
                                </TextContainer>
                                <TextContainer>
                                    <Description>
                                        <Label>Region:</Label> { country.region}
                                    </Description>
                                </TextContainer>
                                
                            </SecondaryDescription>
                        </MainDescription>
                        <BorderCountries>
                            <Label>Border Countries:</Label>
                            <ItemsContainer>
                                {country.borders ? country.borders.map((border,index)=>(
                                    <Item key={index}>{border}</Item>    
        
                                )) :  "Not founded in the api"}
                            </ItemsContainer>
                        </BorderCountries>         
                    </CountryInfo>
                </>
            :

                <Loader/>
            
            }
            
        </CountryContainer>
    )
}



export default (CountryInformation)
