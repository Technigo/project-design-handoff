import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { Nav } from 'components/Nav'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
