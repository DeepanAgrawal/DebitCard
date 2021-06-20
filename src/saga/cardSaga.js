import {put, takeLatest, call} from 'redux-saga/effects';
import {setCardLimitSuccess} from '../action/cardAction';

function* getCardData(action) {
  yield put(setCardLimitSuccess(action.payload));
}
export default function* root() {
  yield takeLatest('CARD_LIMIT', getCardData);
}
