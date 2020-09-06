import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Card, Input, Icon} from 'react-native-elements';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import styles, {stepLabelStyle} from './style';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

const InputInformationComponent = ({
  stockCode,
  dateBought,
  dateSold,
  quantity,
  setDateBought,
  setDateSold,
  setStockCode,
  setQuantity,
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
          key={'txtQuantity'}
          label="Quantidade Vendida"
          placeholder="Ex.: 1, 2..."
          value={quantity}
          onChangeText={(v) => setQuantity(v)}
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
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Card title="Resumo das informações">
        <View>
          <Text style={styles.name}>Nome do Ativo: {stockCode}</Text>
          <Text style={styles.name}>
            Data da Compra: {moment(dateBought).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.name}>
            Data do Venda: {moment(dateSold).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.name}>Quantidade Comprada: {quantity}</Text>
        </View>
      </Card>
    </View>
  );
};

const Home = ({navigation}) => {
  const [stockCode, setStockCode] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [dateBought, setDateBought] = useState(
    new Date(moment(new Date()).format('YYYY-MM-DD')),
  );
  const [dateSold, setDateSold] = useState(
    new Date(moment(new Date()).format('YYYY-MM-DD')),
  );

  const onSubmit = () => {
    navigation.navigate('Result', {
      stockCode,
      dateBought,
      dateSold,
      quantity,
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
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Home;
