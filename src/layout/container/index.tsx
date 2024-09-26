import React, {JSX} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// others
import styles from './styles';
import {BackIcon} from 'assets';
import {APP_COLORS, wp} from '@constants/index';
import {useNavigation} from '@react-navigation/native';

interface ContainerProps {
  left?: boolean;
  right?: boolean;
  headerLabel: string;
  children: JSX.Element;
}

function Container({left, right, children, headerLabel}: ContainerProps) {
  // hooks initialization
  const navigation: any = useNavigation();

  return (
    <View style={styles['main-container']}>
      <SafeAreaView style={styles['safe-area']} />
      <StatusBar
        barStyle="dark-content"
        backgroundColor={APP_COLORS.BACKGROUND}
      />
      <View style={styles['header-container']}>
        <TouchableOpacity
          onPress={() => left && navigation.goBack()}
          style={[
            styles['corner-container'],
            left && styles['icon-background'],
          ]}>
          {left && (
            <BackIcon
              width={wp(6)}
              height={wp(6)}
              fill={APP_COLORS.TEXT_DARK}
            />
          )}
        </TouchableOpacity>
        <Text style={styles['header-label']}>{headerLabel}</Text>
        <TouchableOpacity
          style={[
            styles['corner-container'],
            right && styles['icon-background'],
          ]}>
          {right && <></>}
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
}

export default Container;
