import { createSlice } from '@reduxjs/toolkit'
import { Status } from 'utils/constants'

const initialState = {
  items: [],
  totalItems: 0,
  startIndex: 0,
  status: Status.Idle,
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getItemsStart(state, action) {
      if (action.payload === 0) {
        state.items = []
      }

      state.error = null
      state.status = Status.Loading
    },
    getItemsSuccess(state, action) {
      const { items, totalItems, startIndex } = action.payload
      const nextItems = startIndex ? state.items.concat(items) : items

      state.items = nextItems
      state.startIndex = nextItems.length
      state.totalItems = totalItems
      state.status = Status.Success
    },
    getItemsFailure(state, action) {
      state.error = action.payload
    }
  }
})

export const { getItemsStart, getItemsSuccess, getItemsFailure } =
  booksSlice.actions

export default booksSlice.reducer
