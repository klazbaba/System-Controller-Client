import { colors } from 'colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    //@ts-ignore
  },button: (isConnected) => ({backgroundColor: !isConnected ? colors.green:colors.red})
});
