import React from 'react';
import RingAcrobatimg from '../../assets/RingAcrobat.svg'
import Acrostripe1img from '../../assets/Acrostripe1.svg'
import Acrostripe2img from '../../assets/Acrostripe2.svg'
import Acrostripe3img from '../../assets/Acrostripe3.svg'
import Acrostripe4img from '../../assets/Acrostripe4.svg'
import { AcroArtWrapper, RingAcrobat, Acrostripe1, Acrostripe2, Acrostripe3, Acrostripe4 } from './BookClassPageCSS';

export const RingAcroArt = () => {
  return (
    <AcroArtWrapper>
      <RingAcrobat src={`${RingAcrobatimg}`} />
      <Acrostripe1 src={`${Acrostripe1img}`} />
      <Acrostripe2 src={`${Acrostripe2img}`} />
      <Acrostripe3 src={`${Acrostripe3img}`} />
      <Acrostripe4 src={`${Acrostripe4img}`} />
    </AcroArtWrapper>
  )
}