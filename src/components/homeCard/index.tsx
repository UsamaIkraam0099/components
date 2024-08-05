import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

// others
import styles from './styles';
import {NextIcon} from 'assets';
import {wp} from '@constants/index';
import {useNavigation} from '@react-navigation/native';

type HomeCardProps = {
  data: Array<object>;
};

const index = (props: HomeCardProps) => {
  // hooks initialization
  const navigation: any = useNavigation();

  const handlePress = (route: string) => {
    if (!route) return;

    navigation.navigate(route);
  };

  return (
    <FlatList
      data={props.data}
      style={{marginTop: wp(4)}}
      keyExtractor={(item: any, index: number) => `${item.index}-${item.title}`}
      renderItem={({item, index}: any) => {
        return (
          <View style={styles['parent-container']}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => handlePress(item.route)}
              style={[
                styles['main-container'],
                index != 0 && {marginTop: wp(1)},
              ]}>
              <Text style={styles['item-label']}>{item.title}</Text>

              <View style={styles['icon-container']}>
                <NextIcon width={wp(6)} height={wp(6)} />
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default index;
