import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Notifications} from './screens/Notifications';

export function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <Notifications />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
