import styled from 'styled-components'

export const Button = styled.button`
background-color: ${(props) => (props.textBtn ? '#BDE0FE' : '#E1D2E9')};
    border: solid ${(props) => (props.textBtn ? '#BDE0FE' : '#E1D2E9')};
    border-radius: 16px;
    padding: 8px 16px;
    box-shadow: ${(props) => (props.textBtn ? '0px 2px 4px rgba(0, 0, 0, 0.25)' : 'none')};
    font-family: 'Poppins', sans - serif;
    font-weight: 400;
    font-size: 16px;
    Line-height: 24px;
    letter-spacing: 1px;
    color: #131313;
    width: fit-content;

    &:hover {
      border: ${(props) => (props.textBtn ? 'solid 2px #97B3CB' : 'solid 2px #CDB4DB')};
      background-color: ${(props) => (props.textBtn ? 'none' : '#CDB4DB')};
    }
    `
