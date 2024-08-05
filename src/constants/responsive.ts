import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const wp = (value: number) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const hp = (value: number) => {
  let givenHeight = typeof value === 'number' ? value : parseFloat(value);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {wp, hp};
