import React, {JSX, forwardRef, useCallback, useImperativeHandle} from 'react';
import {View, Dimensions} from 'react-native';

// others
import styles from './styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  withSpring,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  Extrapolation,
} from 'react-native-reanimated';

type BottomSheetProps = {
  children: JSX.Element;
  animatedValue?: number;
  bottomSheetStyle?: object;
  stopSlideAnimation?: boolean;
};

export type BottomSheetRefProps = {
  isActive: () => boolean;
  scrollTo: (destination: number) => void;
};

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const index = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (
    {children, animatedValue, bottomSheetStyle, stopSlideAnimation = true},
    ref,
  ) => {
    // animation variables
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;

      translateY.value = withSpring(destination, {damping: 50});
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({y: 0});
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        if (stopSlideAnimation && event.velocityY < 0) return;

        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (
          !stopSlideAnimation &&
          translateY.value < -SCREEN_HEIGHT / 1.5
        ) {
          scrollTo(MAX_TRANSLATE_Y);
        } else {
          scrollTo(animatedValue || 0);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 16],
        Extrapolation.CLAMP,
      );

      return {
        borderRadius,
        transform: [{translateY: translateY.value}],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles['bottom-sheet-container'],
            rBottomSheetStyle,
            bottomSheetStyle,
            {top: SCREEN_HEIGHT},
          ]}>
          <View style={styles['line-container']} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

export default index;
