import React from 'react';
import './App.css';
import NavBar from "../navbar/navbar";
import Header from "../header/header";
import Main from "../main/main";
import styled from "@emotion/styled";

const Div = styled.div`
    padding:30px 30px 0 30px;
`
function App() {
  return (
    <div className="container grid">
      <NavBar/>
      <Div>
         <Header/>
         <Main/>
      </Div>
    </div>
  );
}
export default App;
