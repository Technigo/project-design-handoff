import styled from 'styled-components';

export const Headline1 = styled.h1`
        font-weight: 700;
        font-size: 64px;
        line-height: 83.84px;
        color: #FFFFFF;
        letter-spacing: 1px;
        margin:0;


    @media (max-width: 768px) {
        font-size: 48px;
        line-height: 62.88px;
  }
`
export const Headline2 = styled.h2`
        font-weight: 700;
        font-size: ${(props) => (props.workoutsh2 ? '96px' : '32px')};
        line-height: ${(props) => (props.workoutsh2 ? '125.76px' : '41.92px')};
        color: #222322;
        margin:0;
        text-align: ${(props) => (props.workoutsh2 ? 'left' : 'center')};

    @media (max-width: 768px) {
       font-size: ${(props) => (props.workoutsh2 ? '56px' : '24px')};
       line-height: ${(props) => (props.workoutsh2 ? '73.36px' : '28.32px')};
  }
`

export const Headline3 = styled.h3`
        font-weight: 700;
        font-size: ${(props) => (props.workoutsh3 ? '36px' : '32px')};
        line-height: ${(props) => (props.workoutsh3 ? '33.3px' : '32px')};
        color: ${(props) => (props.workoutsh3 ? '#222322' : '#FFFFFF')};
        margin:0;
        text-align: left;
`

export const Tagline = styled.h4`
        font-weight: 700;
        font-size: 18px;
        line-height: 21.24px;
        color: ${(props) => (props.hero ? '#FFFFFF' : '#222322')};
        margin:0;


    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 14.16px;
  }
`
export const Headline5 = styled.h5`
        font-weight: 700;
        font-size: 18px;
        line-height: 21.24px;
        color: #FFFFFF;
        margin:0;


    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 14.16px;
  }
`

export const BodyText = styled.p`
        font-weight: 500;
        font-size: 18px;
        line-height: 21.24px;
        color: ${(props) => (props.white ? '#FFFFFF' : '#222322')};
        margin:0;


    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16.52px;
  }
`

export const LineBreak = styled.span`
    display: block;
`