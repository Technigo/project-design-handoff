import React from 'react';
import { TopDescription } from './TopDescription'
import { ButWhatBanner } from './ButWhatBanner'
import { RingAcroArt } from './RingAcroArt'
import { OurClassesBtn } from './OurClassesBtn'
import { ClassCarousel } from './ClassCarousel'
import { BCPageWrapper, AcroPromoText, BookClassBtn, PromoSubText } from './BookClassPageCSS';

export const BookClassPage = () => {
  return (
    <BCPageWrapper>
      <TopDescription />
      <ButWhatBanner />
      <RingAcroArt />
      <AcroPromoText>
      Acrobaticsis is the performance of human feats of balance,
      agility, and motor coordination. Acrobatic skills are used
      in performing arts, sporting events, and martial arts.
      Extensive use of acrobatic skills are most often performed
      in acro dance, circus, gymnastics, and freerunning and to
      a lesser extent in other athletic activities including ballet,
      slacklining and diving.
      </AcroPromoText>
      <PromoSubText>
        Although acrobatics is most commonly
      associated with human body performance, the term is used to
      describe other types of performance, such as aerobatics.
      </PromoSubText>
      <OurClassesBtn />
      <ClassCarousel />
      <BookClassBtn />
    </BCPageWrapper>

  )
}