import React, {useState} from "react";
import times from '../../../images/time.png'
import account from '../../../images/account.png'
import styled from '@emotion/styled'

const GridTable = styled.div`
    display:grid; 
    border-collapse: collapse;
    min-width: 100%;
    grid-template-columns: 
        minmax(40px,50px)
        minmax(100px, 154px)
        minmax(100px, 154px)
        minmax(100px, 154px)
        minmax(100px, 154px)
        minmax(100px, 154px)
        minmax(100px, 154px)
        minmax(100px, 154px);
`

const DivFlex = styled.div`
    position:absolute;
    z-index:2;
    width: 95%;
    margin:0 2px;
    ${
        props => {
            return `
            border-left: 4px solid ${props.color};
            height: ${props.height}%;
            top:${props.top}px;
            left:${props.left}%;
            `
        }
    }
`
const Div = styled.div`
    opacity:0.1;
    height:100%;
    width: 100%; 
    ${
        props => {
            return `
            background: ${props.color};
            width:${props.width}%;
            `
        }
    }
`
const DivPupil = styled.div`
    position:absolute;
    font-size 11px;
    padding: 8px 5px;
    display: flex;
    flex-direction: column;
    height: 54px;
    background: #FFF;
    border-radius: 0px 3px 3px 0px;
    word-wrap: break-word;
    line-height: 120%;
    ${
        props => {
            return `
            width: ${props.width}%;
            top: ${props.top}px;
            border-top: 2px solid ${props.color};
            border-right: 2px solid ${props.color};
            border-bottom: 2px solid ${props.color};
            `
        }
    }
     & > img {
        height:11px;
        width:11px;
    }
`
const DivEvent = styled.div`
    display:flex;
    position:absolute;
    left: 0;
    right: 0;
    top: 63px;
    bottom: 0;
`
const DivCol = styled.div`
    height:23px;
    border-left:1px solid rgba(0, 0, 0, 0.1);
    border-bottom:1px solid rgba(0, 0, 0, 0.1);
`
const DivHeader = styled.button`
    cursor:pointer;
    width:100%;
    margin:0;
    border:none;
    outline:none;
    background: #FFF;
    padding:15px 0;
    line-height:120%;
    text-align:center;   
    border-top:1px solid rgba(0, 0, 0, 0.1);
    border-bottom:1px solid rgba(0, 0, 0, 0.1);
    
    ${
        props => {
            return `
                border-left: 1px solid rgba${props.color};
                `
        }
    }
    ${
        props => {
            if (props.background == props.value) {
                return `
                background:#F4F6F9;
                `
            }
        }
    }
`
const DivTime = styled.div`
        padding:15px 0 18px 9px;
        border-top:1px solid rgba(0, 0, 0, 0.1);
`

