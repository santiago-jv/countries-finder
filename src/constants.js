import { createGlobalStyle } from "styled-components"

const theme = {
    dark:{
        bodyBackground:'hsl(207, 26%, 17%)',
        cardBackground:'hsl(209, 23%, 22%)',
        textInput:'hsl(0, 0%, 100%)',
        text:'hsl(0, 0%, 100%)',

    },
    light:{
        bodyBackground:'hsl(0, 0%, 98%)',
        cardBackground:' hsl(0, 0%, 100%)',
        textInput:'hsl(0, 0%, 52%)',
        text:'hsl(200, 15%, 8%)',
    }
}
const initialState ={
    countries:[],
    filter:"Filter by Region",
    search:"",
    filteredCountries:null
}
const styles = {
    fontSizeHomePage: '14px'
}
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.bodyBackground)};
    font-family: 'Nunito Sans', sans-serif;
  }
`

export {
    theme,
    GlobalStyle,
    styles,
    initialState
}