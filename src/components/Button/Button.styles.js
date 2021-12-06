import styled from "styled-components";
import { styles } from "../../constants";
import {FaArrowLeft as FA_ARROW_LEFT} from "react-icons/fa"

const ButtonContainer = styled.div`
    width:90%;
    margin:3rem auto;
`

const ButtonElement = styled.button`
    padding:.4rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border:none;
    background-color:${props=>props.theme.cardBackground};
    box-shadow: 0px 0px 15px -9px #333;
    border-radius:5px;
    cursor:pointer;

`
const FaArrowLeft = styled(FA_ARROW_LEFT)`
    font-size:${styles.fontSizeHomePage};
    color:${props=>props.theme.text};
    margin-left:.3rem;
`
const TextButton = styled.p`
    font-size:${styles.fontSizeHomePage};
    color:${props=>props.theme.text};
    margin-left:.3rem;
`
export {
    ButtonContainer,
    ButtonElement,
    FaArrowLeft,
    TextButton
}