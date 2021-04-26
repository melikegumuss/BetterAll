//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView,FlatList } from "react-native";
import React, {useState} from 'react';
//import "fontsource-muli";
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';

export default class Welcome extends React.Component {
    constructor() {
        super();
    }
    state={
    }

    render() {
        return (
            <View style={styles.container} >
                <View  style={styles.whole}>
                    <Text style={styles.textBetterAll}>BetterAll</Text>
                    <Text style={styles.smallText}>Maintain a healthier lifestyle with meal plans, workout plans and progress tracking all in one app. </Text>

                    <Text style={{fontSize:15,marginTop:50, color:'#F5F5F5',}}>Sign up to get started</Text>
                    <ScrollView>

                        <View style={{marginTop:10}}>
                            <Button onPress={() => { this.props.navigation.navigate('RegisterScreen')}}
                                    title="Sign up for free !"
                                    color="#354A21"
                            ></Button>
                        </View>

                       {/* <Button
                            style={styles.login}
                            onPress={() => { this.props.navigation.navigate('LoginScreen')}}>
                            <Text >Sign up for free</Text>
                        </Button>*/}

                        <Text style={{marginTop:40, color:'#F5F5F5',fontSize:15}}> ALREADY A BETTERALL MEMBER?</Text>

                        {/*<TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('LoginScreen')}}>
                            <Text >Sign up for free</Text>
                        </TouchableOpacity>*/}
                        <View style={{marginTop:8}}>
                            <Button onPress={() => { this.props.navigation.navigate('LoginScreen')}}
                                    title="Login"
                                    color="#354A21"
                            ></Button>
                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDDA7E',
        paddingLeft: 30,
        paddingRight: 30,
    },
    textBetterAll: {
        textAlign:'center',
        fontSize:60,
        fontWeight:'bold',
        color:'#B2C248',
        paddingLeft: 40,
        paddingRight: 30,
    },

    smallText: {
        textAlign:'center',
        fontSize:20,
        color:'#F5F5F5',
        paddingTop:50,
        paddingLeft: 5,
        paddingRight: 5,
    },
    whole: {
        alignItems:'center',
        paddingTop:150,
    },
    register: {
        alignItems:'center',
        marginTop:50,
        marginLeft:50,
        marginRight:50,
        color:'black',

    },
});
