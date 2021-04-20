import React, {Component} from 'react';
import {View, Text} from 'react-native';
import "../../../assets/fonts/Mulish-Regular.ttf";
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CreateMealPlan from "../CreateMealPlan";
import CreateWorkoutPlan from "../CreateWorkoutPlan";
import {NavigationContainer} from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

export default class UserScreen extends Component {

    constructor( ) {
        super( );

    }

    render() {
        return (
            <View>
                <Text>efwe</Text>
            </View>



        );
    }
}



