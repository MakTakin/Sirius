import React from "react";
import styled from '@emotion/styled'
import './search.css'
import search from '../../../images/search.png'

const StyledInput = styled.input`
    border: none;
    max-width:465px;
    flex:1;
    font-size: 12px;
    outline:none;
    cursor:pointer;
    border-radius: 67px;
    background:url(${search}) #FFFFFF left 15px center no-repeat;
    padding: 15px 0 15px 35px;
`


const Search = () => {
    return(
            <StyledInput placeholder="Поиск клиента"/>
    )
}

export default Search