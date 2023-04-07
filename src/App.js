import React from 'react'
import { Heropage } from 'components/Heropage/Heropage'
import { BookClassPage } from 'components/BookClassPage/BookClassPage'
import { BecomeMemberPage } from 'components/BecomeMemberPage/BecomeMemberPage'

export const App = () => {
  return (
    <div>
      <div>
        <Heropage />
        <BookClassPage />
        <BecomeMemberPage />
      </div>
    </div>
  )
}
