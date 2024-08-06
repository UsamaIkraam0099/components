import {StyleSheet} from 'react-native';

// others
import {wp} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  'bottomsheet-container': {
    flex: 1,
    height: '100%',
  },
});

export default styles;
