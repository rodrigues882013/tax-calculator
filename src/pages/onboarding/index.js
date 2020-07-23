import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Banner from '../../components/molecules/banner';
import TermsAndConditions from '../../components/molecules/terms-and-conditions';

const OnBoarding = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const toggleModal = ({agree}) => {
    if (agree) {
      setIsAgree(true);
    }

    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TermsAndConditions
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.logoStyle}>
          <Banner />
        </View>

        <View style={styles.explanationStyle}>
          <Text style={styles.textExplanation}>
            Calculador de IR para ações, de maneira simples e descomplicada
            acesse agora uma estimativa de quanto você irá pagar de imposto com
            suas operações financeiras.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (isAgree) navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleModal({agree: false})}>
            <Text style={{textAlign: 'center', marginBottom: '5%'}}>
              Termos de uso, saiba mais
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;
