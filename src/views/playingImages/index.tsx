import React from 'react';
import {Text, View} from 'react-native';

// others
import {en} from 'language';
import {DATA} from './utils';
import styles from './styles';
import {Container} from 'layout';
import {BookCard} from 'components';

function PlayingImages() {
  return (
    <Container left={true} headerLabel={en.playing_with_images}>
      <View style={[styles['main-container']]}>
        <Text style={styles['title-label']}>{en.reading}</Text>
        <BookCard data={DATA.reverse()} />
      </View>
    </Container>
  );
}

export default PlayingImages;
