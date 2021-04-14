import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartupScreen from './src/screens/StartupScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import AppMenuScreen from './src/screens/AppMenuScreen';
import CalculateDailyCalorieScreen from "./src/screens/CalculateDailyCalorieScreen";
import CalculateBodyFatRatioScreen from "./src/screens/CalculateBodyFatRatioScreen";
import ViewProgressScreen from "./src/screens/ViewProgressScreen";
import CreateMealPlan from "./src/screens/CreateMealPlan";
import CreateWorkoutPlan from "./src/screens/CreateWorkoutPlan";
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
      <Stack.Screen
        name="AppMenuScreen"
        component={AppMenuScreen}
        options={{title: 'AppMenuScreen'}}
      />
      <Stack.Screen
        name="CalculateDailyCalorieScreen"
        component={CalculateDailyCalorieScreen}
        options={{title: 'CalculateDailyCalorieScreen'}}
      />
      <Stack.Screen
        name="CalculateBodyFatRatioScreen"
        component={CalculateBodyFatRatioScreen}
        options={{title: 'CalculateBodyFatRatioScreen'}}
      />
      <Stack.Screen
        name="ViewProgressScreen"
        component={ViewProgressScreen}
        options={{title: 'ViewProgressScreen'}}
      />
      <Stack.Screen
        name="CreateMealPlan"
        component={CreateMealPlan}
        options={{title: 'CreateMealPlan'}}
      />
      <Stack.Screen
        name="CreateWorkoutPlan"
        component={CreateWorkoutPlan}
        options={{title: 'CreateWorkoutPlan'}}
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
