import { getItemsFailure, getItemsStart, getItemsSuccess } from 'reducers/books'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as fetchApi from 'utils/api/data'

function* fetchBooksSaga(action, startIndex = 0) {
  try {
    const response = yield call(
      fetchApi.fetchBooksAPI,
      action.payload,
      startIndex
    )

    yield put({
      type: getItemsSuccess,
      payload: { ...response.data, startIndex }
    })
  } catch (e) {
    yield put({
      type: getItemsFailure,
      payload: e
    })
  }
}

export function* booksSaga() {
  yield takeLatest(getItemsStart, fetchBooksSaga)
}

// export const fetchBooksSaga =
//   (search, startIndex = 0) =>
//   async (dispatch) => {
//     try {
//       dispatch(getItemsStart(startIndex))

//       const response = await getBooks(search, startIndex)
//       const data = await response.json()
//       dispatch(getItemsSuccess({ ...data, startIndex }))
//     } catch (error) {
//       dispatch(getItemsFailure(error))
//     }
//   }
