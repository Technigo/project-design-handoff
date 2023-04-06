import styled from 'styled-components'

export const HeadLine = styled.h1`
font-size: 24px;
font-weight: 500;
line-height: 36px;
letter-spacing: 1px;

@media (min-width:641px) and (max-width: 1024px){
  font-size: 40px;
  line-height: 60px;
}

@media (min-width:1025px){
font-size: 64px;
line-height: 96px;
}
`
export const SubHeadLine = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 1px;

@media (min-width:641px) and (max-width: 1024px){
font-size: 24px;
line-height: 36px;
}

@media (min-width:1025px){
font-size: 32px;
line-height: 48px;
}
`
export const Title = styled.h3`
font-size: 24px;
font-weight: 400;
line-height: 36px;
letter-spacing: 1px;

@media (min-width:641px) and (max-width: 1024px){
font-size: 32px;
line-height: 48px;
}

@media (min-width:1025px){
font-size: 40px;
line-height: 60px;
}
`
// Body texts
export const P20 = styled.p`
font-size: 20px;
font-weight: 400;
line-height: 30px;
letter-spacing: 1px;
`

export const P16 = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 1px;
`

export const P14 = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 1px;
`
export const FormP = styled.p`
font-size: 12px;
font-weight: 500;
line-height: 18px;
letter-spacing: 1px;

@media (min-width:641px) and (max-width:1024px) {
font-size: 16px;
font-weight: 500;
line-height: 24px;
}
`

// Caption (questions)
export const Caption1 = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 1px;
`

export const Caption2 = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 1px;
`