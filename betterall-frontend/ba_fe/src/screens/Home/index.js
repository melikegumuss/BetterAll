/*
* This is only for debugging purposes. Will be deleted later.
* */
import {View, Button} from 'react-native';
import React from 'react';
import {Component} from 'react';
import RegisterScreen from '../RegisterScreen';
import CreateMealPlan from '../CreateMealPlan';

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Button
          title="Üzerinde çalıştığın sayfaya git."
          //Insert the page name that you are working on for debug purposes
          onPress={() => this.props.navigation.navigate('CreateMealPlan')}
        />
      </View>
    );
  }
}
