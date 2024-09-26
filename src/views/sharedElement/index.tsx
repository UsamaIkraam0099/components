import React from 'react';
import {Text, View} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import Animated, {
  withSpring,
  WithSpringConfig,
  SharedTransition,
  SharedTransitionType,
} from 'react-native-reanimated';

const SPRING_CONFIG = {
  mass: 1,
  stiffness: 100,
  damping: 200,
};

function SharedElement() {
  const transition = SharedTransition.custom(values => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
    };
  })
    .progressAnimation((values, progress) => {
      'worklet';
      const getValue = (
        progress: number,
        target: number,
        current: number,
      ): number => {
        return progress * (target - current) + current;
      };
      return {
        width: getValue(progress, values.targetWidth, values.currentWidth),
        height: getValue(progress, values.targetHeight, values.currentHeight),
      };
    })
    .defaultTransitionType(SharedTransitionType.ANIMATION);

  return (
    <Container left={true} headerLabel="">
      <Animated.View
        sharedTransitionTag="sharedTag"
        style={[styles['main-container']]}
        sharedTransitionStyle={transition}>
        <Text style={styles['title-label']}>{en.reading}</Text>
      </Animated.View>
    </Container>
  );
}

export default SharedElement;
