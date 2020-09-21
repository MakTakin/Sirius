import React, {useState} from "react";
import Table from "./table/table";
import Title from "./title/title";
import styled from "@emotion/styled";
const Div = styled.div`
       background: #FFF;
       padding:0 20px;
       border-radius: 4px;
`

const Main = () => {
    const [trainers, setTrainers] = useState([
        {
            name: 'Высоцкая Элеонора',
            color: '#DF1B7D',
        },
        {
            name: 'Гайсина Гузель',
            color: '#52AD5B'
        },
                {
            name: 'Гиголо Анна',
            color: '#FE8900'
        },        {
            name: 'Горбукова Юлия',
            color: '#00459B'
        },        {
            name: 'Марков Руслан',
            color: '#2E71F3'
        }
    ])
    return(
        <Div>
            <Title trainers={trainers}/>
            <Table/>
        </Div>
    )
}
export default Main