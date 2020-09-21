import React from "react";
import Search from "./search/search";
import Info from "./info/info";
import ActionButtons from "./action-buttons/action-button";
import styled from "@emotion/styled";

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px; 
`
const StyledHeader = styled.header`
    margin-bottom: 20px;
`

const Header = () => {
    return(
        <StyledHeader>
            <DivFlex>
                <Search/>
                <Info/>
            </DivFlex>

            <ActionButtons/>
        </StyledHeader>
    )
}
export default Header