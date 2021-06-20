import React from 'react';
import {Card} from 'react-native-material-ui';
import {View, Text} from 'react-native';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import logo from '../assets/images/aspireLogo.png';
export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, styles.textColor]}>Debit Card</Text>
        <Text style={[styles.balText, styles.textColor]}>
          Available Balance
        </Text>
        <View style={styles.currencyContainer}>
          <View style={[styles.dollarContainer, styles.textColor]}>
            <Text style={[styles.dollarText, styles.textColor]}>S$</Text>
          </View>
          <Text style={[styles.textColor, styles.balAmt]}>3000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C365A',
    flex: 1,
    padding: 25,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textColor: {
    color: 'white',
  },
  headerContainer: {
    display: 'flex',
    // flexDirection: 'row'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  logo: {
    height: 30,
    width: 30,
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  balText: {
    fontSize: 14,
    marginTop: '8%',
  },
  dollarContainer: {
    backgroundColor: '#01D167',
    borderRadius: 4,
    height: 22,
    width: 40,
    alignSelf: 'center',
    marginRight: 10,
  },
  dollarText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  balAmt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
