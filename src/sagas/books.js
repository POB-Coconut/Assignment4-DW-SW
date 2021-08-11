import { getItemsFailure, getItemsStart, getItemsSuccess } from 'reducers/books'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as fetchApi from 'utils/api/data'

function* fetchBooksSaga(action) {
  const { search, startIndex } = action.payload

  try {
    const response = yield call(fetchApi.fetchBooksAPI, search, startIndex)

    yield put({
      type: getItemsSuccess.type,
      payload: { ...response.data, startIndex }
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: getItemsFailure.type,
      payload: e
    })
  }
}

export function* booksSaga() {
  yield takeLatest(getItemsStart, fetchBooksSaga)
}
