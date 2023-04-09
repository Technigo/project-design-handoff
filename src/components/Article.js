import React from 'react';
import styled from 'styled-components';
import Readme1 from '../images/readme1.png';
import Readme2 from '../images/readme2.png';

export const article = [
  { header: 'Guide for beginners', paragraf: 'Join our growing community and let us support your well-being. If you are a beginner and do not dare to try yoga because you think you are too stiff and immobile for some of the positions, then you have come to the right place!' },
  { header: 'Yoga retreat ', paragraf: 'This is not just a yoga retreat, meditation course or wellness trip – it is a complete experience for body and soul. Our concept is designed to, togetherwith yoga and meditation and other exciting spiritual tools, allow you to explore movement, emotions, stillness and above all – yourself.' }
]
const ArticleContainer1 = styled.div`
  width: 100vw;
  height: auto;
  margin-top:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;

  @media (min-width: 992px) {
    display: flex; 
    flex-direction: row-reverse; 
    margin-top: 10%;
  }
`;
const ArticleContainer2 = styled.div`
  margin-top:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;

  @media (min-width: 992px) {
    display: flex; 
    flex-direction: row;
  }
`;
const ContentBox = styled.div`
  padding: 0 31px;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
  @media (min-width: 600px){
    font-size: 42px;
    line-height: 51px;
  }
`;
const Paragraf = styled.p`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.127905px;
  color: #025323;
  padding: 0 50px;
  @media (min-width: 600px){
    font-size: 22px;
    line-height: 27px;
  }
`;
const Button = styled.button`
  padding: 15px 47px;
  background: #025323;
  border-radius: 15px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom:61px;
  
`;
const ImgBox = styled.div`
  width: 378.84px;
  height: 258.8px;
  border: 0.58px solid #025323;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px){
    width: 600px;
    height: 408px;
  }
  @media (min-width: 992px){
    width: 600px;
    height: 408px; 

  }
`
const Image = styled.img`
  width: 351.82px;
  height: 234.34px;
  border: 6px solid #025323;
  border-radius: 12.5651px;
  @media (min-width: 600px){
    width: 554px;
    height: 373px;
  }
  @media (min-width: 992px){
    width: 560px;
    height: 374px;

  }

`;
const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 992px){
    width: 588px;
    height: 393px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`

const ArticleSection = styled.div`
 
 
`

export const Article = () => {
  return (
    <ArticleSection>
      <ArticleContainer1>
        <ArticleWrapper>
          <ContentBox>
            <Header>{article[0].header}</Header>
            <Paragraf>{article[0].paragraf}</Paragraf>
          </ContentBox>
          <Button type="button">Read more</Button>
        </ArticleWrapper>
        <ImgBox>
          <Image src={Readme1} alt="readme" />
        </ImgBox>
      </ArticleContainer1>

      <ArticleContainer2>
        <ArticleWrapper>
          <ContentBox>
            <Header>{article[0].header}</Header>
            <Paragraf>{article[0].paragraf}</Paragraf>
          </ContentBox>
          <Button type="button">Read more</Button>
        </ArticleWrapper>
        <ImgBox>
          <Image src={Readme2} alt="readme" />
        </ImgBox>
      </ArticleContainer2>
    </ArticleSection>
  )
}