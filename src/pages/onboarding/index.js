import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, View, Alert} from 'react-native';
import styles from './style';
import Logo from '../../components/molecules/logo';
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
      <SafeAreaView style={styles.container}>
        <View style={styles.logoStyle}>
          <Logo />
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
              if (isAgree) {
                navigation.navigate('Home');
              } else {
                Alert.alert(
                  'Importante!!!',
                  'Você precisa ler e concordar com nossos termos de uso antes!!',
                  [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  {cancelable: false},
                );
              }
            }}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>

          {!isAgree ? (
            <TermsAndConditions
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;
