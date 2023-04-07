import React from 'react'
import { Heropage } from 'components/Heropage/Heropage'
import { BookClassPage } from 'components/BookClassPage/BookClassPage'
import { BecomeMemberPage } from 'components/BecomeMemberPage/BecomeMemberPage'

export const App = () => {
  return (
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      <div>
        <Heropage />
        <BookClassPage />
        <BecomeMemberPage />
      </div>
    </div>
  )
}
