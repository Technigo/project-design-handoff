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