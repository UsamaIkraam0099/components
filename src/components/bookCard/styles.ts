import {StyleSheet} from 'react-native';

// others
import {APP_COLORS, wp} from '@constants/index';

const styles = StyleSheet.create({
  'scroll-container': {
    marginTop: wp(6),
  },
  'main-container': {
    width: wp(38),
    height: wp(48),
    marginLeft: wp(5),
    marginBottom: wp(4),
    borderRadius: wp(2),
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
  'image-container': {
    width: wp(38),
    height: wp(48),
    borderRadius: wp(2),
    position: 'absolute',
  },
  'title-label': {
    fontSize: wp(4),
    maxWidth: wp(38),
    marginLeft: wp(5),
    fontWeight: 'bold',
    color: APP_COLORS.TEXT_DARK,
  },
  'page-label': {
    fontSize: wp(3),
    marginTop: wp(1),
    marginLeft: wp(5),
    color: APP_COLORS.DARK_GRAY,
  },
});

export default styles;
