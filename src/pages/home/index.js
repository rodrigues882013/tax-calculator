/* eslint-disable-next-line react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Card, Input, Icon} from 'react-native-elements';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import styles, {stepLabelStyle} from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

const Home = ({navigation}) => {
  const [stockCode, setStockCode] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [dateBought, setDateBought] = useState(
    new Date(moment(new Date()).format('YYYY-MM-DD')),
  );
  const [dateSold, setDateSold] = useState(
    new Date(moment(new Date()).format('YYYY-MM-DD')),
  );

  const InputInformationComponent = () => {
    try {
      return (
        <View style={{marginTop: '5%'}}>
          <Input label="Código do Ativo" placeholder="Ex.: XPML12, IBVSA3" />

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
          <Input label="Quantidade Vendida" placeholder="Ex.: 1, 2..." />
        </View>
      );
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const IncomeTaxResultComponent = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Card title="Resumo das informações">
          <View>
            <Text style={styles.name}>Exibir Resumo das informações</Text>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ProgressSteps {...stepLabelStyle}>
        <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} label="Etapa 1">
          <InputInformationComponent />
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} label="Etapa 2">
          <IncomeTaxResultComponent />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Home;
