/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch,
} from 'react-native';
import TopUp from '../assets/images/topup.svg';
import WeeklySpending from '../assets/images/weeklySpending.svg';
import FreezeCard from '../assets/images/freezeCard.svg';
import GetANewCard from '../assets/images/getANewcard.svg';
import DeactivatedCard from '../assets/images/deactivatedCards.svg';
const DebitCardFuncComponents = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={{padding: 8}}>{renderImage(props.img)}</View>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{props.title}</Text>
        <Text style={{fontSize: 13, color: '#222222', opacity: 0.6}}>
          {props.desc}
        </Text>
      </View>
      {props.switch ? (
        <Switch
          disabled={props.img === 'FreezeCard'}
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={'#ffffff'}
          onValueChange={props.onSwitchValueChange}
          value={props.img === 'FreezeCard' ? false : props.isEnabled}
        />
      ) : null}
    </View>
  );
};

const renderImage = name => {
  //   console.log('name', name);
  switch (name) {
    case 'TopUp':
      return <TopUp height={32} width={32} />;
    case 'WeeklySpending':
      return <WeeklySpending height={32} width={32} />;
    case 'FreezeCard':
      return <FreezeCard height={32} width={32} />;
    case 'GetANewCard':
      return <GetANewCard height={32} width={32} />;
    case 'DeactivatedCard':
      return <DeactivatedCard height={32} width={32} />;
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 0,
    // justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DebitCardFuncComponents;
