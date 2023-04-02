import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from './components/navbar';
import { Main } from './components/maininfo';
import { Register } from './components/register';
import { Classes } from './components/classes';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <BrowserRouter className="Main-container">
      <Routes>
        <Header />
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/classes" element={<Classes />} />
        <Footer />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
<BrowserRouter className="Main-container">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:movieInfo" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

      </Routes>
    </BrowserRouter> */