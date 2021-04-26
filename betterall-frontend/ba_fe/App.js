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
import Welcome from "./src/screens/Welcome";
import Home from "./src/screens/Home";

import "../ba_fe/assets/images/mealPlan.png";
const Stack = createStackNavigator();
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from "react-native";


const Tab = createMaterialBottomTabNavigator();

function MainTabNavigator({navigation, route}){
    return (
      //NavStack(),
        <Tab.Navigator
            initialRouteName={AppMenuScreen}
            barStyle={{ backgroundColor: '#CDDA7E', height: 60 }}
            tabBarOptions={{
              activeTintColor: "#937298",
              style: {
                backgroundColor: "#937298",
              }
            }}>
          <Tab.Screen name='AppMenuScreen' component={AppMenuScreen}
            options={{
              title: '',
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <Image
                    style={{ width: 85, height: 85,     alignItems: 'center',
                      justifyContent: 'center'}}
                    source={
                      require("../ba_fe/assets/images/ic_accessibility_white.png")
                    }
                  />
                );
              },
            }}

          />
          <Tab.Screen name='CreateWorkoutPlan' component={CreateWorkoutPlan}
                      options={{
                        title: '',
                        tabBarIcon: ({size,focused,color}) => {
                          return (
                            <Image
                              style={{ width: 45, height: 45,     alignItems: 'center',
                                justifyContent: 'center'}}
                              source={
                                require("../ba_fe/assets/images/workoutPlan.png")
                              }
                            />
                          );
                        },
                      }}/>
          <Tab.Screen name='CreateMealPlan' component={CreateMealPlan}
                      options={{
                        title: '',
                        tabBarIcon: ({size,focused,color}) => {
                          return (
                            <Image
                              style={{ width: 45, height: 45,     alignItems: 'center',
                                justifyContent: 'center'}}
                              source={
                                require("../ba_fe/assets/images/mealPlan.png")
                              }
                            />
                          );
                        },
                      }}/>
          <Tab.Screen name='ViewProgressScreen' component={ViewProgressScreen}
                      options={{
                        title: '',
                        tabBarIcon: ({size,focused,color}) => {
                          return (
                            <Image
                              style={{ width: 45, height: 45,     alignItems: 'center',
                                justifyContent: 'center'}}
                              source={
                                require("../ba_fe/assets/images/seeProgress.png")
                              }
                            />
                          );
                        },
                      }}/>
        </Tab.Navigator>
    )
}

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
        name="AppMenuScreen"
        component={MainTabNavigator}
        options={{
            headerTitle: 'AppMenuScreen', headerShown: false}}
    />
      <Stack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{title: '', headerShown: false}}
      />
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{title: '', headerShown: false}}
        />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'LoginScreen', headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'RegisterScreen', headerShown: false}}
      />

      <Stack.Screen
        name="CalculateDailyCalorieScreen"
        component={CalculateDailyCalorieScreen}
        options={{title: 'CalculateDailyCalorieScreen', headerShown: false}}
        //component={MainTabNavigator}
      />
      <Stack.Screen
        name="CalculateBodyFatRatioScreen"
        //component={MainTabNavigator}
        component={CalculateBodyFatRatioScreen}
        options={{title: 'CalculateBodyFatRatioScreen', headerShown: false}}
      />
      <Stack.Screen
        name="ViewProgressScreen"
        //component={MainTabNavigator}
        component={ViewProgressScreen}
        options={{title: 'ViewProgressScreen', headerShown: false}}
      />
      <Stack.Screen
        name="CreateMealPlan"
        component={MainTabNavigator}
        //component={CreateMealPlan}
        options={{title: 'CreateMealPlan', headerShown: false}}
      />
      <Stack.Screen
        name="CreateWorkoutPlan"
        component={MainTabNavigator}
        //component={CreateWorkoutPlan}
        options={{title: 'CreateWorkoutPlan', headerShown: false}}
      />

      <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerShown: false}}
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
