import {StyleSheet} from 'react-native';
import spaces from '../../sizes';

export default StyleSheet.create({
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
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  termHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#01223e',
    textAlign: 'left',
  },
});
