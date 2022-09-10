import React, {ComponentProps} from 'react';
import {StyleSheet} from 'react-native';
import {FormItem} from 'react-native-form-component';

interface Props extends ComponentProps<typeof FormItem> {}

export default function ScFormItem(props: Props) {
  return <FormItem {...props} style={styles.wrapper} />;
}

const styles = StyleSheet.create({wrapper: {borderWidth: 0.5}});
