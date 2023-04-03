import React from 'react'

import { Footer } from 'Components/Footer/Footer'
import { Header } from 'Components/Header/Header'
import { Form } from 'Components/Form/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}
