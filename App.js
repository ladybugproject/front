import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainUpperSide from './components/mainUpperSide.js';

export default function App() {
  return (
      <MainUpperSide></MainUpperSide>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
