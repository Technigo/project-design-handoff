import styled from 'styled-components';

export const CardContainer = styled.div`
position:relative;
display:flex;
width:92%;
justify-content:center;
`;

export const CardImageContainer = styled.div`
background: ${(props) => (props.reversed ? '#096B78' : '#004852')};
display:flex;
flex-direction:column;
justify-content:center;
align-self:${(props) => (props.reversed ? 'flex-end' : 'flex-start')};
align-items:${(props) => (props.reversed ? 'flex-end' : 'flex-start')};
height: 256px;
width: 258px;
border-radius:${(props) => (props.reversed ? '13px 2px 2px 13px' : '2px 13px 13px 2px')};
padding: 0px 24px 0px 24px;
`

export const CardImage = styled.img`
height: 230px;
width: 152.26852416992188px;
left: 0px;
top: -6px;
border-radius:${(props) => (props.reversed ? '8px 0px 0px 8px' : '0px 8px 8px 0px')};
box-shadow: 0px 4px 4px 0px #00000040;
background: linear-gradient(270.15deg, #EDFDFF 0.31%, rgba(237, 253, 255, 0.858911) 23.89%, rgba(237, 253, 255, 0) 58.6%), url(e2.png);
border-left:${(props) => (props.reversed ? '' : '8px solid #FFE600')};
border-right:${(props) => (props.reversed ? '8px solid #FFE600' : '')};
`

export const CardTextContainer = styled.div`
position:absolute;
align-self:${(props) => (props.reversed ? 'flex-start' : 'flex-end')};
width: 200px;
height: 218px;
right:${(props) => (props.reversed ? 'auto' : '0')};
left:${(props) => (props.reversed ? '0' : 'auto')};
top: 18px;
box-sizing:border-box;
background: #EDFDFF;
border-radius:${(props) => (props.reversed ? '2px 13px 13px 2px' : '13px 2px 2px 13px')};
box-shadow: 0px 4px 4px 0px #00000040;
display:flex;
flex-direction:column;
align-items:${(props) => (props.reversed ? 'flex-start' : 'flex-end')};
text-align:${(props) => (props.reversed ? 'left' : 'right')};
`
