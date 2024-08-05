import {StyleSheet} from 'react-native';

// others
import {wp, hp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    alignItems: 'center',
    backgroundColor: APP_COLORS.BACKGROUND,
  },
  'safe-area': {
    flex: 0,
    backgroundColor: APP_COLORS.BACKGROUND,
  },
  'header-container': {
    width: wp(100),
    height: wp(16),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  'corner-container': {
    width: wp(11),
    height: wp(11),
    alignItems: 'center',
    borderRadius: hp(100),
    justifyContent: 'center',
  },
  'header-label': {
    width: wp(70),
    fontSize: wp(6),
    fontWeight: '700',
    textAlign: 'center',
    color: APP_COLORS.TEXT_DARK,
  },
  'icon-background': {
    backgroundColor: APP_COLORS.LIGHT_GRAY,
  },
});

export default styles;
