import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartupScreen from './src/screens/StartupScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="StartupScreen"
      /*screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle :{
              fontWeight: 'bold',
            },
          }}*/
    >
      <Stack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{title: 'StartupScreen'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'LoginScreen'}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'RegisterScreen'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
<<<<<<< HEAD

class App extends React.Component() {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login Screen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
import {Text, View} from "react-native";
import * as React from 'react';

export default class LoginScreen extends React.Component {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>LoginScreen</Text>
        </View>
    );
}*/
import * as React from 'react';
import Route from './src/Route.js';
//import Route from 'C:/Users/ececa/WebstormProjects/BetterAll/betterall-frontend/ba_fe/src/Route.js';
export default class App extends React.Component {
  render() {
    return "";
  }
}
=======
>>>>>>> b192e3b38efeb00e8703c3c9b1f81265135cc330
