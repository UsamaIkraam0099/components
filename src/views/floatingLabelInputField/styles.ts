import {StyleSheet} from 'react-native';

// others
import {wp, hp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    marginTop: hp(16),
    alignItems: 'center',
  },
  'input-container': {
    width: wp(85),
    height: wp(12),
    borderRadius: wp(2),
    borderColor: APP_COLORS.DARK_GRAY,
  },
  'main-input': {
    flex: 1,
    fontSize: wp(4),
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
  },
  'label-container': {
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: wp(1),
    backgroundColor: APP_COLORS.BACKGROUND,
  },
  'input-label': {
    fontSize: wp(4),
    fontWeight: '500',
  },
  'error-label': {
    width: wp(82),
    fontSize: wp(3),
    marginTop: wp(0.8),
    fontStyle: 'italic',
    color: APP_COLORS.OFF_RED,
  },
});

export default styles;
