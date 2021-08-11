import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItemsStart } from 'reducers/books'
import { useLocation } from 'react-router-dom'
import { STATUS } from 'utils/constants'

function Pagination() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { status, startIndex } = useSelector((state) => state.books)
  const isLoading = status === STATUS.Loading

  return (
    <button
      className={styles.button}
      disabled={startIndex === 0 || isLoading}
      onClick={() => {
        if (isLoading) {
          return
        }
        dispatch(getItemsStart({ search, startIndex }))
      }}
    >
      {isLoading ? '로딩중...' : '더보기'}
    </button>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination
