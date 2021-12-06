import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme,GlobalStyle } from '../constants'
import Header from '../layout/Header/Header'
import Country from '../pages/Country'
import Home from '../pages/Home'

const CountriesRouter = () => {
    const [currentTheme, setCurrentTheme] = useState("light")

	const changeTheme = ()=>setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    return (
        <ThemeProvider theme={theme[currentTheme]}>
            <GlobalStyle/>
            <BrowserRouter>
                <Header theme={{currentTheme,changeTheme}} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:country" element={<Country/>}/>
                </Routes>   
            </BrowserRouter>
        </ThemeProvider>
    )
}
export default CountriesRouter