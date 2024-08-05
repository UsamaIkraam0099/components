import {StyleSheet} from 'react-native';

// others
import {APP_COLORS, hp, wp} from '@constants/index';

const styles = StyleSheet.create({
  'parent-container': {
    width: wp(100),
    alignItems: 'center',
    paddingVertical: wp(2),
  },
  'main-container': {
    width: wp(90),
    height: wp(14),
    borderRadius: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: APP_COLORS.WHITE,

    shadowColor: '#585F65',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  'item-label': {
    fontSize: wp(4),
    fontWeight: '500',
    color: APP_COLORS.PRIMARY,
  },
  'icon-container': {
    right: 0,
    width: wp(8),
    height: wp(8),
    marginRight: wp(3),
    alignItems: 'center',
    position: 'absolute',
    borderRadius: hp(100),
    justifyContent: 'center',
  },
});

export default styles;
