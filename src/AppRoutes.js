import React from 'react';
import DebitCardScreen from './views/debitCardScreen';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import SetLimitScreen from './views/setLimit';
const AppRoutes = () => {
  return (
    <Router>
      <Stack key={'root'}>
        <Scene
          back={true}
          key={'setLimit'}
          component={SetLimitScreen}
          hideNavBar
        />
        <Scene
          back={false}
          key={'root'}
          tabs
          // tabBarComponent={CustomTabBar}
          hideNavBar
          initial>
          <Scene
            key={'home'}
            component={DebitCardScreen}
            tabBarLabel={'Home'}
            hideNavBar
            disabled
          />
          <Scene
            key={'debitCard'}
            component={DebitCardScreen}
            tabBarLabel={'Debit Card'}
            initial
            hideNavBar
          />
          <Scene
            key={'payments'}
            component={DebitCardScreen}
            tabBarLabel={'Payments'}
            hideNavBar
            disabled
          />
          <Scene
            key={'credit'}
            component={DebitCardScreen}
            tabBarLabel={'Credit'}
            hideNavBar
            disabled
          />
          <Scene
            key={'profile'}
            component={DebitCardScreen}
            tabBarLabel={'Profile'}
            hideNavBar
            disabled
          />
        </Scene>
      </Stack>
    </Router>
  );
};
export default AppRoutes;
