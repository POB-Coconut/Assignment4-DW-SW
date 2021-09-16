import React from 'react'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>책책책 책을 찾읍시다!</title>
      </Helmet>
      <SearchForm />
    </div>
  )
}

const styles = {
  wrapper: 'flex items-center justify-center w-full h-screen'
}

export default Main
