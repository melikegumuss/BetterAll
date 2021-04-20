/*
/!*
* This is only for debugging purposes. Will be deleted later.
* *!/
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
*/

import * as ImagePicker from "react-native-image-picker"
import React, { Fragment, Component } from 'react';
//import ImagePicker from 'react-native-image-picker';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    Dimensions,
    TouchableOpacity, PermissionsAndroid
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: ''
        }
    }


    launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });

    }








    render() {
        return (
            <View>

                <SafeAreaView>
                    <View style={styles.half_bottom}>
                        <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Gallery</Text>


                        <View>
                            <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                                <Text style={styles.btnText}>Pick From Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                                <Text style={styles.btnText}>Use Camera</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ImageSections}>
                            <View>
                                <Text  style={{textAlign:'center'}}>Selected Images will be there</Text>
                            </View>
                        </View>

                    </View>
                </SafeAreaView>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    half_bottom: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: Dimensions.get('screen').height - 20,
        width: Dimensions.get('screen').width
    },
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    images: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop:10
    },
    btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom:10
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight:'bold'
    }
});

