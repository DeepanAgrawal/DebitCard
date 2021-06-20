import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: [], // Add names of reducer you are going to persist
};

export function configureStore() {
  const middleware = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(persistedReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return {persistor, store};
}
