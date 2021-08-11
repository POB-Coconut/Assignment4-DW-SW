import { all } from 'redux-saga/effects'
import { booksSaga } from './books'

export function* rootSaga() {
  yield all([booksSaga()])
}
