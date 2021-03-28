import {StyleSheet} from 'react-native';
import spaces from '../../components/sizes';

export default StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#5893cf',
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginBottom: '5%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  logoStyle: {
    marginTop: spaces.space5,
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  explanationStyle: {
    marginTop: spaces.space5,
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  textExplanation: {
    color: '#01223e',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'justify',
  },
});
