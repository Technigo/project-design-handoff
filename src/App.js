import React from 'react'
import { Heropage } from 'components/Heropage/Heropage'
import { BookClassPage } from 'components/BookClassPage/BookClassPage'

export const App = () => {
  return (
    <div>
      <div>
        <Heropage />
        <BookClassPage />
      </div>
    </div>
  )
}
