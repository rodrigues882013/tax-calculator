import React, { useState } from 'react';
import { 
  Text, 
  SafeAreaView, 
  StatusBar, 
  TouchableOpacity, 
  View
} from 'react-native'
import styles from './style'
import Banner from '../../components/molecules/banner'

const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#41efcd" />
        <View>
            <Banner />
        </View>
        
        <View>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: "#6a51ae", fontSize: 20}}>Começar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default OnBoarding;