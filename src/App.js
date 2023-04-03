import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { Nav } from 'components/Nav'
import { Button } from 'components/Button/Button'
import { ButtonCss } from 'components/Button/ButtonCss'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <ButtonCss />
        <Button>Sign</Button>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
