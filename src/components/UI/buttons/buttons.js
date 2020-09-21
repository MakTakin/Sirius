import styled from '@emotion/styled'

export const Button = styled.button`
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

export const ExitButton = styled(Button)`
    width:100%;
    background:#FFF;
`
export const ArrowButton = styled(Button)`
    background:#FFF;
    margin:0;
    padding:0;
`
export const HeaderButton = styled(Button)`
    background: #E5E5E5;
    margin:0;
    padding:0;
`

export const TimeButton = styled(Button)`
    color: rgba(0, 0, 0, 0.5);
    background: #E5E5E5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin:0;
    margin-right:10px;
    padding:13px;
    border-radius: 4px;
    ${
    props => {
        if (props.active) {
            return `
                background: #FFF;
                color: #000;
             `
        }
    }
}
    
`
export const ActionButton = styled(Button)`
    display:flex;
    align-items: center;
    border-radius: 30px;
    margin:0;
    padding:12px 25px 12px 22px;
    margin-right:10px;
    color: ${props =>
    props.green ? '#FFF' : '#000'
    };
    background: ${props =>
    props.green ? '#52AD5B' : '#FFF'
    };
    
  & > img {
    margin-right:8px;
  }

`
export const ActiveButton = styled(Button)`
    border-radius: 33px;
    background: #FFF;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    margin:0;
    padding:0;
     ${
    props => {
        if (props.active) {
            return `
                background: #2E71F3;
                color: #000;
             `
        }
    }
    };
`
