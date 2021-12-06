import styled from "styled-components";
import {FaSearch } from "react-icons/fa"
import { styles } from "../../constants";
const SearchInputContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    max-width:350px;
    padding:0 0  0 1.5rem;
    background-color:${props=>props.theme.cardBackground};
    box-shadow: 0px 0px 15px -9px #333;
    height:3rem;
    border-radius:5px;

    @media (max-width:900px){
        margin-bottom:1.5rem;
    }


`
const SearchIcon = styled(FaSearch)`
    color: ${props=>props.theme.textInput};
`

const SearchInput = styled.input`
    height:100%;
    outline: none;
    border:none;
    background:transparent;
    padding-left:1rem;
    width:100%;
    color: ${props=>props.theme.text};
    font-size:${styles.fontSize};
    &::placeholder{
        color: ${props=>props.theme.textInput};
    }
`

export {
    SearchInputContainer,
    SearchIcon,
    SearchInput
}