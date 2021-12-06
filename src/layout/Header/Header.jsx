import React from 'react'
import { HeaderContainer, HeaderElement, HeaderTitle, ThemeSwitcherContainer, ThemeSwitcherTitle,FaMoon,FaSun } from './Header.styles'
const Header = ({theme}) => {


    return (
       
       <HeaderElement>
           <HeaderContainer>
                <HeaderTitle>
                    Where in the world?
                </HeaderTitle>

                <ThemeSwitcherContainer onClick={theme.changeTheme}>
                    {theme.currentTheme === "light"? <FaMoon/>:<FaSun/>}
                    <ThemeSwitcherTitle>
                            
                        {theme.currentTheme === "light"? "Dark":"Light"} Mode

                    </ThemeSwitcherTitle>
                </ThemeSwitcherContainer>
           </HeaderContainer>
       </HeaderElement>
    )
}

export default Header
