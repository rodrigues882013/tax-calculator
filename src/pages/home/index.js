import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {Card, Input, Icon, CheckBox} from 'react-native-elements';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import styles, {stepLabelStyle} from './style';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

const InputInformationComponent = ({
  stockCode,
  dateBought,
  dateSold,
  quantity,
  isRealStateStock,
  setDateBought,
  setDateSold,
  setStockCode,
  setQuantity,
  setIsRealStateStock,
}) => {
  try {
    return (
      <View style={{marginTop: '5%'}}>
        <Input
          key={'txtStockCode'}
          label="Código do Ativo"
          placeholder="Ex.: XPML12, IBVSA3"
          value={stockCode}
          onChangeText={(v) => setStockCode(v)}
        />

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 8,
            fontFamily: 'sans-serif',
            color: '#86939e',
          }}>
          {' '}
          Data da Compra{' '}
        </Text>
        <DatePicker
          style={{
            borderWidth: 0,
            width: '100%',
            height: 70,
            backgroundColor: '#ffffff',
            paddingLeft: 10,
            paddingRight: 10,
          }}
          showIcon={false}
          customStyles={{
            dateInput: {
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              width: '100%',
            },
          }}
          date={dateBought}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="2016-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={setDateBought}
          iconComponent={<Icon name="calendar" type="foundation" />}
        />

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 8,
            fontFamily: 'sans-serif',
            color: '#86939e',
          }}>
          {' '}
          Data da Venda{' '}
        </Text>

        <DatePicker
          style={{
            borderWidth: 0,
            width: '100%',
            height: 70,
            backgroundColor: '#ffffff',
            paddingLeft: 10,
            paddingRight: 10,
          }}
          customStyles={{
            dateInput: {
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
            },
          }}
          showIcon={false}
          date={dateSold}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="2016-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={setDateSold}
          iconComponent={<Icon name="calendar" type="foundation" />}
        />
        <Input
          keyboardType="number-pad"
          key={'txtQuantity'}
          label="Quantidade Vendida"
          placeholder="Ex.: 1, 2..."
          value={quantity}
          onChangeText={(v) => setQuantity(v)}
        />
        <CheckBox
          title="É Fundo Imobiliário?"
          checked={isRealStateStock}
          onPress={() => setIsRealStateStock(!isRealStateStock)}
        />
      </View>
    );
  } catch (e) {
    console.log(e);
    return null;
  }
};

const IncomeTaxResultComponent = ({
  stockCode,
  dateBought,
  dateSold,
  quantity,
  isRealStateStock,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Card title="Resumo das informações">
        <View>
          <Text style={styles.name}>Nome do Ativo: {stockCode}</Text>
          <Text style={styles.name}>Data da Compra: {dateBought}</Text>
          <Text style={styles.name}>Data do Venda: {dateSold}</Text>
          <Text style={styles.name}>Quantidade Comprada: {quantity}</Text>
          <Text style={styles.name}>
            Fundo Imobiliário: {isRealStateStock ? 'Sim' : 'Não'}
          </Text>
        </View>
      </Card>
    </View>
  );
};

const Home = ({navigation}) => {
  const [isRealStateStock, setIsRealStateStock] = useState(false);
  const [stockCode, setStockCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [dateBought, setDateBought] = useState(
    moment(new Date()).format('DD-MM-YYYY').toString(),
  );
  const [dateSold, setDateSold] = useState(
    moment(new Date()).format('DD-MM-YYYY').toString(),
  );

  const onSubmit = () => {
    if (!stockCode || !quantity || !/^\d*$/.test(quantity)) {
      let message =
        !stockCode && !quantity
          ? 'Você precisa nos informar a quantidade comprada e o código do ativo primeiro!!'
          : !stockCode
          ? 'Você precisa informar o código do ativo'
          : !quantity
          ? 'Você precisa informar a quantidade comprada e ela precisa ser superior a 0.'
          : 'Por favor digite corretamente a quantidade, lembrando que quantidades negativas também não são aceitas';

      Alert.alert(
        'Importante!!!',
        message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
      return;
    }
    navigation.navigate('Result', {
      stockCode,
      dateBought,
      dateSold,
      quantity,
      isRealStateStock,
    });
  };

  return (
    <View style={styles.container}>
      <ProgressSteps {...stepLabelStyle}>
        <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} label="Etapa 1">
          <InputInformationComponent
            stockCode={stockCode}
            dateBought={dateBought}
            dateSold={dateSold}
            quantity={quantity}
            setDateBought={setDateBought}
            setDateSold={setDateSold}
            setQuantity={setQuantity}
            setStockCode={setStockCode}
            isRealStateStock={isRealStateStock}
            setIsRealStateStock={setIsRealStateStock}
          />
        </ProgressStep>
        <ProgressStep
          nextBtnTextStyle={styles.buttonTextStyle}
          label="Etapa 2"
          onSubmit={onSubmit}>
          <IncomeTaxResultComponent
            stockCode={stockCode}
            dateBought={dateBought}
            dateSold={dateSold}
            quantity={quantity}
            isRealStateStock={isRealStateStock}
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Home;
