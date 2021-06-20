/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
} from 'react-native';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import DebitCard from '../components/debitCardScreenBackground';
import Hidden from '../assets/images/hiddenLogo';
import AspireCard from '../assets/images/aspireWhite.png';
import VisaLogo from '../assets/images/visaWhite.png';
import DebitCardFuncComponents from '../components/debitCardFunctionComponents';
import {Actions} from 'react-native-router-flux';
import {configureStore} from '../store/store';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
const debitCardProps = [
  {
    title: 'Top-up account',
    desc: 'Deposit money to your account to use with card',
    image: 'TopUp',
    switch: false,
  },
  {
    title: 'Weekly Spending Limit',
    desc: 'Your weekly spending limit is $5,000',
    image: 'WeeklySpending',
    switch: true,
  },
  {
    title: 'Freeze card',
    desc: 'Your debit card is currently active',
    image: 'FreezeCard',
    switch: true,
  },
  {
    title: 'Get a new card',
    desc: 'This deactivates your current debit card',
    image: 'GetANewCard',
    switch: false,
  },
  {
    title: 'Deactivated cards',
    desc: 'Your previously deactivated cards',
    image: 'DeactivatedCard',
    switch: false,
  },
];

const DebitCardScreen = props => {
  const [switchValue, setSwitchValue] = useState(false);
  const onSwitchChange = value => {
    setSwitchValue(value);
    if (value === true) {
      Actions.push('setLimit');
    }
  };
  const {cardReducer} = useSelector(state => state, shallowEqual);
  useEffect(() => {
    if (cardReducer.cardLimitData) {
      Alert.alert(`Updated limit values is ${cardReducer.cardLimitData}`);
    }
  }, [cardReducer]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ParallaxScroll
        isHeaderFixed={false}
        parallaxHeight={300}
        renderParallaxBackground={({animatedValue}) => <DebitCard />}
        parallaxBackgroundScrollSpeed={5}
        style={{backgroundColor: '#0C365A'}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 10,
            margin: 5,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: -103,
              right: 10,
              flexDirection: 'row',
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              padding: 10,
              paddingBottom: 15,
              zIndex: -1,
            }}>
            <Hidden width={20} height={20} />
            <Text style={{color: '#01D167'}}>Hide card number</Text>
          </View>
          <View
            style={{
              height: 230,
              backgroundColor: '#01D167',
              borderRadius: 12,
              zIndex: 20,
              marginTop: '-20%',
              padding: 24,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <Image source={AspireCard} style={{height: 21, width: 72}} />
            </View>

            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
              Mark Henry
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 24,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingRight: 24,
                  letterSpacing: 3.5,
                }}>
                5647
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingRight: 24,
                  letterSpacing: 3.5,
                }}>
                3411
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingRight: 24,
                  letterSpacing: 3.5,
                }}>
                2413
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                  letterSpacing: 3.5,
                }}>
                2020
              </Text>
            </View>
            <View style={{paddingTop: 15, flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  letterSpacing: 1.6,
                  color: 'white',
                  paddingRight: 32,
                }}>
                Thru: 12/20
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  letterSpacing: 1.6,
                  color: 'white',
                }}>
                CVV: 456
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 10,
              }}>
              <Image
                source={VisaLogo}
                style={{
                  height: 20,
                  width: 60,
                  resizeMode: 'contain',
                  marginTop: 20,
                }}
              />
            </View>
          </View>
          <View style={{flex: 1, height: '100%', marginBottom: 80}}>
            {debitCardProps.map(props => {
              return (
                <DebitCardFuncComponents
                  img={props.image}
                  title={props.title}
                  desc={props.desc}
                  switch={props.switch}
                  onSwitchValueChange={value => onSwitchChange(value)}
                  isEnabled={switchValue}
                />
              );
            })}
          </View>
        </View>
      </ParallaxScroll>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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

export default DebitCardScreen;
