import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  'button-container': {
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_COLORS.PRIMARY_TWO,
  },
  'button-label': {
    fontSize: wp(5),
    letterSpacing: 1,
    fontWeight: '500',
    color: APP_COLORS.WHITE,
  },
});

export default styles;
