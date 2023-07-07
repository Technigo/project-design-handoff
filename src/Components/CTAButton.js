import styled from 'styled-components';

export const CTAButton = styled.button`
font-family: Outfit;
text-align: center;
justify-content: center;
font-size: 20px;
font-weight: 600;
background: linear-gradient(132deg, rgba(224,135,184,1) 35%, rgba(164,135,232,1) 100%);
color: white;
padding: 14px 65px;
border: none;
border-radius: 50px;
margin-bottom: 8px;
cursor: pointer;
box-shadow: 0px 13px 13px -4px rgba(10, 6, 36, 0.7);
transition: 0.2s ease-in-out;

:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.03);
}

@media (min-width: 1024px) {
    padding: 20px 80px;
}
`

export const CTAButtonSUF = styled.button`
font-family: Outfit;
text-align: center;
justify-content: center;
font-size: 24px;
font-weight: 600;
background-color: #382D6D;
color: white;
padding: 11px 65px;
border: none;
border-radius: 20px;
margin-bottom: 8px;
cursor: pointer;
margin-top: 45px;
`