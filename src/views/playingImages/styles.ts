import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    width: wp(100),
    marginTop: wp(8),
  },
  'title-label': {
    fontSize: wp(5),
    marginLeft: wp(5),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_DARK,
  },
});

export default styles;
