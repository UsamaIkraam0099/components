import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const index = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 32 32" id="next" {...props}>
    <Path d="M23.715,15.364L9.848,2.298C9.446,1.921,8.772,1.899,8.34,2.249C7.909,2.6,7.884,3.19,8.285,3.568L21.478,16L8.285,28.432 c-0.4,0.378-0.375,0.969,0.056,1.319C8.546,29.917,8.807,30,9.066,30c0.286,0,0.571-0.1,0.782-0.298l13.867-13.066 C24.095,16.277,24.095,15.723,23.715,15.364z" />
  </Svg>
);
export default index;
