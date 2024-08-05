import React, {useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {APP_COLORS, wp} from '@constants/index';
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

function AnimatedButtonWithLoading() {
  // hooks initialization
  const [press, setPress] = useState(false);

  // animation value
  const width = useSharedValue(wp(85));
  const borderRadius = useSharedValue(wp(4));

  const handlePress = () => {
    setPress(true);
    borderRadius.value = borderRadius.value + wp(96);
    width.value = withTiming(width.value - wp(73), {easing: Easing.linear});

    setTimeout(() => {
      setTimeout(() => {
        setPress(false);
      }, 150);
      borderRadius.value = borderRadius.value - wp(96);
      width.value = withTiming(width.value + wp(73), {easing: Easing.linear});
    }, 5000);
  };

  return (
    <Container left={true} headerLabel={en.animated_button}>
      <View style={styles['main-container']}>
        <Animated.View
          onTouchEnd={() => handlePress()}
          style={[styles['button-container'], {width, borderRadius}]}>
          {!press ? (
            <Text style={styles['button-label']}>Press Me!</Text>
          ) : (
            <ActivityIndicator size={wp(6)} color={APP_COLORS.WHITE} />
          )}
        </Animated.View>
      </View>
    </Container>
  );
}

export default AnimatedButtonWithLoading;