const DivLine = styled.div`
    left: -36px;
    z-index: 1;
    position: absolute;
    height: 2px;
    width: 1112px;
    background: #ED0F48;
    top: 304px;
`
const Cicle = styled.div`
    left: -42px;
    z-index: 1;
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius:50%;
    background: #ED0F48;
    top: 300px;
`
const TimeCol = styled.div`
    border-bottom:1px solid #FFF;
    height:23px;
`
const DivContainer = styled.div`
    position:relative;
    ${
        props => {
            if (props.background == props.index) {
                return `
            background:#F4F6F9;
            `
            }
        }
    }
`
const Table = () => {
    const [data, setData] = useState([
        {
            data: '27.07',
            day: 'Понедельник'
        },
        {
            data: '28.07',
            day: 'Вторник'
        },
        {
            data: '29.07',
            day: 'Среда'
        },
        {
            data: '30.07',
            day: 'Четверг'
        },
        {
            data: '31.07',
            day: 'Пятница'
        },
        {
            data: '01.08',
            day: 'Суббота'
        },
        {
            data: '02.08',
            day: 'Воскресенье'
        }
    ])

    const [time, Settime] = useState([
        "08:00", '', "08:30", '', "09:00", '', "09:30", '', "10:00", '', "10:30", '',
        "11:00", '', "11:30", '', "12:00", '', "12:30", '', "13:00", '', "13:30", '', "14:00"
    ])

    const [bgColor, SetBgColor] = useState(3)

    const timeCol = time.map((item, index) => {
        return (
            <TimeCol key={index}>
                {item}
            </TimeCol>
        )
    })

    const divCol = time.map((item, index) => <DivCol key={index}/>)

    const selectColumn = (e) => {
        const id = e.target.value
        SetBgColor(id)
    }

    return (
        <GridTable>
            <div>
                <DivTime><img src={times} alt=""/></DivTime>
                {timeCol}
            </div>
            <DivContainer
                background={bgColor}
                index={0}
            >
                <DivHeader
                    color={`(0,0,0,0.1)`}
                    background={bgColor}
                    value={0}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[0].data},<br/>
                    {data[0].day}
                </DivHeader>
                {divCol}
                <DivEvent>
                    <DivFlex
                        color={`#DF1B7D`}
                        height={90}
                        top={0}
                    >
                        <Div color={`#DF1B7D`}/>
                        <DivPupil
                            width={91}
                            top={0}
                            color={`#DF1B7D;`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={91}
                            top={144}
                            color={`#DF1B7D;`}
                        >
                            <img src={account} alt=""/>
                            Ксюша Диденко 7 лет
                        </DivPupil>
                        <DivPupil
                            width={91}
                            top={288}
                            color={`#DF1B7D;`}
                        >
                            <img src={account} alt=""/>
                            Эрик 6 лет
                        </DivPupil>
                    </DivFlex>
                    <Cicle/>
                    <DivLine/>
                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={1}
            >
                <DivHeader
                    background={bgColor}
                    value={1}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[1].data},<br/>
                    {data[1].day}
                </DivHeader>
                {divCol}
                <DivEvent>
                    <DivFlex
                        color={`#52AD5B`}
                        height={24.3}
                        top={71}
                    >
                        <Div color={`#52AD5B`}
                             width={40}
                        />
                        <DivPupil
                            width={43}
                            top={0}
                            color={`#52AD5B`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={43}
                            top={72}
                            color={`#52AD5B;`}
                        >
                            <img src={account} alt=""/>
                            Ксения Аскерова, 9 лет
                        </DivPupil>
                    </DivFlex>
                    <DivFlex
                        color={`#FE8900`}
                        height={24.2}
                        top={71}
                        left={53}
                    >
                        <Div color={`#FE8900`}
                             width={44}
                        />
                    </DivFlex>
                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={2}
            >
                <DivHeader
                    background={bgColor}
                    value={2}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[2].data},<br/>
                    {data[2].day}
                </DivHeader>
                {divCol}
                <DivEvent>
                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={3}
            >
                <DivHeader
                    background={bgColor}
                    value={3}
                    onClick={(e) => selectColumn(e)}
                >

                    {data[3].data},<br/>
                    {data[3].day}
                </DivHeader>
                {divCol}
                <DivEvent>
                    <DivFlex
                        color={`#FE8900`}
                        height={60}
                        top={0}
                        left={0}
                    >
                        <Div color={`#FE8900`}
                             width={30}
                        />
                        <DivPupil
                            width={22}
                            top={0}
                            color={`#FE8900;`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={22}
                            top={72}
                            color={`#FE8900;`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={22}
                            top={286}
                            color={`#FE8900;`}
                        >
                            <img src={account} alt=""/>
                            Эрик 6 лет
                        </DivPupil>
                    </DivFlex>
                    <DivFlex
                        color={`#00459B`}
                        height={32}
                        top={0}
                        left={33}
                    >
                        <Div color={`#00459B`}
                             width={30}
                        />
                        <DivPupil
                            width={22}
                            top={118}
                            color={`#00459B`}
                        >
                            <img src={account} alt=""/>
                            Соколов Александр
                        </DivPupil>
                    </DivFlex>
                    <DivFlex
                        color={`#DF1B7D`}
                        height={60}
                        top={0}
                        left={66}
                    >
                        <Div color={`#DF1B7D`}
                             width={30}
                        />
                        <DivPupil
                            width={22}
                            top={0}
                            color={`#DF1B7D;`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={22}
                            top={286}
                            color={`#DF1B7D;`}
                        >
                            <img src={account} alt=""/>
                            Эрик 6 лет
                        </DivPupil>
                    </DivFlex>
                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={4}
            >
                <DivHeader
                    background={bgColor}
                    value={4}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[4].data},<br/>
                    {data[4].day}
                </DivHeader>
                {divCol}
                <DivEvent>
                    <DivFlex
                        color={`#52AD5B`}
                        height={24.2}
                        top={71}
                    >
                        <Div color={`#52AD5B`}
                             width={46}
                        />
                    </DivFlex>
                    <DivFlex
                        color={`#2E71F3`}
                        height={36}
                        top={71}
                        left={50}
                    >
                        <Div color={`#2E71F3`}
                             width={47}
                        />
                        <DivPupil
                            width={39}
                            top={24}
                            color={`#2E71F3`}
                        >
                            <img src={account} alt=""/>
                            Тельнова Злата
                        </DivPupil>
                        <DivPupil
                            width={39}
                            top={119}
                            color={`#2E71F3`}
                        >
                            <img src={account} alt=""/>
                            Ксения Аскерова, 9 лет
                        </DivPupil>
                    </DivFlex>
                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={5}
            >
                <DivHeader
                    background={bgColor}
                    value={5}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[5].data},<br/>
                    {data[5].day}
                </DivHeader>
                {divCol}
                <DivEvent>

                </DivEvent>
            </DivContainer>
            <DivContainer
                background={bgColor}
                index={6}
            >
                <DivHeader
                    background={bgColor}
                    value={6}
                    onClick={(e) => selectColumn(e)}
                >
                    {data[6].data},<br/>
                    {data[6].day}
                </DivHeader>
                {divCol}
                <DivEvent>

                </DivEvent>
            </DivContainer>
        </GridTable>
    )
}
export default Table