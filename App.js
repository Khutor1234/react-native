import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen'
import MainScreen from './src/screens/MainScreen';
import PostScreen from './src/screens/PostScreen';
import store from './src/store/store';

LogBox.ignoreLogs(['Warning: ...']);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Admin">
            {() => <MainScreen admin />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

