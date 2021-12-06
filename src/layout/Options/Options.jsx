import React from 'react'
import Filter from '../../components/Filter/Filter'
import Searcher from '../../components/Searcher/Searcher'
import { OptionsContainer } from './Options.styles'

const Options = () => {
    return (
        <OptionsContainer>
            <Searcher/>
            <Filter/>
        </OptionsContainer>
    )
}

export default Options
