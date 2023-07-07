import styled from 'styled-components';

export const CTAButton = styled.button`
font-family: Outfit;
text-align: center;
justify-content: center;
font-size: 20px;
font-weight: 600;
background-color: #FF9F0A;
color: black;
padding: 14px 65px;
border: none;
border-radius: 20px;
margin-bottom: 8px;
cursor: pointer;
transition: 0.2s ease-in-out;

:hover {
    transition: transform 0.2s ease-in-out;
    opacity: 80%;
    transform: scale(1.02);
}

@media (min-width: 1024px) {
    padding: 14px 165px;
}
`

export const CTAButtonSUF = styled.button`
font-family: Outfit;
text-align: center;
justify-content: center;
font-size: 24px;
font-weight: 600;
background-color: #FF9F0A;
color: black;
padding: 11px 65px;
border: none;
border-radius: 20px;
margin-bottom: 8px;
cursor: pointer;
margin-top: 45px;
`