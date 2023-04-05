import React from 'react';
import styled from 'styled-components';
import memberStripes from '../assets/member-stripes.svg';

const MemberFormContainer = styled.div`
  height: 656px;
  width: 100%;
  background-color:#B9F615;
`;

const MemberImage = styled.img`
  position: relative;
  width: 100%;
  height: 400.82px;
  left: 0.5%;
`;

export const MemberForm = () => {
  return (
    <MemberFormContainer>
      <MemberImage src={`${memberStripes}`} alt="diagonal blue stripes" />
    </MemberFormContainer>
  );
};
