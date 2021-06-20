/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppRoutes from './src/AppRoutes.js';
import {configureStore} from './src/store/store';
import {PersistGate} from 'redux-persist/es/integration/react';
const App = () => {
  const {persistor, store} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <AppRoutes />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
