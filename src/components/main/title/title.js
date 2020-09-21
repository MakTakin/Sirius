import React from "react";
import styled from "@emotion/styled";
import {ArrowButton} from "../../UI/buttons/buttons";
import leftArrow from '../../../images/leftArrow.png'
import rightArrow from '../../../images/rightArrow.png'

const DivFlex = styled.div`
    display: flex;
    align-items: center;
    & > div {
    font-size: 11px;
    text-decoration:underline;
    display:flex;
    justify-content: flex-end;
    flex:1;
    color: #979797;
    };
    & > div > span {
       margin: 0 10px;
    }
    
    & > h2 {
    font-size: 18px;
    font-weight: normal;
    }
`

const Round = styled.div`
    height:11px;
    width: 11px;
    border-radius: 50%;
    background: ${props=> props.color}
`
const DivNames = styled.div`
      display:flex;
      justify-content: center;
      margin-bottom:20px;
      align-items:center;
      & > span {
        margin-left: 5px;
        margin-right:15px;
      }
`

const Title = ({trainers}) => {

    const listTrainers = trainers.map((trainer,index)=> {
        return(
            <DivNames key={index}>
                <Round color={trainer.color}/>
                <span>{trainer.name}</span>
            </DivNames>
        )
    })

    return (
        <div>

        <DivFlex>
            <div></div>
            <h2>
                27 июля - 2 августа 2020г
            </h2>
            <div>
                <ArrowButton>
                    <img src={leftArrow}/>
                </ArrowButton>
                <span>CЕГОДНЯ</span>
                <ArrowButton>
                    <img src={rightArrow}/>
                </ArrowButton>
            </div>
        </DivFlex>
            <DivNames>
                {listTrainers}
            </DivNames>
        </div>
    )
}
export default Title