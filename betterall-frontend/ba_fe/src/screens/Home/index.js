/*
* This is only for debugging purposes. Will be deleted later.
* */
import {View, Button, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Component} from 'react';
import RegisterScreen from '../RegisterScreen';
import "../../../assets/fonts/Mulish-Regular.ttf";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {locations} from '../data/data';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.height,
    width: Dimensions.width,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 24.83073230,
          longitude: 67.10113298,
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
