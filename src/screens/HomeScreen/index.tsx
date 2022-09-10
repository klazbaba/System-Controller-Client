import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Form} from 'react-native-form-component';

import {styles} from './styles';
import ScFormItem from 'components/ScFormItem';
import Screen from 'components/Screen';
import {AppStackParamList} from 'navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

const HomeScreen = (props: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [ipAddress, setIpAddress] = useState('');
  const [port, setPort] = useState('');
  const ipInput = useRef();
  const portInput = useRef();
  return (
    <Screen>
      <Form
        onButtonPress={() => setIsConnected(!isConnected)}
        buttonText={isConnected ? 'Disconnect' : 'Connect'}
        //@ts-ignore
        buttonStyle={styles.button(isConnected)}>
        <ScFormItem
          value={ipAddress}
          label="IP Address"
          keyboardType="numeric"
          onChangeText={text => setIpAddress(text)}
          placeholder="000.000.000.000"
          customValidation={() => ({
            status: /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/.test(ipAddress),
            message: 'Wrong ip',
          })}
          isRequired
          ref={ipInput}
        />

        <ScFormItem
          label="Port"
          value={port}
          onChangeText={text => setPort(text)}
          keyboardType="numeric"
          placeholder="0"
          isRequired
          ref={portInput}
        />
      </Form>
    </Screen>
  );
};

export default HomeScreen;
