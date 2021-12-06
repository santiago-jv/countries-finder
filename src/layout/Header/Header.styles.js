import styled from "styled-components";
import { styles } from "../../constants";

import {FaMoon as FAMOON} from "react-icons/fa"
import {FaSun as FASUN} from "react-icons/fa"

const HeaderElement = styled.header`
    width:100%;
    background-color:${(props)=>props.theme.cardBackground};
    height:4.5rem;
    box-shadow: 0px 0px 15px -9px #333;
`

const HeaderTitle = styled.h1`
    font-size:19px;
    color:${props=>props.theme.text};
    font-size:20px;
    font-weight:800;
`
const HeaderContainer = styled.div`
    width:90%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
`

const ThemeSwitcherContainer = styled.div`
    display: flex;
    align-items: center;
    cursor:pointer;
`

const ThemeSwitcherTitle = styled.h3`
    font-size:${styles.fontSizeHomePage };
    color:${props=>props.theme.text};
    font-weight:600;
    margin-left:.5rem;
`
const FaMoon = styled(FAMOON)`
    color:${props=>props.theme.text};
    font-size:14px;
`
const FaSun = styled(FASUN)`
    color:${props=>props.theme.text};
    font-size:16px;

`
export {
    HeaderElement,
    HeaderContainer,
    HeaderTitle,
    ThemeSwitcherContainer,
    ThemeSwitcherTitle,
    FaMoon,
    FaSun
    
}