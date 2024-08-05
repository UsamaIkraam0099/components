import React, {useRef, useState, useEffect} from 'react';
import {Text, View, Easing, Button, Animated, TextInput} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {wp} from '@constants/index';
import {handleInputColor} from './utils';

function FloatingLabelInputField() {
  // ref varibales
  const inputRef = useRef<TextInput>(null);

  // hooks initialization
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(false);

  // animation value
  const inputAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(inputAnim, {
      duration: 150,
      useNativeDriver: true,
      toValue: focused || !!value ? 1 : 0,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }).start();
  }, [focused, inputAnim]);

  const transform = [
    {
      scale: inputAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.75],
      }),
    },
    {
      translateY: inputAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [wp(3.5), -12],
      }),
    },
    {
      translateX: inputAnim.interpolate({
        inputRange: [0, 1.25],
        outputRange: [wp(4), 0],
      }),
    },
  ];

  const color: string = handleInputColor(focused, error);

  return (
    <Container left={true} headerLabel={en.floating_input_field}>
      <View style={styles['main-container']}>
        <View
          style={[
            styles['input-container'],
            {borderColor: color, borderWidth: focused ? 1.5 : 1},
          ]}>
          <TextInput
            value={value}
            ref={inputRef}
            style={styles['main-input']}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            onChangeText={(text: any) => setValue(text)}
          />

          <Animated.View
            onTouchEnd={() => inputRef?.current?.focus()}
            style={[styles['label-container'], {transform}]}>
            <Text style={[styles['input-label'], {color}]}>Full Name</Text>
          </Animated.View>
        </View>
        {error && <Text style={styles['error-label']}>{error}</Text>}

        <Button
          title="Check Error"
          onPress={() => setError('Please enter valid full name')}
        />
      </View>
    </Container>
  );
}

export default FloatingLabelInputField;
