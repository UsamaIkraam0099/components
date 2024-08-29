import React from 'react';
import {Text, View, Pressable} from 'react-native';

// others
import styles from './styles';
import {DownIcon} from 'assets';
import {APP_COLORS, wp} from '@constants/index';
import Animated, {
  runOnUI,
  measure,
  withTiming,
  useSharedValue,
  useAnimatedRef,
  useDerivedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface AccordianProps {
  title: string;
  content: string;
}

const index = ({title, content}: AccordianProps) => {
  // animation variables
  const accordianRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const progress = useDerivedValue(() =>
    heightValue.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));

  const handlePress = () => {
    if (heightValue.value == 0) {
      runOnUI(() => {
        'worklet';
        heightValue.value = withTiming(measure(accordianRef)!.height);
      })();
    } else heightValue.value = withTiming(0);
  };

  return (
    <View style={styles['main-accordian']}>
      <Pressable
        onPress={() => handlePress()}
        style={styles['accordin-container']}>
        <Text style={styles['accordian-lable']}>{title}</Text>

        <Animated.View style={[styles['icon-container'], iconStyle]}>
          <DownIcon width={wp(6)} height={wp(6)} fill={APP_COLORS.DARK_GRAY} />
        </Animated.View>
      </Pressable>

      <Animated.View style={[styles['accordin-anim'], heightAnimationStyle]}>
        <Animated.View style={styles['content-container']} ref={accordianRef}>
          <Text style={styles['content-label']}>{content}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default index;
