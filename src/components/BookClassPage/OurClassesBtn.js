import React from 'react';
import styled from 'styled-components';
import OurClassesImg from '../../assets/ourclassesbtn.svg'

const OCBtn = styled.button`
margin: 0;
margin-top: 46px;
width: 165px;
height: 33px;
border-style: none;
background-color: transparent;
padding: 0;
margin-bottom: 59px;

@media (min-width: 800px) {
  scale: 1.4;
  margin-left: 32px;
}

@media (min-width: 1024px) {
  scale: 1;
  margin-left: 0px;
  width: 412px;
  margin-bottom: 150px;
}
`

const OCimg = styled.img`
width: 100%;
`

const ButtonWrapper = styled.div`
width: 100%;`

export const OurClassesBtn = () => {
  return (
    <ButtonWrapper>
      <OCBtn>
        <OCimg src={`${OurClassesImg}`} />
      </OCBtn>
    </ButtonWrapper>
  )
}