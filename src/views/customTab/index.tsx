import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {wp} from '@constants/index';
import Animated, {
  runOnJS,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const tabButtons = ['home', 'profile', 'contact'];

function CustomTab() {
  // variables
  const PARENT_WIDTH = wp(80);
  const BUTTON_WIDTH = 80 / tabButtons.length;

  // animation variables
  const tabPositionX = useSharedValue(0);

  // state varibales
  const [active, setActive] = useState(0);

  const handleTabPress = (index: number) => {
    tabPositionX.value = withTiming(
      (PARENT_WIDTH / tabButtons.length) * index,
      {},
      () => {
        runOnJS(setActive)(index);
      },
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}],
    };
  });

  const label = `"${tabButtons[active]}" is your acrive tab!`;

  return (
    <Container left={true} headerLabel={en.custome_tab}>
      <View style={styles['main-container']}>
        <View style={styles['main-tab']}>
          <Animated.View
            style={[
              animatedStyle,
              {width: wp(BUTTON_WIDTH)},
              styles['animated-container'],
            ]}
          />
          {tabButtons.map((item: any, index: number) => (
            <Pressable
              key={`${item}-${index}`}
              onPress={() => handleTabPress(index)}
              style={[
                styles['item-container'],
                {width: wp(BUTTON_WIDTH)},
                active === index && styles['active-container'],
              ]}>
              <Text
                style={[
                  styles['item-label'],
                  active === index && styles['active-label'],
                ]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles['message-container']}>
          <Text style={styles['message-label']}>{label}</Text>
        </View>
      </View>
    </Container>
  );
}

export default CustomTab;
