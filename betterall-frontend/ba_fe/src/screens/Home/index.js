import * as React from 'react';
import {SafeAreaView} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('StartupScreen')}>
            <View>
              <Text>Click for startup screen</Text>
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
