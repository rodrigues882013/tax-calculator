import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import styles, {stepLabelStyle} from './style';
import {Input, Card} from 'react-native-elements';

const Home = ({navigation}) => {
  const [stockCode, setStockCode] = useState(0);
  const [dateBought, setDateBought] = useState(Date.now());
  const [dateSold, setDateSold] = useState(Date.now());
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <ProgressSteps {...stepLabelStyle}>
        <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} label="Etapa 1">
          <View style={{alignItems: 'center', marginTop: '5%'}}>
            <Input
              label="Código do Ativo"
              placeholder="Ex.: XPML12, IBVSA3"
              leftIcon={{type: 'foundation', name: 'graph-trend'}}
            />
            <Input
              label="Data da Compra"
              placeholder="00/00/0000"
              leftIcon={{type: 'foundation', name: 'calendar'}}
            />
            <Input
              label="Data da Venda"
              placeholder="00/00/0000"
              leftIcon={{type: 'foundation', name: 'calendar'}}
            />
            <Input
              label="Quantidade Vendida"
              placeholder="Ex.: 1, 2..."
              leftIcon={{type: 'foundation', name: 'info'}}
            />
          </View>
        </ProgressStep>
        <ProgressStep nextBtnTextStyle={styles.buttonTextStyle} label="Etapa 2">
          <View style={{alignItems: 'center'}}>
            <Card title="Resumo das informações">
              <View>
                <Text style={styles.name}>Exibir Resumo das informações</Text>
              </View>
            </Card>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default Home;
