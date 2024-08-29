import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'list-container': {
    width: wp(100),
    paddingBottom: wp(12),
  },
  'main-container': {
    flex: 1,
    width: wp(100),
    marginTop: wp(16),
    alignItems: 'center',
    paddingBottom: wp(12),
  },
  'single-accordian-label': {
    width: wp(85),
    fontSize: wp(5),
    fontWeight: 'bold',
    paddingBottom: wp(4),
    color: APP_COLORS.PRIMARY,
  },
  'list-label': {
    marginTop: wp(8),
  },
});

export default styles;
