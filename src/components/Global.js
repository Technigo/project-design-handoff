import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  color: #FF8F3D;
  border: solid #FF8F3D;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 1.25rem;
  cursor: pointer;
`;

export const TopRightButton = styled(Button)`
   top: 1.25rem; 
   right: 0.25rem;
   margin-left: 2rem;
`;

export const BottomCenterButton = styled(Button)`
  background-color: transparent;
`;

export const Logo = styled.img`
  width: 15vh;
  margin-right: auto;
`;

export const TopLeftLogo = styled(Logo)`
   margin-right: 20rem;
   position: relative;

   @media screen and (max-width: 768px) {
   margin-left: 5rem;
   width: 15vh;
  }
`;

export const TopLogo = styled(Logo)`
   top: 0.8rem; 
   margin: auto;
   position: relative;
`;

export const BottomLeftLogo = styled(Logo)`
  margin: 0;
`;

// export const SocialIcons = styled.img`
//   position:relative;
//   margin-top: -190px;
//   margin-left: 160px;
//   display: flex;
//   width: 30px;
//   height: 30px;
//   gap: 8px;
// `;

// export const facebookIcon = styled(SocialIcons)`
//   width: 30px;
//   height: 30px;
// `;