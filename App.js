import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/Component/Navbar';
import News from './src/Component/News';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar/>
        <News/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000'
  },
});
