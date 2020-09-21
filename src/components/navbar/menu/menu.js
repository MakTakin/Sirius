import React, {useState} from "react";
import styled from '@emotion/styled'
import lessons from '../../../images/lessons.png'
import pupil from '../../../images/pupil.png'
import trainer from '../../../images/trainer.png'
import finance from '../../../images/finance.png'
import subcription from '../../../images/subcription.png'
import crm from '../../../images/crm.png'
import email from '../../../images/email.png'
import raport from '../../../images/raport.png'
import settings from '../../../images/settings.png'
import StyledLink from "../../UI/links/links";

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Menu = () => {
    const [menuLink, setMenuLink] = useState(
        [
            {
                logo: lessons,
                label: "Занятия",
                active: false
            },
            {
                logo: pupil,
                label: "Учащиеся",
                active: false
            },
            {
                logo: trainer,
                label: "Тренеры",
                active: true
            },
            {
                logo: finance,
                label: "Финансы",
                active: false
            },
            {
                logo: subcription,
                label: "Абонементы",
                active: false
            },
            {
                logo: crm,
                label: "Доступ в CRM",
                active: false
            },
            {
                logo: email,
                label: "Рассылки",
                active: false
            },
            {
                logo: raport,
                label: "Отчеты",
                active: false
            },
            {
                logo: settings,
                label: "Настройки",
                active: false
            }
        ]
    )

    const ChangeActive = (id) => {
        const buttons = [...menuLink]
        buttons.forEach((button, index) => {
            if (index == id) {
                button.active = true
            } else {
                button.active = false
            }
        })
        setMenuLink(buttons)
    }

    const renderLinks = menuLink.map((item, index) => {
        return (
            <StyledLink
                key={index}
                href='#'
                active={item.active}
                onClick={()=>ChangeActive(index)}
            >
                <img src={item.logo} alt=""/>
                {item.label}
            </StyledLink>
        )
    })

    return (
        <DivFlex>
            {renderLinks}
        </DivFlex>
    )
}
export default Menu