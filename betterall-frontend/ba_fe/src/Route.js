import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from '@react-navigation/native';
import StartupScreen from './screens/StartupScreen/index';
import { ActivityIndicator } from 'react-native';
/*
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const LoginScreenA = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
});
*/
/*
const AppNavigator = createStackNavigator(
  {
    StartupScreen: {
      screen: StartupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'StartupScreen',
  },
);
const AppNavigator = createStackNavigator();

export default createAppContainer(AppNavigator);
*/
//const Stack = createStackNavigator();
/*function Route() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={StartupScreen}
        options={{ title: 'My app' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
    //<NavigationContainer>
    //</NavigationContainer>
  );*/
//}

const AuthStack = createStackNavigator();

export default () => {
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name = "Startup Screen" component={StartupScreen} />
    </AuthStack.Navigator>
  </NavigationContainer>
};