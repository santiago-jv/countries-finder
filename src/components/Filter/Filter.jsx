import React, { useRef, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { searchAndFilterCountries } from '../../actions/countriesActions'
import { SelectContainer, SelectInput,Option, OptionsContainer,SelectContent, FaAngleDown} from './Filter.styles'
const REGIONS = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania"
]

const Filter = (props) => {
    const [currentRegion, setCurrentRegion] = useState("Filter by Region")
    const dispatch = useDispatch()
    const optionsRef = useRef()
    
    const setRegion = (event)=>{
        
        setCurrentRegion(event.target.id)
        handleVisualOptions()
        dispatch(searchAndFilterCountries(props.search,event.target.id))
    }
    const handleVisualOptions = ()=> {
        const currentDisplay = optionsRef.current.style.display
        optionsRef.current.style.display= currentDisplay === "block" ? "none" : "block"
    }
    console.log("Search:", props.search);
    return (
        <SelectContainer>
            <SelectInput onClick={handleVisualOptions}>
                <SelectContent>
                    {currentRegion === "Americas"?"America":currentRegion}
                </SelectContent>
                <FaAngleDown/>
            </SelectInput>
            <OptionsContainer ref={optionsRef} >
                {REGIONS.map((region,index) => (
                    <Option key={index} id={region} onClick={setRegion}>
                        {region === "Americas"?"America":region}
                    </Option>

                ))}

            </OptionsContainer>
        </SelectContainer>
    )
}
const mapStateToProps = (state =>{
    return {
        search: state.countriesReducer.search
    }
})
export default connect(mapStateToProps)(Filter)
