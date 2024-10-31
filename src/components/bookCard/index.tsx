import React from 'react';
import {Text, View, Image, ScrollView, Pressable} from 'react-native';

// others
import styles from './styles';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

type HomeCardProps = {
  data: Array<any>;
};

const index = (props: HomeCardProps) => {
  // hooks initialization
  const navigation: any = useNavigation();

  return (
    <ScrollView
      horizontal
      style={styles['scroll-container']}
      showsHorizontalScrollIndicator={false}>
      {props.data.map((item, index) => {
        return (
          <Animated.View
            key={`${item.title}-${index}`}
            // sharedTransitionTag="sharedTag"
            onTouchEnd={() => navigation.navigate('SharedElement')}>
            <View style={styles['main-container']}>
              <Image
                resizeMode="cover"
                source={{uri: item.cover}}
                style={styles['image-container']}
              />
            </View>

            <Text numberOfLines={1} style={styles['title-label']}>
              {item.title}
            </Text>

            <Text numberOfLines={1} style={styles['page-label']}>
              Pages: {item.pages}
            </Text>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

export default index;
