import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, PermissionsAndroid, Alert, Platform, TouchableOpacity, Linking, Image, StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline, AnimatedRegion, Callout} from 'react-native-maps';
//import GetLocation from 'react-native-get-location';
import axios from 'axios';
import PlaceholderGym from '../../../assets/images/placeholder_gym.png';
import PlaceholderRestaurant from '../../../assets/images/placeholder_restaurant.png';
import PlaceholderGrocery from '../../../assets/images/placeholder_grocery.png';
import "../../../assets/fonts/Mulish-Regular.ttf";
import LinearGradient from 'react-native-linear-gradient';
export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
      restaurants: [],
      workoutLocations: [],
      groceryShops: [],
      displayRestaurants: false,
      displayGyms: false,
      displayGrocery: false
    };
  }
  async componentDidMount() {
/*
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
     .then((location) => {
       console.log(location);
     })
     .catch((error) => {
       const { code, message } = error;
       console.warn(code, message);
     });
*/

    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
      /*
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    );*/
  }

  async getWorkoutLocations(){
    axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
          Authorization: `Bearer ibWM5NPQja-8-ma41rw6cr-SSdAkFjzRei9DZEAyr-rdDlW50LGQYlf42uOobcGsW2OQZPyNJRenHEXub0aK8hVwTkTC8fYBuZKyMNi8o4vi6X8iTb2oxf0n2ryKYHYx`,
      },
      params: {
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          categories: 'gyms',
          sort_by: 'distance',
          //sort_by: 'rating',
          radius: 4000
      },
  })
  .then(response => {
    this.setState({workoutLocations: response.data.businesses})
    console.log(this.state.workoutLocations[0])
  })
  .catch(error => {
      console.log('DATA NOT RETURNED', error);
  });
  }

  async getGroceryShops(){
    axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
          Authorization: `Bearer ibWM5NPQja-8-ma41rw6cr-SSdAkFjzRei9DZEAyr-rdDlW50LGQYlf42uOobcGsW2OQZPyNJRenHEXub0aK8hVwTkTC8fYBuZKyMNi8o4vi6X8iTb2oxf0n2ryKYHYx`,
      },
      params: {
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          categories: 'grocery',
          sort_by: 'distance',
          limit: 10,
          //sort_by: 'rating',
          radius: 4000
      },
  })
  .then(response => {
    this.setState({groceryShops: response.data.businesses})
    console.log(this.state.groceryShops[0])
  })
  .catch(error => {
      console.log('DATA NOT RETURNED', error);
  });
  }

  async getData(){
      axios.get('https://api.yelp.com/v3/businesses/search', {
          headers: {
              Authorization: `Bearer ibWM5NPQja-8-ma41rw6cr-SSdAkFjzRei9DZEAyr-rdDlW50LGQYlf42uOobcGsW2OQZPyNJRenHEXub0aK8hVwTkTC8fYBuZKyMNi8o4vi6X8iTb2oxf0n2ryKYHYx`,
          },
          params: {
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              categories: 'restaurants',
              //sort_by: 'review_count',
              sort_by: 'distance',
              //term: 'chicken',
              //sort_by: 'rating',
              limit: 5,
              radius: 2000
          },
      })
      .then(response => {
        this.setState({restaurants: response.data.businesses})
        console.log(this.state.restaurants[0])
      })
      .catch(error => {
          console.log('DATA NOT RETURNED', error);
      });
  }
  restaurantMarkers = () => {
      return this.state.restaurants.map((restaurant) => <Marker
      key={restaurant.id}
      coordinate={{ latitude: restaurant.coordinates.latitude, longitude: restaurant.coordinates.longitude }}
      title={restaurant.name}
      description={restaurant.address1}
    >
      <Image source={PlaceholderRestaurant} style={{width: 40, height: 40}}/>
    </Marker >)
  }

  workoutLocationMarkers = () => {
    return this.state.workoutLocations.map((workoutLocation) => <Marker
      key={workoutLocation.id}
      coordinate={{ latitude: workoutLocation.coordinates.latitude, longitude: workoutLocation.coordinates.longitude }}
      title={workoutLocation.name}
      description={workoutLocation.address1}
    >
      <Image source={PlaceholderGym} style={{width: 40, height: 40}}/>
    </Marker >)
  }

  groceryShopMarkers = () => {
    return this.state.groceryShops.map((groceryShop) => <Marker
    key={groceryShop.id}
    coordinate={{ latitude: groceryShop.coordinates.latitude, longitude: groceryShop.coordinates.longitude }}
    title={groceryShop.name}
    description={groceryShop.address1}
  >
    <Image source={PlaceholderGrocery} style={{width: 40, height: 40}}/>
  </Marker >)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
            <View style={{backgroundColor:'#47657a', paddingBottom: 30,}}>
                <Text style={styles.mapTxt}>What is nearby?</Text>
            </View>

          <MapView
          provider={PROVIDER_GOOGLE}
          style={{height:570, overflow: 'hidden'}}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}/>
          <Polyline
            coordinates={this.state.coordinates}
            strokeColor="#bf8221"
            strokeColors={[
              '#bf8221',
              '#ffe066',
              '#ffe066',
              '#ffe066',
              '#ffe066',
            ]}
            strokeWidth={3}
          />
          {this.restaurantMarkers()}
          {this.workoutLocationMarkers()}
          {this.groceryShopMarkers()}
        </MapView>
            <View style ={styles.buttonGroup}>
                <TouchableOpacity
                    style={styles.restaurantButtonView}
                    onPress={() => { this.getData()}}>
                    <Text style = {styles.buttonTxt}>Restaurants!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.gymButtonView}
                    onPress={() => { this.getWorkoutLocations()}}>
                    <Text style = {styles.buttonTxt}>Gyms!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.groceryButtonView}
                    onPress={() => { this.getGroceryShops()}}>
                    <Text style={styles.buttonTxt}>Grocery Shops!</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
  },
  restaurantButtonView:{
    width:"30%",
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:10,
  },
  gymButtonView:{
    width:"30%",
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:10,
  },
  groceryButtonView:{
    width:"30%",
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:10,
  },
  buttonGroup:{
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#47657a',
    //flex: 1
  },
  buttonTxt:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    textAlign: 'center',
  },
    mapTxt:{
        fontFamily:'Mulish-Regular',
        color: "#ffc501",
        textAlign: 'center',
        fontSize: 26,
        justifyContent: 'center',
        marginTop: 30,
    },

})
