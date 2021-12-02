import React from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => {
  return (
    <View style = {styles.navbar}>
      <Pressable style = {styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style = {styles.text}>Go to main page</Text>
      </Pressable>
      <Pressable style = {styles.button} onPress={() => navigation.navigate('Admin')}>
        <Text style = {styles.text}>Go to admin page</Text>
      </Pressable>
    </View>
  );
}

export default Home
