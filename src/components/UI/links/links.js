import styled from '@emotion/styled'

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  box-sizing:border-box;
  width: 100%;
  padding-left:30px;
  align-items: center;
  background-color: #FFFFFF;
  font-size: 13px;
  height:45px;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
  
  & > img {
    margin-right:10px;
  }
  ${
    props => {
        if (props.active) {
            return `
            padding-left:0;
            color: black;
            background: #EDF0F5;
            opacity: 0.6;
            &:before{ 
                content: " ";
                background: #2E71F3;
                height:45px;
                width: 3px;
                float: left;
                margin-right:27px;
                border-top-left-radius: 60px;
                border-bottom-right-radius: 60px;
                
             }
            `
        }
    }
}
`
export default StyledLink