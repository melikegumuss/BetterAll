/*
* This is only for debugging purposes. Will be deleted later.
* */
import {View, Button, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Component} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {locations} from '../data/data';
import RNGooglePlaces from 'react-native-google-places';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //height: 400,
    //width: 250,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    //...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
  },
});

export default class Home extends Component {

  getCurrentLocation(){
    Geolocation.getCurrentPosition(info => console.log(info),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
		console.log(place);
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message),
    );  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={styles.container}>

      <TouchableOpacity
        //style={styles.button}
        onPress={() => this.getCurrentLocation()}
      >
        <Text style = {{marginTop:5,padding: 30}} >Pick a Place</Text>
      </TouchableOpacity>


      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: -14.29501,
          longitude:  23.44455,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {
          locations.map(marker =>(
            <Marker
              coordinate = {{latitude: marker.latitude,
                longitude: marker.longitude}}
                title = {marker.title}
            />
          ))
        }
      </MapView>
    </View>
    );
  }
}
