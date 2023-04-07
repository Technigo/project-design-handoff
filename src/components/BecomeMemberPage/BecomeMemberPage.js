import React from 'react';
import { BecomeHeader, BecomeMemberPageWrapper, SingleLogoBlack, Stripes, MemberForm } from './BecomeMemberPageCSS';
import StripesIMG from '../../assets/Formstripes.svg'
import LogoBlackIMG from '../../assets/SingleLogoABlack.svg'

export const BecomeMemberPage = () => {
  return (
    <BecomeMemberPageWrapper>
      <SingleLogoBlack src={`${LogoBlackIMG}`} alt="Acrogym single A-logo" />
      <BecomeHeader>Become a member</BecomeHeader>
      <Stripes src={`${StripesIMG}`} alt="Four stripes decorating top right corner" />
      <MemberForm />
    </BecomeMemberPageWrapper>
  )
}