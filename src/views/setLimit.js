import React, {useState} from 'react';
import {Card} from 'react-native-material-ui';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import logo from '../assets/images/aspireLogo.png';
import Weekly from '../assets/images/weekly.svg';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import {setCardLimit} from '../action/cardAction';
const SpendingLimit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, styles.textColor]}>Spending Limit</Text>
      </View>
    </View>
  );
};
const SetLimitScreen = () => {
  const [limitAmmount, setLimitAmount] = useState(0);
  const saveAmount = () => {
    if (limitAmmount > 0) {
      console.log('inside this condition', limitAmmount);
      dispatch(setCardLimit(limitAmmount));
      Actions.pop();
    } else {
      Alert.alert('Please enter valid ammount.');
    }
  };
  const dispatch = useDispatch();
  return (
    <ParallaxScroll
      isHeaderFixed={false}
      parallaxHeight={150}
      renderParallaxBackground={({animatedValue}) => SpendingLimit()}
      parallaxBackgroundScrollSpeed={5}
      style={{backgroundColor: '#0C365A'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 32,
          borderRadius: 24,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Weekly height={16} width={16} />
          <Text
            style={{paddingLeft: 12, fontSize: 14, justifyContent: 'center'}}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <View style={[styles.dollarContainer, styles.textColor]}>
            <Text style={[styles.dollarText, styles.textColor]}>S$</Text>
          </View>
          <Text style={styles.ammountText}>{`$ ${limitAmmount}`}</Text>
        </View>
        <View style={styles.seperator} />
        <View>
          <Text style={styles.disclaimerText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.amntBtn}
            onPress={() => setLimitAmount(5000)}>
            <Text style={styles.amntText}>S$ 5,000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.amntBtn}
            onPress={() => setLimitAmount(10000)}>
            <Text style={styles.amntText}>S$ 10,000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.amntBtn}
            onPress={() => setLimitAmount(20000)}>
            <Text style={styles.amntText}>S$ 20,000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={styles.saveBtn} onPress={saveAmount}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScroll>
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
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dollarText: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  ammountText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  seperator: {
    marginTop: 6,
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
  },
  disclaimerText: {
    fontSize: 13,
    color: '#22222266',
  },
  btnContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  amntBtn: {
    borderRadius: 4,
    width: 114,
    height: 40,
    backgroundColor: '#effcf4',
    justifyContent: 'center',
    textAlign: 'center',
  },
  amntText: {
    color: '#01D167',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  saveBtnContainer: {
    justifyContent: 'flex-end',
    flex: 0.7,
  },
  saveBtn: {
    backgroundColor: '#01D167',
    display: 'flex',
    width: 300,
    borderRadius: 30,
    height: 56,
    justifyContent: 'center',
    alignSelf: 'center',
    // flexDirection: 'column-reverse',
  },
  saveText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SetLimitScreen;
