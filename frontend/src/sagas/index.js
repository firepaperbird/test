import { all } from "redux-saga/effects";

import user from './userSagas'

export default function* rootSaga() {
  yield all([
    user(),
  ]);
}