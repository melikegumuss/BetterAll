//import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
//import DateTimePicker from '@react-native-community/datetimepicker';
import {Component} from 'react';
import LoginScreen from '../LoginScreen';
import "../../../assets/fonts/Mulish-Regular.ttf";


export default class RegisterScreen extends Component {
  constructor() {
    super();
  }
  state = {
    username: '',
    email: '',
    password: '',
    name: '',
    surname: '',
    height: '',
    weight: '',
    gender: '',
    //age: new Date(),
  };

  render() {
    /*const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'android');
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
    const showDatePicker = () => {
      showMode('date');
    };
    const showTimepicker = () => {
      showMode('time');
    };
    */
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <ScrollView>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="betterall@gmail.com"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({name: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Surname"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({surname: text})}
            />
          </View>

          {/*
          <View>
            <Button onPress={showDatePicker} title="Show date picker!" />
          </View>
          <View>
            show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )
          </View>*/}

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Height"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({height: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Weight"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({weight: text})}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Gender"
              placeholderTextColor="rgba(0,0,0,0.35)"
              onChangeText={(text) => this.setState({gender: text})}
            />
          </View>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.signupButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </ScrollView>
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
  header: {
    fontSize: 48,
    fontFamily:'Mulish-Regular',
    color: '#7B8235',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 40,
    borderBottomColor: '#7B8235',
    //borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  inputView: {
    fontFamily:'Mulish-Regular',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.09)',
    borderRadius: 25,
    height: 30,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    fontFamily:'Mulish-Regular',
    height: 50,
    color: 'white',
  },
  buttonText: {
    fontFamily:'Mulish-Regular',
    color: '#fff',
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#ffcc33',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  signupButtonText: {
    fontFamily:'Mulish-Regular',
    color: 'rgba(0,0,0,0.6)',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
