import React, {useRef, useCallback} from 'react';
import {Text, View, Button} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {BottomSheetRefProps} from 'components/bottomSheet';
import {BottomSheet as BottomSheetWrapper} from 'components';

const SCROLL_TO = -400;

function BottomSheet() {
  // ref varibales
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  const handlePress = useCallback(() => {
    const isActive = bottomSheetRef?.current?.isActive();
    if (isActive) {
      bottomSheetRef?.current?.scrollTo(0);
    } else {
      bottomSheetRef?.current?.scrollTo(SCROLL_TO);
    }
  }, []);

  return (
    <Container left={true} headerLabel={en.bottom_sheet}>
      <View style={styles['main-container']}>
        <Button title="Open!" onPress={handlePress} />

        <BottomSheetWrapper
          ref={bottomSheetRef}
          animatedValue={SCROLL_TO}
          // disable it if you don't want to slide more
          stopSlideAnimation={false}
          bottomSheetStyle={styles['bottomsheet-container']}>
          <Text>Opps Its me</Text>
        </BottomSheetWrapper>
      </View>
    </Container>
  );
}

export default BottomSheet;
