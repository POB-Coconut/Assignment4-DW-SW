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

function Result() {
  const dispatch = useDispatch()
  const { items, startIndex, status } = useSelector((state) => state.books)
  const { search } = useLocation()

  useEffect(() => {
    if (!search || status === 'success') {
      return
    }

    dispatch(getItemsStart({ search, startIndex }))
  }, [dispatch, search, startIndex, status])

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
