import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from 'utils/constants'
import IconFilter from './IconFilter'

function LinkToFilter() {
  const { search } = useLocation()

  return (
    <Link
      to={{
        pathname: ROUTES.FILTERS,
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
