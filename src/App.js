import React from 'react'
import Routes from 'route/Routes'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Routes />
    </div>
  )
}

const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto'
}

export default App
