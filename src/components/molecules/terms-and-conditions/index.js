import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../style';
import Modal from 'react-native-modal';

export default TermsAndConditions = ({isModalVisible, toggleModal}) => {
  const agree = () => {
    toggleModal({agree: true});
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        onBackButtonPress={toggleModal}
        isVisible={isModalVisible}
        style={styles.content}>
        <View style={{flex: 1}}>
          <Text style={styles.textExplanation}>
            Gostariamos de informar que ao usar as funcionalidades do Calculador
            de IR Ações você concorda em fornecer informações que não serão
            armazenadas e nem compartilhadas com terceiros.
            {'\n\n\n'}
            Ressaltamos que as informação são não sensíveis e servem somente de
            carater informativo, devendo para todos os fins serem validadas
            junto a profissionais competentes ou junto aos orgãos regulatórios.{' '}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => agree()}>
            <Text style={styles.buttonText}>Concordo, vamos lá</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
