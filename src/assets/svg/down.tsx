import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const index = (props: SvgProps) => (
  <Svg viewBox="0 0 101 101" id="down" {...props}>
    <Path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z" />
  </Svg>
);
export default index;
