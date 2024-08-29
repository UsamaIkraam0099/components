import React from 'react';
import {Text, View, ScrollView} from 'react-native';

// others
import {en} from 'language';
import {DATA} from './utils';
import styles from './styles';
import {Container} from 'layout';
import {wp} from '@constants/index';
import {Accordian} from 'components';

function AccordianView() {
  return (
    <Container left={true} headerLabel={en.accordian}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles['list-container']}>
        <View style={styles['main-container']}>
          <Text style={styles['single-accordian-label']}>Single</Text>
          <Accordian
            title="Hey, Im accordian"
            content={en.lorem_ipsum_content}
          />

          <Text
            style={[styles['single-accordian-label'], styles['list-label']]}>
            Accordian List
          </Text>

          {DATA.map((item, index) => {
            return (
              <View
                key={`${item.title}-${index}`}
                style={{marginTop: index !== 0 ? wp(4) : 0}}>
                <Accordian title={item.title} content={item.content} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
}

export default AccordianView;
