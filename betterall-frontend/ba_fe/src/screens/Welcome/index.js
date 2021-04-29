//import * as React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, Button, ScrollView,FlatList } from "react-native";
import React, {useState} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import SunflowerBG from '../../../assets/images/wallpaperSunflower.png'
export default class Welcome extends React.Component {
    constructor() {
        super();
    }

    state={
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.centeredView}>
                <ScrollView>
                    <ImageBackground source={SunflowerBG}  style={styles.container}/>

                    <Text style={styles.smallText}>Maintain your well-being with meal & workout plans,
                        see your progress and many more... </Text>
                    <Text style={styles.smallTextSlogan}>BetterAll in one app. </Text>

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        backgroundColor: '#cdda7e',
        paddingLeft: 30,
        paddingRight: 30,
    },
    backgroundImage:{
        alignSelf: 'stretch',
    },
    textBetterAll: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:60,
        fontWeight:'bold',
        color:'#7F8343',
        paddingLeft: 40,
        paddingRight: 30,
    },

    smallText: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:26,
        color:'#ECEECE',
        paddingTop:80,
        paddingBottom:40,
        paddingLeft: 5,
        paddingRight: 5,
    },
    smallTextSlogan: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:22,
        color:'#7F8343',
        //paddingBottom:10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonText:{
        fontFamily:'Mulish-Regular',
        color: '#222b14',
        fontSize: 18,
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
        height: 30,
        //backgroundColor:"#F7C916",
        borderRadius:26,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:30,
        marginTop:5,
        //marginBottom:10
    },
    buttonInfoText:{
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:18,
        color:'#DF6D26',
        paddingTop:50,
        paddingLeft: 5,
        paddingRight: 5,
    },
    centeredView: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 22
    },
});
