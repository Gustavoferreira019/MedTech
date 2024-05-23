import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InitialPatient() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text>with Expo.io</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:28
  }
});