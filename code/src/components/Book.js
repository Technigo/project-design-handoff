import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const BookSection = styled.section`
  background-color: var(--primary-color-1);
  padding: 133px 16px;

  @media (min-width: 668px) {
   background-color: var(--neutral-light);
   padding: 0 90px;
   padding-bottom: 197px;
  }
`;

const BookH2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
`;

const BookSelect = styled.select`
  background-color: var(--primary-color-1);
  color: var(--neutral-dark);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
  padding: 13px 40px 13px 40px;
  border: solid black 1px;
  text-align: center;
  border-radius: 0%; // To prevent default setting in Safari

  &:focus {
    outline: none;
  }
  
  @media (min-width: 668px) {
   background-color: var(--neutral-light);
  }
`;

const BookCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
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

  @media (min-width: 1024px) {
    max-width: 384px;
    height: 468px;
  }
`;

const BookCardImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
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

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const Book = () => {
  const [selectedCity, setSelectedCity] = useState('malmo');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const getCardsForSelectedCity = () => {
    switch (selectedCity) {
      case 'malmo':
        return (
          <BookCardsContainer>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="2 people running in the sunset" />
              <BookCardH3>MAGISTRATPARKEN</BookCardH3>
              <BookCardH4>07.00 MODERATE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="People running in a group" />
              <BookCardH3>PILDAMSPARKEN</BookCardH3>
              <BookCardH4>12.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Man running up stairs outside" />
              <BookCardH3>MAGISTRATPARKEN</BookCardH3>
              <BookCardH4>17.30 INTENSE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
          </BookCardsContainer>
        );
      case 'stockholm':
        return (
          <BookCardsContainer>
            <BookCard>
              <BookCardImg src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="People running in a group" />
              <BookCardH3>HAGAPARKEN</BookCardH3>
              <BookCardH4>07.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="2 people running in the sunset" />
              <BookCardH3>HAGAPARKEN</BookCardH3>
              <BookCardH4>11.00 MODERATE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Man running up stairs outside" />
              <BookCardH3>VASAPARKEN</BookCardH3>
              <BookCardH4>18.00 INTENSE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
          </BookCardsContainer>
        );
      case 'goteborg':
        return (
          <BookCardsContainer>
            <BookCard>
              <BookCardImg src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="People running in a group" />
              <BookCardH3>SLOTTSSKOGEN</BookCardH3>
              <BookCardH4>08.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Man running up stairs outside" />
              <BookCardH3>SLOTTSSKOGEN</BookCardH3>
              <BookCardH4>12.00 INTENSE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="2 people running in the sunset" />
              <BookCardH3>SLOTTSSKOGEN</BookCardH3>
              <BookCardH4>16.30 MODERATE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
          </BookCardsContainer>
        );
      default:
        return null;
    }
  };

  return (
    <BookSection className="book">
      <BookH2>BOOK A WORKOUT TODAY</BookH2>
      <BookSelect name="book-city" value={selectedCity} onChange={handleCityChange}>
        <option value="malmo">MALMÖ</option>
        <option value="stockholm">STOCKHOLM</option>
        <option value="goteborg">GÖTEBORG</option>
      </BookSelect>
      {getCardsForSelectedCity()}
    </BookSection>
  );
};