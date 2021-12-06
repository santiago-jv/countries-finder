import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { searchAndFilterCountries } from '../../actions/countriesActions'
import { SearchIcon, SearchInput, SearchInputContainer } from './Searcher.styles'

const Searcher = (props) => {
    const dispatch = useDispatch()
    const handleInput = (event) => {
        console.log(props.filter);
        dispatch(searchAndFilterCountries(event.target.value, props.filter))
    }
    return (
        <SearchInputContainer>
            <SearchIcon/>
            <SearchInput onChange={handleInput} type="text" placeholder="Search for a country..."/>
        </SearchInputContainer>
    )
}

const mapStateToProps = (state =>{
    return {
        filter: state.countriesReducer.filter
    }
})
export default connect(mapStateToProps)(Searcher)
