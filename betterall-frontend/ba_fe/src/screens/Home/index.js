/*
* This is only for debugging purposes. Will be deleted later.
* */
import {View, Button, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Component} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
//import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapView, {Marker} from 'react-native-maps';
import {locations} from '../data/data';
import RNGooglePlaces from 'react-native-google-places';
import Geolocation from 'react-native-geolocation-service';
/*
const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO*/
/*
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
});*/

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});
/*
const styles = StyleSheet.create({
  container: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    height : SCREEN_HEIGHT,
    width : SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});*/
type Props = {};
export default class Home extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    }
  }

  componentDidMount(){

    this.watchId = Geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        this.setState({error: error.message})
      },
      {enableHighAccuracy: false, timeout:1, maximumAge: 1, distanceFilter: 1}
    )
  }
  /*constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    }
  }
  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({initialPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: false, timeout: 15000});
  }*/

  /*renderScreen = () => {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialPosition}/>
      </View>
    );
}*/

  /*
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
  }*/

  render() {
    let myCoordinate = { latitude: 39.9248, longitude: 32.8368}
    let myLocation = {latitude: this.state.latitude, longitude: this.state.longitude}
    let initialRegion = {
      latitude: myLocation.latitude,
      longitude: myLocation.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion = {initialRegion}>
          <Marker coordinate={ myCoordinate} />
          <Marker pinColor={'green'} coordinate={myLocation}/>
        </MapView>
      </View>
      //this.renderScreen()
      /*<View style={styles.container}>

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
    </View>*/
    );
  }
}
