import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartupScreen from './src/screens/StartupScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateMealPlan from './src/screens/CreateMealPlan';
import CreateWorkoutPlan from './src/screens/CreateWorkoutPlan';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="CreateWorkoutPlan"
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
        name="CreateWorkoutPlan"
        component={CreateWorkoutPlan}
        options={{title: 'CreateWorkoutPlan'}}
      />
      <Stack.Screen
        name="CreateMealPlan"
        component={CreateMealPlan}
        x
        options={{title: 'CreateMealPlan'}}
      />
      <Stack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{title: ''}}
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
