import {colors} from 'colors';

import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ViewProps,
  useColorScheme,
} from 'react-native';

interface Props {
  children: ReactNode;
  style?: ViewProps;
}

export default function Screen(props: Props) {
  const colorScheme = useColorScheme();
  return (
    // @ts-ignore
    <SafeAreaView style={styles.container(colorScheme)}>
      <ScrollView
        contentContainerStyle={[
          // @ts-ignore
          styles.contentContainer(colorScheme),
          props.style,
        ]}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // @ts-ignore
  container: colorScheme => ({
    flex: 1,
    backgroundColor: colorScheme === 'dark' ? colors.black : colors.white,
  }),
  // @ts-ignore
  contentContainer: colorScheme => ({
    flexGrow: 1,
    backgroundColor: colorScheme === 'dark' ? '#2e2d2d' : colors.white,
    padding: 16,
  }),
});
