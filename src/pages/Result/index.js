import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsStart } from 'reducers/books'
import SearchForm from 'components/SearchForm'
import Books from 'components/Books'
import Pagination from 'components/Books/Pagination'
import Stack from 'components/Stack'
import LinkToFilter from 'components/Form/LinkToFilter'
import Loading from 'components/Loading'
import { INIT_INDEX, RESULT_GAP, ROUTES, STATUS } from 'utils/constants'

function Result() {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.books)
  const { search } = useLocation()
  const isLoading = status === STATUS.Loading
  const isFailure = status === STATUS.Failure

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(getItemsStart({ search, INIT_INDEX }))
  }, [dispatch, search])

  return (
    <main className={styles.wrapper}>
      <Stack gaps={RESULT_GAP}>
        <Link to={ROUTES.HOME}>main으로 가기</Link>
        <SearchForm />
        <LinkToFilter />
        {!isFailure ? (
          <>
            <Books items={items} />
            <Pagination />
            {isLoading && <Loading />}
          </>
        ) : (
          <div>데이터가 존재하지 않습니다.</div>
        )}
      </Stack>
    </main>
  )
}

const styles = {
  wrapper: 'pb-4'
}

export default Result
