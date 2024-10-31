import React, {useRef, createRef, useState} from 'react';
import {View, Image, Animated} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {
  State,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';

const uri: string =
  'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png';

function ScaleImage() {
  // states
  const [panEnabled, setPanEnabled] = useState(false);

  // ref variables
  const panRef = createRef();
  const pinchRef = createRef();
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale},
      },
    ],
    {useNativeDriver: true},
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const handlePinchStateChange = ({nativeEvent}: any) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
  };

  return (
    <Container left={true} headerLabel={en.scale_image}>
      <View style={[styles['main-container']]}>
        <PanGestureHandler
          ref={panRef}
          enabled={panEnabled}
          onGestureEvent={onPanEvent}
          failOffsetX={[-1000, 1000]}
          simultaneousHandlers={[pinchRef]}
          shouldCancelWhenOutside>
          <Animated.View>
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchEvent}
              simultaneousHandlers={[panRef]}
              onHandlerStateChange={handlePinchStateChange}>
              <Animated.Image
                source={{uri}}
                resizeMode="cover"
                style={[
                  styles['image-container'],
                  {transform: [{scale}, {translateX}, {translateY}]},
                ]}
              />
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Container>
  );
}

export default ScaleImage;
