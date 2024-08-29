import {StyleSheet} from 'react-native';

// others
import {wp, hp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-accordian': {
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: wp(2),
    borderColor: APP_COLORS.DARK_GRAY,
    backgroundColor: APP_COLORS.PRIMARY_FOUR,
  },
  'accordin-container': {
    width: wp(85),
    height: wp(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    justifyContent: 'space-between',
  },
  'remove-top-border': {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  'accordin-anim': {
    width: wp(85),
  },
  'accordian-lable': {
    fontSize: wp(4),
    fontWeight: '500',
    color: APP_COLORS.TEXT_DARK,
  },
  'icon-container': {
    width: wp(8),
    height: wp(8),
    right: wp(-2),
    alignItems: 'center',
    borderRadius: hp(100),
    justifyContent: 'center',
  },
  'content-container': {
    padding: wp(4),
    paddingTop: 0,
    position: 'absolute',
  },
  'content-label': {
    fontSize: wp(3.5),
    fontWeight: '400',
    textAlign: 'justify',
    color: APP_COLORS.TEXT_DARK,
  },
});

export default styles;
