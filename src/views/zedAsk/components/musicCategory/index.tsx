import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';

// others
import styles from './styles';
import {wp} from '@constants/index';
import {MUSIC_CATEGORY} from '../../utils';

interface Props {
  category: string;
  onPress: (category: string) => void;
}

const index = ({onPress, category}: Props) => {
  return (
    <FlatList
      horizontal
      data={MUSIC_CATEGORY}
      style={styles['list-container']}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any, index: number) => `${index}-${item}`}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress(item.label)}
            style={[
              styles['main-container'],
              index != 0 && {marginLeft: wp(4)},
              item.label == category && styles['item-select'],
            ]}>
            <Text
              style={[
                styles['item-label'],
                item.label == category && styles['item-select-label'],
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default index;
