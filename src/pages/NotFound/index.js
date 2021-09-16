import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>존재하지 않는 페이지</title>
      </Helmet>
      존재하지 않는 페이지입니다.
    </div>
  )
}

export default NotFound
