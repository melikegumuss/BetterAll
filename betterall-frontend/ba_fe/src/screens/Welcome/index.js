//import * as React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View, Button, ScrollView,FlatList } from "react-native";
import React, {useState} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import SunflowerBG from '../../../assets/images/wallpaperSunflower.png'
import LinearGradient from 'react-native-linear-gradient';
import "../../../assets/fonts/Mulish-Regular.ttf";


export default class Welcome extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container} >
                <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
                <View style={styles.centeredView}>
                <ScrollView>
                    <Text style={styles.textBetterAll}>BETTERALL</Text>
                    <Text style={styles.smallText}>Maintain your well-being with meal plans,
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
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: 150,
        flex: 1,
        alignItems:'center',
        //backgroundColor: '#cdda7e',
        //paddingLeft: 30,
        //paddingRight: 30,
    },
    baTextStyle:{
        color: '#eceece',
        fontFamily:'Mulish-Regular',
        fontSize: 45,
        //marginTop: 29.1,
    },
    imageStyle:{
        paddingTop: 250,
        flex: 1,
        width: 300,
        height: 150,
        paddingLeft: 100,
        paddingBottom: 100,
        //backgroundColor: '#cdda7e',
    },
    backgroundImage:{
        alignSelf: 'stretch',
    },
    textBetterAll: {
        //paddingTop: 150,
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:50,
        fontWeight:'bold',
        color:'#eceece',
        //paddingLeft: 150,
        //paddingRight: 150,
    },

    smallText: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:20,
        color:'#eceece',
        paddingTop:30,
        paddingBottom:40,
        paddingLeft: 5,
        paddingRight: 5,
    },
    smallTextSlogan: {
        fontFamily:'Mulish-Regular',
        textAlign:'center',
        fontSize:16,
        color:'#eceece',
        //paddingBottom:10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonText:{
        fontFamily:'Mulish-Regular',
        color: '#eceece',
        fontSize: 18,
    },
    whole: {
        alignItems:'center',
        paddingTop:150,
        marginLeft:50,
        marginRight:50,
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
        backgroundColor:"#2a2a72",
        borderRadius:26,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:60,
        marginTop:55,
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
    gradient: {
        flex: 1,
        paddingTop: 150,
        backgroundColor: '#cdda7e',
        //paddingLeft: 30,
        //paddingRight: 30,
    }
});
