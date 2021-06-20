import {combineReducers} from 'redux';
import cardLimit from './cardReducer';

const appReducer = combineReducers({
  cardReducer: cardLimit,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
