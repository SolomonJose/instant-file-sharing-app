import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import TwoButton from './components/TwoButton';


export default function App() {
  return (
    <View style={styles.container}>
     <Logo></Logo>
     <TwoButton></TwoButton>
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
});
