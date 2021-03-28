import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {fetchData, buildReport} from './../../services';
import numeral from 'numeral';
import 'numeral/locales/pt-br';

import styles from './../onboarding/style';
import Banner from '../../components/organisms/admob/banner';

const ZeroTaxComponent = () => (
  <View>
    <Text>
      Pefeito, sua operação ficou abaixo do exigido para pagar IR, entretanto
      fique de olho ao declarar pois todas operação precisam ser lançadas com ou
      sem lucro.
    </Text>
  </View>
);

const TaxChargedComponent = ({valueCharged, stockCode}) => (
  <View>
    <Text>IR devido</Text>
    <Text>Ativo negociado: {stockCode}</Text>
    <Text>Estimativa de IR: {numeral(valueCharged).format('$ 0,0.00')}</Text>
  </View>
);

const ErrorComponentComponent = (err) => (
  <View>
    <Text>
      Perdão, estamos com problema porém trabalhando para aperfeiçoar sua
      experiência, voltaremos em breve
    </Text>
  </View>
);

const Result = ({route, navigation}) => {
  const [valueCharged, setValueCharged] = useState(0);
  const [error, setError] = useState(false);
  const {
    stockCode,
    dateBought,
    dateSold,
    quantity,
    isRealStateStock,
  } = route.params;

  const handleError = (error) => {
    console.log(error);
    setError(true);
  };

  useEffect(() => {
    // load a locale
    numeral.locale('pt-br');

    fetchData({stockCode, dateBought, dateSold})
      .then((data) => buildReport(data, quantity, isRealStateStock))
      .then(setValueCharged)
      .catch(handleError);
  });

  return (
    <View>
      <Banner />

      <SafeAreaView>
        {error ? (
          <ErrorComponentComponent />
        ) : valueCharged === 0 ? (
          <ZeroTaxComponent />
        ) : (
          <TaxChargedComponent
            valueCharged={valueCharged}
            stockCode={stockCode}
          />
        )}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
              navigation.reset({index: 0, routes: [{name: 'Home'}]});
            }}>
            <Text style={styles.buttonText}>Nova Estimativa</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Result;
