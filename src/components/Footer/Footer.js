import React from 'react';
import { FooterWrapper, StripesWrapper, StripesBottom, FooterChildWrapper, LogoAg, Contact, ContactUs, MailUs, CallUs, SocialMediaWrapper, Instagram, Facebook, Twitter, CollabWrapper, BrandWrapper, BrandLogo, PoweradeLogo, LogoContactMediaWrapper } from './FooterCSS';
import StripesIMG from '../../assets/multicolorstripes.svg'
import LogoAgIMG from '../../assets/LogoAGblackwhite.svg'
import InstagramIMG from '../../assets/InsagramGreen.svg'
import FacebookIMG from '../../assets/facebookGreen.svg'
import TwitterIMG from '../../assets/twitterGreen.svg'
import ReebokIMG from '../../assets/Reebok.svg'
import PoweradeIMG from '../../assets/poweradewhite.svg'
import UnderarmorIMG from '../../assets/underarmor.svg'
import AdidasIMG from '../../assets/adidas.svg'

export const Footer = () => {
  return (
    <FooterWrapper>
      <StripesWrapper>
        <StripesBottom src={`${StripesIMG}`} />
      </StripesWrapper>
      <FooterChildWrapper>
        <LogoContactMediaWrapper>
          <LogoAg src={`${LogoAgIMG}`} />
          <Contact>
            <ContactUs>Contact us:</ContactUs>
            <MailUs href="mailto:acrogym@sportsorg.se">acrogym@sportsorg.se</MailUs>
            <CallUs href="tel:+46786524532">078 652 45 32</CallUs>
          </Contact>
          <SocialMediaWrapper>
            <Instagram src={`${InstagramIMG}`} />
            <Facebook src={`${FacebookIMG}`} />
            <Twitter src={`${TwitterIMG}`} />
          </SocialMediaWrapper>
        </LogoContactMediaWrapper>
        <CollabWrapper>
          <BrandWrapper><BrandLogo src={`${ReebokIMG}`} /></BrandWrapper>
          <BrandWrapper><PoweradeLogo src={`${PoweradeIMG}`} /></BrandWrapper>
          <BrandWrapper><BrandLogo src={`${UnderarmorIMG}`} /></BrandWrapper>
          <BrandWrapper><BrandLogo src={`${AdidasIMG}`} /></BrandWrapper>
        </CollabWrapper>
      </FooterChildWrapper>
    </FooterWrapper>
  )
}