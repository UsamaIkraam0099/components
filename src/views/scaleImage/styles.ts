import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    marginTop: wp(8),
    justifyContent: 'center',
  },
  'image-container': {
    width: '100%',
    height: '100%',
  },
});

export default styles;
