import React, { useState } from 'react';
import { Button } from 'components/Button';
import {
  BookSection,
  BookH2,
  BookSelect,
  BookCardsContainer,
  BookCard,
  BookCardImg,
  BookCardH3,
  BookCardH4
} from './Book.styled';

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
              <BookCardImg
                src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="2 people running in the sunset" />
              <BookCardH3>MAGISTRATPARKEN</BookCardH3>
              <BookCardH4>07.00 MODERATE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="People running in a group" />
              <BookCardH3>PILDAMSPARKEN</BookCardH3>
              <BookCardH4>12.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Man running up stairs outside" />
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
              <BookCardImg
                src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="People running in a group" />
              <BookCardH3>HAGAPARKEN</BookCardH3>
              <BookCardH4>07.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="2 people running in the sunset" />
              <BookCardH3>HAGAPARKEN</BookCardH3>
              <BookCardH4>11.00 MODERATE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Man running up stairs outside" />
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
              <BookCardImg
                src="https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="People running in a group" />
              <BookCardH3>SLOTTSSKOGEN</BookCardH3>
              <BookCardH4>08.00 CARDIO</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Man running up stairs outside" />
              <BookCardH3>SLOTTSSKOGEN</BookCardH3>
              <BookCardH4>12.00 INTENSE</BookCardH4>
              <Button cardCta>Book workout</Button>
            </BookCard>
            <BookCard>
              <BookCardImg
                src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt="2 people running in the sunset" />
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
