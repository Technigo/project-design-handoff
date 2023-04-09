/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BecomeHeader, BecomeMemberPageWrapper, SingleLogoBlack, Stripes, TopWrapper, StripesDiv, BottomFlexboxDiv, BottomGymnast } from './BecomeMemberPageCSS';
import StripesIMG from '../../assets/Formstripes.svg'
import LogoBlackIMG from '../../assets/SingleLogoABlack.svg'
import BottomIMG from '../../assets/BottomGymnast.svg'
import { MemberForm } from './MemberForm';

export const BecomeMemberPage = () => {
  return (
    <BottomFlexboxDiv>
      <BecomeMemberPageWrapper>
        <TopWrapper>
          <SingleLogoBlack src={`${LogoBlackIMG}`} alt="Acrogym single A-logo" />
          <BecomeHeader>Become a member</BecomeHeader>
          <StripesDiv>
            <Stripes src={`${StripesIMG}`} alt="Four stripes decorating top right corner" />
          </StripesDiv>
        </TopWrapper>
        <MemberForm />
      </BecomeMemberPageWrapper>
      <BottomGymnast src={`${BottomIMG}`} />
    </BottomFlexboxDiv>
  )
}