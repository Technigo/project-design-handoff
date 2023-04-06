import styled from 'styled-components';

export const StyledTrialBtn = styled.button`
  width: 390px; 
  height: 84px; 
  background: #DBFE62;
  border-radius: 47px;
  align-self: center; 
  font-family: 'Poppins'; 
  font-size: 24px; 
  font-weight: 600; 
  border: none;
  margin-bottom:60px; 

  :hover {
    box-shadow: 0px 4px 8px rgba(14, 14, 16, 0.5);
  }

  :focus {    
    background: #EAFFA4;
    box-shadow: 0px 4px 8px rgba(29, 29, 31, 0.5);
  }

  :active {
    background: #C6FF00;
    box-shadow: 0px 8px 10px #0E0E10;
  }


  @media (min-width:667px) and (max-width:1024px){
    width: 334px; 
  }

  @media (max-width: 667px) {
    width: 325px; 
    height: 68px; 
  }
  
  `

// export const TrialBtn = () => {
//   return (
//     // <button aria-label="read more" className="button" type="button">Start trial</button>
//     <StyledTrialBtn>Start Trial</StyledTrialBtn>
//   )
// }

