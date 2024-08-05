/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// others
import {StackNavigator} from 'routes';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
