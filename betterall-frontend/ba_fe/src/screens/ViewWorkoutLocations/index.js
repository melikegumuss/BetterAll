
import React, { Fragment, Component } from 'react';
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
    TouchableOpacity
} from 'react-native';
//import { GOOGLE_API_KEY } from "react-native-dotenv";
import MapView from "react-native-maps";

export default class ViewWorkoutLocations extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <View>
                <ScrollView >
                    <SafeAreaView>
                         <View>
                             <MapView
                                 //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                 style={styles.map}
                                 region={{
                                     latitude: 37.78825,
                                     longitude: -122.4324,
                                     latitudeDelta: 0.015,
                                     longitudeDelta: 0.0121,
                                 }}
                             >
                             </MapView>

                         </View>
                    </SafeAreaView>
                </ScrollView >
            </View>
        );
    }
};

const styles = StyleSheet.create({


});

