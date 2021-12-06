import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { removeCountry } from '../../actions/countriesActions'
import {ButtonContainer,
    FaArrowLeft,
    ButtonElement,
    TextButton} from "./Button.styles"

const Button = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const goToHome = () => {
        dispatch(removeCountry() )
        navigate('/')
    }
    return (
        <ButtonContainer>
            <ButtonElement onClick={goToHome}>
                <FaArrowLeft/>
                <TextButton>Back</TextButton>
            </ButtonElement>
        </ButtonContainer>
    )
}

export default Button
