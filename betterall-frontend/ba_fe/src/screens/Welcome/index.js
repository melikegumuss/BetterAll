//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView,FlatList } from "react-native";
import React, {useState} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
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
                <ScrollView>
                    <Text style={styles.textBetterAll}>BetterAll</Text>
                    <Text style={styles.smallText}>Maintain a healthier lifestyle with meal plans, workout plans and progress tracking all in one app. </Text>

                    <Text style={styles.buttonInfoText}></Text>

                        <View style={{marginTop:10}}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => { this.props.navigation.navigate('RegisterScreen')}}>
                              <Text style={styles.buttonText}> Sign up to get started </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop:8}}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => { this.props.navigation.navigate('LoginScreen')}}>
                                <Text style={styles.buttonText}> ALREADY A BETTERALL MEMBER? </Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        backgroundColor: '#CDDA7E',
        paddingLeft: 30,
        paddingRight: 30,
    },
    textBetterAll: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:60,
        fontWeight:'bold',
        color:'#7b8235',
        paddingLeft: 40,
        paddingRight: 30,
    },

    smallText: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:20,
        color:'#B2C248',
        paddingTop:80,
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
    button:{
        width:300,
        height: 50,
        backgroundColor:"#CDDA7E",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:30,
        marginTop:15,
        //marginBottom:10
    },
    buttonText:{
        fontFamily:'Mulish-Regular',
        color: '#eceece',
        fontSize: 18,
    },
    buttonInfoText:{
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:18,
        color:'#eceece',
        paddingTop:50,
        paddingLeft: 5,
        paddingRight: 5,
    },
});
