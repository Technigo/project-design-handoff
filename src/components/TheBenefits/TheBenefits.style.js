import styled from 'styled-components';

export const BenefitsContainer = styled.div`
width: 100%;
background-color: #95A6B5;
display: flex;
flex-direction: column;
align-items: center;
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h1, h2 {
    color: var(--main-color-h1)
}
`;

export const BenefitsListContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const UlTest = styled.ul`
list-style: none;
margin: 0;
color: red;s
`

export const BenefitsLeftContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

export const BenefitsRightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;