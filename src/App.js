import React from 'react'
import { Heropage } from 'components/Heropage/Heropage'
import { BookClassPage } from 'components/BookClassPage/BookClassPage'
import { BecomeMemberPage } from 'components/BecomeMemberPage/BecomeMemberPage'
import { Footer } from 'components/Footer/Footer'

export const App = () => {
  return (
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      <div>
        <Heropage />
        <BookClassPage />
        <BecomeMemberPage />
        <Footer />
      </div>
    </div>
  )
}
