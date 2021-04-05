import * as React from 'react';
import {SafeAreaView} from '@react-navigation/native';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import LoginScreen from '../LoginScreen';

export default class Home extends React.Component {

  constructor(props){
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <View>
              <Text>Click for register or login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <View>
              <Text>Click for login screen</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
