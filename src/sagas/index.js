import { all } from 'redux-saga/effects'
import { commentsSaga } from './comment'

export function* rootSaga() {
  yield all([commentsSaga()])
}
