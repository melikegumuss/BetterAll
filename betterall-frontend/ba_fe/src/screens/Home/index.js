import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

export default class Home extends Component {

  componentDidMount(){
    getLocationHandler()
  }
  state =  {

      focusedLocation: {
        latitude: 37.7900352,
        longitude: -122.4013726,
        latitudeDelta: 0.0122,
        longitudeDelta:
          Dimensions.get("window").width /
          Dimensions.get("window").height *
          0.0122
      },
      locationChosen: false
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });

  };

  getLocationHandler = () => {
    /*Geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            //latitude: pos.coords.latitude,
            //longitude: pos.coords.longitude
            latitude = JSON.stringify(pos.coords.latitude),
            longitude = JSON.stringify(pos.coords.longitude)
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
  err => {
    console.log(err);
    alert("Fetching the Position failed, please pick one manually!");
  }
  )*/
  Geolocation.getCurrentPosition(
    //Will give you the current location
    (position) => {
      //getting the Longitude from the location json
      const currentLongitude =
        JSON.stringify(position.coords.longitude);
  
      //getting the Latitude from the location json
      const currentLatitude =
        JSON.stringify(position.coords.latitude);
        
     }, (error) => alert(error.message), { 
       enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
     })
  }

  render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          region={!this.state.locationChosen ? this.state.focusedLocation : null}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLocationHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: 600
  },
  button: {
    margin: 8
  }
});