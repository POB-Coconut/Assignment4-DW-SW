import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsStart } from 'reducers/books'
import SearchForm from 'components/SearchForm'
import Books from 'components/Books'
import Pagination from 'components/Books/Pagination'
import Stack from 'components/Stack'
import LinkToFilter from 'components/SearchForm/LinkToFilter'
import Loading from 'components/Loading'
import { INIT_INDEX } from 'utils/constants'

function Result() {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.books)
  const { search } = useLocation()

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(getItemsStart({ search, INIT_INDEX }))
  }, [dispatch, search])

  return (
    <div className={styles.wrapper}>
      <Stack gaps={[0, 10, 20, 20]}>
        <SearchForm />
        <LinkToFilter />
        <Books items={items} />
        <Pagination />
        {status === 'loading' && <Loading />}
      </Stack>
    </div>
  )
}

const styles = {
  wrapper: 'pb-4'
}

export default Result
