import React from 'react';

// others
import {
  MainView,
  Accordian,
  CustomTab,
  BottomSheet,
  FloatingLabelInputField,
  AnimatedButtonWithLoading,
} from 'views';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="MainView">
      <Stack.Screen name="MainView" component={MainView} />
      <Stack.Screen name="Accordian" component={Accordian} />
      <Stack.Screen name="CustomTab" component={CustomTab} />
      <Stack.Screen name="BottomSheet" component={BottomSheet} />
      <Stack.Screen
        name="AnimatedButtonWithLoading"
        component={AnimatedButtonWithLoading}
      />
      <Stack.Screen
        name="FloatingLabelInputField"
        component={FloatingLabelInputField}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
