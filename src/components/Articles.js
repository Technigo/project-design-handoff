import React from 'react';
import styled from 'styled-components';
import Readme1 from '../images/readme1.jpg';
import Readme2 from '../images/readme2.jpg';

export const article = [
  { header: 'Guide for beginners', paragraf: 'Join our growing community and let us support your well-being. If you are a beginner and do not dare to try yoga because you think you are too stiff and immobile for some of the positions, then you have come to the right place!' },
  { header: 'Yoga retreat ', paragraf: 'This is not just a yoga retreat, meditation course or wellness trip – it is a complete experience for body and soul. Our concept is designed to, togetherwith yoga and meditation and other exciting spiritual tools, allow you to explore movement, emotions, stillness and above all – yourself.' }
]

const Articlewrapper = styled.div`
max-width: 1400px;
margin-left: 2rem;
margin-right: 2rem;
`

const ArticleContainer1 = styled.div`
  width: 100%;
  height: auto;
  margin-top:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  @media (min-width: 900px) {
    display:flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
  
`;
const ArticleContainer2 = styled.div`
  margin-top:30px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  @media (min-width: 900px) {
    display:flex;
    flex-direction: row-reverse;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
const ContentBox = styled.div`
@media (min-width: 768px) {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}
@media (min-width: 1024px) {
  /* Styles for desktop view */
  width: 100%;
}
`;
const Header = styled.h1`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #025323;
  margin-bottom: 10px;
  margin-top: 20px;
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
  @media (min-width: 768px) {
    width: 30em;
  }
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 47px;
  background: #025323;
  border-radius: 15px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom:15px;
  margin-top: 10px;
  border: none;
  font-family: 'Libre Franklin';
  font-size: 22px;
  line-height: 29px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const ImgBox = styled.div`
  width: 603px;
  height: 411.94px;
  border: 0.58px solid #025323;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width:auto;
    height:250px;
  }
`
const Image = styled.img`
  width: 560px;
  height: 374px;
  border: 6px solid #025323;
  border-radius: 12.5651px;
  @media (max-width: 768px) {
    width:auto;
    height:230px;
  }
`;

export const Articles = () => {
  return (
    <Articlewrapper>
      <ArticleContainer1>
        <ContentBox>
          <Header>{article[0].header}</Header>
          <Paragraf>{article[0].paragraf}</Paragraf>
          <Button type="button">Read more</Button>
        </ContentBox>
        <ImgBox>
          <Image src={Readme1} alt="readme" />
        </ImgBox>
      </ArticleContainer1>

      <ArticleContainer2>
        <ContentBox>
          <Header>{article[1].header}</Header>
          <Paragraf>{article[1].paragraf}</Paragraf>
          <Button type="button">Read more</Button>
        </ContentBox>
        <ImgBox>
          <Image src={Readme2} alt="readme" />
        </ImgBox>
      </ArticleContainer2>
    </Articlewrapper>
  )
}