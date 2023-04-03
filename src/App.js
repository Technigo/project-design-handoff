import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from './components/navbar';
import { Main } from './components/maininfo';
import { Register } from './components/register';
import { Classes } from './components/classes';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="Main-container">
        <h1>Hejsan</h1>
        <Route component={Header} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register/:register" element={<Register />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
}
