import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    flex: 1,
    width: wp(100),
    marginTop: wp(16),
    alignItems: 'center',
  },
  'main-tab': {
    width: wp(85),
    height: wp(12),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: wp(100),
    justifyContent: 'center',
    paddingHorizontal: wp(2.5),
    backgroundColor: APP_COLORS.PRIMARY_THREE,
  },
  'animated-container': {
    left: wp(2.5),
    height: wp(7),
    position: 'absolute',
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
    backgroundColor: APP_COLORS.PRIMARY_FOUR,
  },
  'item-container': {
    height: wp(7),
    alignItems: 'center',
    borderRadius: wp(100),
    justifyContent: 'center',
  },
  'active-container': {
    backgroundColor: APP_COLORS.PRIMARY_FOUR,
  },
  'item-label': {
    opacity: 0.4,
    fontSize: wp(4),
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  'active-label': {
    opacity: 1,
    fontWeight: '700',
    color: APP_COLORS.PRIMARY,
  },
  'message-container': {
    width: wp(85),
    padding: wp(4),
    marginTop: wp(24),
    alignItems: 'center',
  },
  'message-label': {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: APP_COLORS.PRIMARY,
    textTransform: 'capitalize',
  },
});

export default styles;
