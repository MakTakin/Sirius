import React, {useState} from "react";
import {ActionButton, ActiveButton, TimeButton} from "../../UI/buttons/buttons";
import styled from "@emotion/styled";
import plus from '../../../images/plus.png'
import filtr from '../../../images/filtr.png'
import union from '../../../images/union.png'
import lessons from '../../../images/lessons.png'
import trainer from '../../../images/trainer.png'

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between; 
`
const DivFlexButtons = styled.div`
    display: flex;
`
const DivFlexButton = styled.div`
    display: flex;
    align-items:center;
    background: #FFF;
    border-radius:33px
`
const ActionButtons = () => {
    const [timeButtons, setTimeButtons] = useState([
        {
            context: 'Неделя',
            active: true
        },
        {
            context: 'День',
            active: false
        },

    ])

    const [activeButtons, setActiveButtons] = useState([
        {
            img: `${union}`,
            active: false
        }, {
            img: `${lessons}`,
            active: false
        }, {
            img: `${trainer}`,
            active: true
        },
    ])

    const ChangeActiveTimeButtons = (id) => {
        const buttons = [...timeButtons]
        buttons.forEach((button, index) => {
            if (index == id) {
                button.active = true
            } else {
                button.active = false
            }
        })
        setTimeButtons(buttons)
    }

    const ChangeActiveButtons = (id) => {
        const buttons = [...activeButtons]
        buttons.forEach((button, index) => {
            if (index == id) {
                button.active = true
            } else {
                button.active = false
            }
        })
        setActiveButtons(buttons)
    }
    return (
        <DivFlex>
            <div>
                {
                    timeButtons.map((button, index) => {
                        return (
                            <TimeButton
                                active={button.active}
                                key={index}
                                onClick={() => ChangeActiveTimeButtons(index)}
                            >
                                {button.context}
                            </TimeButton>
                        )
                    })
                }
            </div>
            <DivFlexButtons>
                <ActionButton
                    green
                >
                    <img src={plus} alt=""/>
                    <span>Добавить</span>
                </ActionButton>
                <ActionButton>
                    <img src={filtr} alt=""/>
                    <span>Фильтр</span>
                </ActionButton>
                <DivFlexButton>
                    {activeButtons.map((button, index) => {
                        return (
                            <ActiveButton
                                key={index}
                                active={button.active}
                                onClick={() => ChangeActiveButtons(index)}
                            >
                                <img src={button.img} alt=""/>
                            </ActiveButton>

                        )
                    })}
                </DivFlexButton>
            </DivFlexButtons>
        </DivFlex>
    )
}
export default ActionButtons