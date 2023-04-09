import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  background-color: #BDE0FE;
  color: #131313;
  border: none;
  padding: 8px 18px;
  border-radius: 16px;
  /* font-size: 1rem; */
  z-index: 4;
  
    @media (min-width: 641px) {
    font-size: 0.8rem;
    padding: 8px 16px;
    z-index: 4;
    }

    @media (min-width: 1025px) {
        padding: 10px 24px;
        font-size: 24px;
        line-height: 36px;
    } 
`;

const CTAButton = styled(Button)`
  background-color: #ff5722;
  
  
    @media (min-width: 641px) {
    font-size: 0.8rem;
    padding: 8px 16px;
    }

    @media (min-width: 1025px) {
    }
`;

export { Button, CTAButton };
