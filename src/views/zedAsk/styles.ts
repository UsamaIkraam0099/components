import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'main-container': {
    width: wp(100),
    marginTop: wp(4),
  },
  'title-label': {
    fontSize: wp(5),
    marginLeft: wp(5),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_DARK,
  },
  'btn-container': {
    width: wp(80),
    marginTop: wp(16),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: wp(2.5),
    paddingVertical: wp(4),
    justifyContent: 'center',
    backgroundColor: APP_COLORS.PRIMARY,
  },
  'btn-label': {
    fontSize: wp(4),
    fontWeight: '600',
    letterSpacing: wp(0.2),
    color: APP_COLORS.WHITE,
  },
  'spotify-btn': {
    marginTop: wp(4),
    backgroundColor: APP_COLORS.PRIMARY_TWO,
  },
});

export default styles;
