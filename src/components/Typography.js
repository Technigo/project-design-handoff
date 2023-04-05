import styled from 'styled-components'

export const Headline1 = styled.h1`
  font-size: 3rem;
  color: #FF90D1;
  margin: 0;

  media (min-width: 570px) {
      font-size: 6rem;
    }

  @media (min-width: 769px) {
      font-size: 8rem;
  }
`

export const Headline2 = styled.h2`
  font-size: 3rem;
  color: #FF90D1;
  margin: 0;

  media (min-width: 570px) {
      font-size: 6rem;
    }

  @media (min-width: 769px) {
      font-size: 8rem;
  }
`

export const Detailtext = styled.h5`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 99.52%;
`
export const Subtitle = styled(Headline2)`
color: #000001
`
export const Pbold = styled.p`
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 99.52%;
`
export const Pregular = styled(Pbold)`
font-weight: 400;
line-height: 19px;
`