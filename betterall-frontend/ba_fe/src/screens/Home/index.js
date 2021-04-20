/*
* This is only for debugging purposes. Will be deleted later.
* */
import {View, Button} from 'react-native';
import React from 'react';
import {Component} from 'react';
import RegisterScreen from '../RegisterScreen';
import "../../../assets/fonts/Mulish-Regular.ttf";


export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Button
          title="Click to go to the page."
          //Insert the page name that you are working on for debug purposes
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
        />
      </View>
    );
  }
}
