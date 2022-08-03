import {styles} from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'App';

import React from 'react';
import {View} from 'react-native';

type Props = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

const HomeScreen = (_props: Props) => <View style={styles.wrapper}></View>;

export default HomeScreen;
