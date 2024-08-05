import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const index = (props: SvgProps) => (
  <Svg height="100%" id="Layer_1" viewBox="0 0 256 256" width="100%" {...props}>
    <Path d="M179.199,38.399c0,1.637-0.625,3.274-1.875,4.524l-85.076,85.075l85.076,85.075c2.5,2.5,2.5,6.55,0,9.05s-6.55,2.5-9.05,0  l-89.601-89.6c-2.5-2.5-2.5-6.551,0-9.051l89.601-89.6c2.5-2.5,6.55-2.5,9.05,0C178.574,35.124,179.199,36.762,179.199,38.399z" />
  </Svg>
);
export default index;
