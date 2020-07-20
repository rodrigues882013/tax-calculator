import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#40edcc',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#eb505f',
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginBottom: '5%',
  },
  buttonText: {
    color: '#40edcc',
    fontSize: 20,
  },
});
