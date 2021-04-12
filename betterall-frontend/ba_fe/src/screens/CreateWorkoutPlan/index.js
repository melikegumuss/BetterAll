import React, {Component} from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import GainWeight from '../../../assets/images/gainWeight.png';
import GetFit from '../../../assets/images/getFit.png';
import GetStronger from '../../../assets/images/getStronger.png';
import LoseWeight from '../../../assets/images/loseWeight.png';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class CreateWorkoutPlan extends Component {
  state = {
    goal: '',
    text: '',
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Button title="Üzerinde çalıştığın sayfa." />
        <View>
          <Text>Please pick dietary restriction</Text>
          <Picker
            style={{
              width: 200,
            }}
            //selectedValue={(this.state && this.state.pickerValue) || 'a'}
            selectedValue={this.state.pickerValue}
            onValueChange={(value) => {
              if (this.state.pickerValue !== 0) {
                this.setState({pickerValue: value});
              }
            }}
            itemStyle={{color: 'white'}}>
            <Picker.Item label={'Vegan'} value={'a'} />
            <Picker.Item label={'Vegetarian'} value={'b'} />
            <Picker.Item label={'Pescatarian'} value={'c'} />
            <Picker.Item label={'Flexitarian'} value={'d'} />
            <Picker.Item label={'Macrobiotic'} value={'e'} />
          </Picker>
        </View>
        <Image source={Vegan} style={styles.image} />
        */}

        <SafeAreaView>
          <ScrollView>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </Text>
            <View style={styles.column}>
              <Text style={{fontSize: 20, paddingBottom: 10}}>
                Diet Goal{' '}
              </Text>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}>
                  <View>
                    <Image source={GainWeight} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={this.onPress}>
                  <View>
                    <Image source={LoseWeight} style={styles.image} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}>
                  <View>
                    <Image source={GetFit} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}>
                  <View>
                    <Image source={GetStronger} style={styles.image} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput>Add Diseases</TextInput>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to add diseases!"
              /*onChangeText={(e) => {
                let a = this.state.text;
                a = e.target.value;
                this.setState(a);
              }}
              defaultValue={this.state.text}*/
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    //paddingLeft: 10,
    //paddingRight: 10,
    justifyContent: 'center',
  },
  image: {
    //flex: 1,
    width: 170,
    height: 170,
    //resizeMode: 'contain',
    //justifyContent: 'space-evenly',
    //backgroundColor: 'black',
    //marginRight:50,
  },

  buttonStyle: {
    //flex: 1,
    width: 170,
    height: 170,
    resizeMode: 'contain',
    //backgroundColor: 'red',
  },
  /*column: {
      flex: 1,
      flexDirection: 'column',
    },*/
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    //resizeMode: 'contain',
    marginBottom: 10,
  },
});
