import React from 'react';
import styled from 'styled-components';
// import Readme1 from '../images/readme1.png';
import Readme2 from '../images/readme2.png';

const article = [
  { header1: 'Inside auto layout', paragraf2: 'helllllllvvvvvlllllll' },
  { header2: 'Inside auto layout', paragraf2: 'helllllllllllllllllll' }
]
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`;
const ContentBox = styled.div`
`;
const Header = styled.h1`
`;
const Paragraf = styled.p`
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
`;
const Image = styled.img`´
`;
export const Article = () => {
  return (
    <ArticleContainer>

      <ContentBox>
        <Header>{article.header2}</Header>
        <Paragraf>{article.paragraf2}</Paragraf>
      </ContentBox>
      <Button type="button">Read more</Button>
      <Image src={Readme2} alt="readme" />

    </ArticleContainer>
  )
}