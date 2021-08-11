import { combineReducers } from 'redux'

import search from './search'
import books from './books'

const rootReducer = combineReducers({
  search,
  books
})

export default rootReducer
