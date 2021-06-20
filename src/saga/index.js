import {all, fork} from 'redux-saga/effects';
import CardSaga from './cardSaga';
export default function* root() {
  yield all([fork(CardSaga)]);
}
