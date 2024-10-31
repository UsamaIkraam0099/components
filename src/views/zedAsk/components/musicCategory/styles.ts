import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'list-container': {
    marginTop: wp(3),
    marginHorizontal: wp(5),
  },
  'main-container': {
    borderWidth: wp(0.5),
    borderRadius: wp(2.5),
    paddingVertical: wp(2),
    paddingHorizontal: wp(3),
    borderColor: APP_COLORS.PRIMARY,
  },
  'item-label': {
    fontSize: wp(4),
    fontWeight: '600',
    letterSpacing: wp(0.2),
    color: APP_COLORS.PRIMARY,
  },
  'item-select': {
    borderWidth: 0,
    backgroundColor: APP_COLORS.PRIMARY,
  },
  'item-select-label': {
    color: APP_COLORS.WHITE,
  },
});

export default styles;
