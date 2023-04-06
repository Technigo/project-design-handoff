import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const BookSection = styled.section`
  background-color: var(--primary-color-1);
  padding: 133px 16px;
`;

const BookH2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
`;

const BookSelect = styled.select`
  background-color: var(--primary-color-1);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
  padding: 13px 61px 13px 46px;
  border: solid black 1px;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--neutral-light);
  width: 100%;
  padding: 0px 0px 10px;
  gap: 16px;
  height: 443px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
`;

const BookCardImg = styled.img`
  width: 100%;
  height: 50%;
`;

const BookCardH3 = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 19px;
`;

const BookCardH4 = styled.h4`
  font-size: 2rem;
  font-weight: 800;
  margin: 24px;
`;

export const Book = () => {
  return (
    <BookSection className="book">
      <BookH2>BOOK A WORKOUT TODAY</BookH2>
      <BookSelect type="select" name="book-city">
        <option value="malmo">MALMÖ</option>
      </BookSelect>
      <BookCard>
        <BookCardImg src={`${process.env.PUBLIC_URL}/assets/pexels-karolina-grabowska-4379000.png`} alt="couple working out outside" />
        <BookCardH3>MAGISTRATPARKEN</BookCardH3>
        <BookCardH4>17:30 INTENSE</BookCardH4>
        <Button cardCta>Book workout</Button>
      </BookCard>
      <BookCard>
        <BookCardImg src={`${process.env.PUBLIC_URL}/assets/clique-images-hSB2HmJYaTo-unsplash.png`} alt="person running up stairs outside" />
        <BookCardH3>MAGISTRATPARKEN</BookCardH3>
        <BookCardH4>17:30 INTENSE</BookCardH4>
        <Button cardCta>Book workout</Button>
      </BookCard>
      <BookCard>
        <BookCardImg src={`${process.env.PUBLIC_URL}/assets/pexels-kampus-production-8381747.png`} alt="people running outside" />
        <BookCardH3>MAGISTRATPARKEN</BookCardH3>
        <BookCardH4>17:30 INTENSE</BookCardH4>
        <Button cardCta>Book workout</Button>
      </BookCard>
    </BookSection>
  )
}