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
  buttonTextStyle: {
    color: '#5893cf',
  },
});

export const stepLabelStyle = {
  activeStepIconBorderColor: '#5893cf',
  activeLabelColor: '#5893cf',
  completedStepIconColor: '#5893cf',
  completedProgressBarColor: '#5893cf',
};
