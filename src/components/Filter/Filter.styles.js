import styled from "styled-components";
import {FaAngleDown as FA_ANGLE_DOWN} from "react-icons/fa"


const SelectContainer = styled.section` 
    position: relative;
` 
const SelectInput = styled.div`
    height:3rem;
    outline:none;
    border:none;
    background:${props=>props.theme.cardBackground};
    border-radius:5px;
    box-shadow: 0px 0px 15px -9px #333;
    padding:1rem 1rem;
    display:flex;
    align-items:center;
    width:170px;
    justify-content:space-between;
    cursor:pointer;

`
const SelectContent = styled.div`
    margin-right:.5rem;
    color:${props=>props.theme.text};
`
const FaAngleDown = styled(FA_ANGLE_DOWN)`
    color:${props=>props.theme.text};
`
const OptionsContainer = styled.div`
    border-radius:5px;
    position:absolute;
    width:100%;
    top:55px;
    z-index:10;
    display:none;
    
`
const Option = styled.div`
    background:${props=>props.theme.cardBackground};
    padding:1rem;
    --webkit-appearance:none;
    color:${props=>props.theme.text};
    cursor:pointer;
    transition:background .3s ease;
    &:hover{
        background:${props=>props.theme.bodyBackground};
    }

    &:first-child{
        border-radius:5px 5px 0 0;
    }
    &:last-child{
        border-radius:0 0 5px 5px;
    }

`
export {
    SelectContainer,
    SelectInput,
    SelectContent,
    OptionsContainer,
    Option,
    FaAngleDown
}