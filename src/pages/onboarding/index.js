import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Banner from '../../components/molecules/banner';
import spaces from '../../components/sizes';

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#40edcc" />
      <View style={{marginTop: spaces.space5}}>
        <Banner />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
