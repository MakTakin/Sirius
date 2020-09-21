import React from "react";
import notice from '../../../images/notiсe.png'
import avatar from '../../../images/avatar.png'
import styled from "@emotion/styled";
import {HeaderButton} from "../../UI/buttons/buttons";

const DivFlex = styled.div`
    display: flex;
    align-items: center; 
`
const StyledSpan = styled.span`
        display:flex;
        align-items:center;
        margin:0 10px 0 15px;
        &:before{ 
            content: " ";
            background: rgba(0, 0, 0, 0.1);
            height:43px;
            width: 1px;
            float: left;
            margin-right:15px;
        }       
`
const Info = () => {
    return (
        <DivFlex>
            <HeaderButton>
                <img src={notice} alt=""/>
            </HeaderButton>
            <StyledSpan>Alexander Gerasimuk</StyledSpan>
            <HeaderButton>
            <img src={avatar} alt=""/>
            </HeaderButton>
        </DivFlex>
    )
}
export default Info