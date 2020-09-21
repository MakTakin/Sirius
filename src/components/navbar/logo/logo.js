import React from "react";
import logo from '../../../images/logo.png'
import exit from '../../../images/exit.png'
import {ExitButton} from "../../UI/buttons/buttons";
import styled from "@emotion/styled";

const DivFlex = styled.div`
    display: flex;
    padding: 30px 0 30px 45px;
    align-items: flex-start;
`
const Hr = styled.hr`
    background: rgba(0, 0, 0, 0.1);
    border:none;
    margin:0;
    height:1px;
    margin-bottom:25px;
`
const Logo = () => {
    return (
        <div>
        <DivFlex>
            <img src={logo} alt=""/>
            <ExitButton><img src={exit} alt=""/></ExitButton>
        </DivFlex>
            <Hr/>
        </div>
    )
}
export default Logo