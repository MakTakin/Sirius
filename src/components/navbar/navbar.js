import React from "react";
import Logo from "./logo/logo";
import Menu from "./menu/menu";
import styled from '@emotion/styled'

const Nav = styled.nav`
    background: #FFFFFF;
`
const NavBar = () => {
    return(
        <Nav>
            <Logo/>
            <Menu/>
        </Nav>
    )
}
export default NavBar