import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {Form} from 'react-native-form-component';
import TcpSocket from 'react-native-tcp-socket';

import {styles} from './styles';
import ScFormItem from 'components/ScFormItem';
import Screen from 'components/Screen';
import {AppStackParamList} from 'navigation';

type Props = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;
let client: TcpSocket.Socket;

const HomeScreen = (props: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [ipAddress, setIpAddress] = useState('');
  const [port, setPort] = useState('');
  const ipInput = useRef();
  const portInput = useRef();
  const options = {port: port as unknown as number, host: ipAddress};

  const handleButtonPress = () => {
    if (!isConnected) {
      client = TcpSocket.createConnection(options, () =>
        client.write('Hello server!'),
      );

      client.on('data', function (data) {
        console.log('message was received', data.toString());
      });

      client.on('error', function (error) {
        console.log(error);
      });

      client.on('close', function () {
        console.log('Connection closed!');
      });
    } else {
      client.destroy();
    }
    setIsConnected(!isConnected);
  };

  return (
    <Screen>
      <Form
        onButtonPress={handleButtonPress}
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
