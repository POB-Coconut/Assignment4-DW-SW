import { useReducer } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { stringifyUrl, parse } from 'query-string'
import { flow, omitBy, isEmpty } from 'lodash/fp'

const initialState = {
  q: '',
  orderBy: 'relevance',
  filter: '',
  printType: 'all'
}

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

function useSearchForm() {
  const history = useHistory()
  const { search } = useLocation()
  const [searchInfo, dispatch] = useReducer(reducer, {
    ...initialState,
    ...parse(search)
  })

  function handleRouter(query) {
    const path = stringifyUrl({
      url: '/result',
      query
    })

    history.push(path)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const query = flow(omitBy(isEmpty))(searchInfo)

    handleRouter(query)
  }

  function handleChange(e) {
    const { name, value } = e.target

    dispatch({
      type: 'change',
      payload: {
        [name]: value
      }
    })
  }

  return {
    searchInfo,
    handleChange,
    handleSubmit
  }
}

export default useSearchForm
