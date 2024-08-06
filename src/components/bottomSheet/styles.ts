import {StyleSheet} from 'react-native';

// others
import {wp, APP_COLORS} from '@constants/index';

const styles = StyleSheet.create({
  'bottom-sheet-container': {
    width: wp(100),
    borderRadius: wp(8),
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: APP_COLORS.WHITE,

    shadowColor: APP_COLORS.DARK_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  'line-container': {
    width: wp(16),
    height: wp(1.2),
    borderRadius: wp(2),
    alignSelf: 'center',
    marginVertical: wp(4),
    backgroundColor: APP_COLORS.DARK_GRAY,
  },
});

export default styles;
