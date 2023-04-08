import styled from 'styled-components'

export const Headline1 = styled.h1`
  font-size: 3rem;
  color: #FF90D1;
  margin: 0;

  media (min-width: 667px) {
      font-size: 6rem;
    }

  @media (min-width: 1024px) {
      font-size: 8rem;
  }
`

export const Headline2 = styled.h2`
  font-size: 3rem;
  color: #FF90D1;
  margin: 0;

  media (min-width: 667px) {
      font-size: 6rem;
    }

  @media (min-width: 1024px) {
      font-size: 8rem;
  }
`
export const Subtitle = styled(Headline2)`
color: #000001;

@media (min-width: 1024px) {
  font-size: 4rem;
}
`

export const TitleSection = styled.h3`
font-style: normal;
font-weight: 800;
font-size: 2.5rem;
line-height: 99.52%;

media (min-width: 667px) {
  font-size: 3rem;
}
`
export const TitleFooter = styled(TitleSection)`
font-size: 2.25rem;
line-height: 36px;
`

export const Detailtext = styled.h5`
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 99.52%;
`
export const CardTitle = styled(Detailtext)`
font-weight: 800;
font-size: 2rem;`

export const ReviewText = styled(CardTitle)`
text-align: center;
color: #FF90D1;
height: 22.8%;
width: 91.8%;

@media (min-width: 667px) {
  width: 56%;
  height: 20.5%;
}
`
export const Pbold = styled.p`
font-style: normal;
font-weight: 800;
font-size: 1rem;
line-height: 99.52%;
`
export const Pregular = styled(Pbold)`
font-weight: 400;
line-height: 19px;
`
export const Pfooter = styled(Pbold)`
line-height: 19px;
`

export const HeaderButtonP = styled.p`
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 39px;
`

export const IntroButtonP = styled.p`
font-style: normal;
font-weight: 400;
font-size: 1.5rem;
line-height: 29px;
`
export const BookButtonP = styled(IntroButtonP)`
font-size: 1.25rem;
line-height: 24px;
`
export const FooterContactSubtitles = styled(BookButtonP)`
font-weight: 800;
line-height: 24px;
`
