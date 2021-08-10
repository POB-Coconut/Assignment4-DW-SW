import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import IconFilter from './IconFilter'
import { ROUTES } from 'utils/constants'

function LinkToFilter() {
  const { search } = useLocation()

  return (
    <Link
      to={{
        pathname: ROUTES.FILTER,
        search
      }}
      className={styles.wrapper}
    >
      <IconFilter />
    </Link>
  )
}

const styles = {
  wrapper: 'text-blue-500 hover:text-blue-700'
}

export default LinkToFilter
