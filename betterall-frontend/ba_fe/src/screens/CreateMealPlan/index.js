import React,{Component} from 'react';
import { useState } from 'react';
import Vegan from '../../../assets/images/vegan.png';
import { List } from 'react-native-paper';
import Flexitarian from '../../../assets/images/flexitarian.png';

import Vegetarian from '../../../assets/images/vegetarian.png';
import "../../../assets/fonts/Mulish-Regular.ttf";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import Tags from "react-native-tags";
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import LinearGradient from "react-native-linear-gradient";

export default class CreateMealPlan extends Component {
  state = {
    dietaryRestriction: '',
    modalVisible: false,
    calorie:'',
    carbsPerc:'',
    proteinPerc:'',
    fatPerc:'',
    omega3Perc:'',
    error:0.1,
    addDays:false,
    ignoreLock:false,
    repeat:null,
    kcalLimit: 0.50,
    maxNumOfServings:15,
    maxServingWeight:600,
    minServingWeight:100,
    breakfastDistribution:'',
    lunchDistribution:'',
    dinnerDistribution:'',
    snackDistribution:'',

  };

  constructor() {
    super();
  }

  suggestic = () => {
    fetch('https://production.suggestic.com/graphql',{
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Authorization': 'Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef',
        'sg-user': '3d719962-cca4-4a88-b7e4-402ef42e8cd2',
        'Accept': '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation {
                    profileRestrictionsUpdate(
                    restrictions: [
                      "UmVzdHJpY3Rpb246M2ZmZDQ1OGUtMjczZi00MTZmLWE5NjYtNmFkYzliYjQ3OWE1",
                      "UmVzdHJpY3Rpb246ODU1ZjkzZjYtODQzOC00MTIzLTk3YzktM2U2YzU2MzllZjli"
                    ]) {
                     success
                  }}`,
      })

    }).then(response=>response.json()).then(data=>{console.log(data);
    }).catch(err=>console.error(err));
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  handleText = (text) => {
    this.setState({ calorie: text });
    console.log('caloriecalorie',this.state.calorie)
  }
  handleCarb= (text) => {
    this.setState({ carbsPerc: text });
  }
  handleProtein= (text) => {
    this.setState({ proteinPerc: text });
  }
  handleFat= (text) => {
    this.setState({ fatPerc: text });
  }
  handleOmega= (text) => {
    this.setState({ omega3Perc: text });
  }
  handleError= (text) => {
    this.setState({ error: text });
  }
  kcalLimitFunction= (text) => {
    this.setState({ kcalLimit: text });
  }
  maxNumOfServingsFunction= (text) => {
    this.setState({ maxNumOfServings: text });
  }
  maxServingWeightFunction= (text) => {
    this.setState({ maxServingWeight: text });
  }
  minServingWeightFunction= (text) => {
    this.setState({ minServingWeight: text });
  }
  breakfastDistributionFunction= (text) => {
    this.setState({ breakfastDistribution: text });
  }
  lunchDistributionFunction= (text) => {
    this.setState({ lunchDistribution: text });
  }
  dinnerDistributionFunction= (text) => {
    this.setState({ dinnerDistribution: text });
  }
  snackDistributionFunction= (text) => {
    this.setState({ snackDistribution: text });
  }
  ignoreLockFunction= (text) => {
    this.setState({ ignoreLock: text });
  }
  repeatFunction= (text) => {
    this.setState({ repeat: text });
  }


  render() {
    const { modalVisible } = this.state;
    let data_allergy = [{
      value: 'allergy',
    }, {
      value: 'allergy',
    }, {
      value: 'allergy',
    }];
    let data = [{
      value: 'Vegan',
    }, {
      value: 'Vegan',
    }, {
      value: 'Vegan',
    }];

    let data_meal_time = [{
      value: 'BREAKFAST',
    }, {
      value: 'SNACK',
    }, {
      value: 'LUNCH',
    },{
      value: 'DINNER',
    }];




    return (
          <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
            <View style={styles.centeresdView}>
            <Text style={styles.tagTextStyle}>Today's Menu</Text>

            <List.Item style={styles.listItemStyle}
                title="Scrambled eggs"
              description="Breakfast"
                left={props => <List.Icon {...props} icon='food' />}
            />
            <List.Item style={styles.listItemStyle}
              title="Fried rice and caesar salad"
              description="Lunch"
              left={props => <List.Icon {...props} icon='food' />}
            />
            <List.Item style={styles.listItemStyle}
                       title="Steak and sauteed vegetables"
                       description="Dinner"
                       left={props => <List.Icon {...props} icon='food' />}
            />


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setModalVisible(!modalVisible);
                }}
            >

                <View style={styles.modalView}>

                  <ScrollView>
                    <Text style={styles.titleStyle}>
                      Allergies
                    </Text>
                    <Dropdown
                        icon='chevron-down'
                        iconColor='#E1E1E1'
                        label='Peanuts'
                        data={data_allergy}

                    />

                    <View style={styles.column}>
                      <Text style={styles.titleStyle}>
                        Vegan
                      </Text>

                      <Dropdown
                         icon='chevron-down'
                          iconColor='#E1E1E1'
                          label='List from Suggestic'
                          data={data}
                      />
                    </View>

                    <View style={styles.column}>
                      <Text style={styles.titleStyle}>
                        Meal Time Type
                      </Text>

                      <Dropdown
                          icon='chevron-down'
                          iconColor='#E1E1E1'
                          label='Meal Time Type'
                          data={data_meal_time}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Calories
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Total Calories per day!"
                          onChangeText={this.handleText}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Percent of Carbs
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Percent of Carbs!"
                          onChangeText={this.handleCarb}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Percent of Protein
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Percent of Protein!"
                          onChangeText={this.handleProtein}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Percent of Fat
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Percent of Fat!"
                          onChangeText={this.handleFat}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Percent of Omega 3
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Percent of Omega 3!"
                          onChangeText={this.handleOmega}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Margin of error
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Margin of error for calories!"
                          onChangeText={this.handleError}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Upper kcal limit
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Upper kcal limit per meal as %!"
                          onChangeText={this.kcalLimitFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Maximum number of servings
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Between 1 and 15 per meal!"
                          onChangeText={this.maxNumOfServingsFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Maximum serving weight
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="ın grams per meal!"
                          onChangeText={this.maxServingWeightFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Minimum serving weight
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="ın grams per meal!"
                          onChangeText={this.minServingWeightFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Breakfast Distribution
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="% of the daily calories goal that each breakfast covers!"
                          onChangeText={this.breakfastDistributionFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Lunch Distribution
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="% of the daily calories goal that each lunch covers!"
                          onChangeText={this.lunchDistributionFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Dinner Distribution
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="% of the daily calories goal that each dinner covers!"
                          onChangeText={this.dinnerDistributionFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Snack Distribution
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="% of the daily calories goal that each snack covers!"
                          onChangeText={this.snackDistributionFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Ignore Lock
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Allow generating a new meal plan any time!"
                          onChangeText={this.ignoreLockFunction}
                          //defaultValue={text}
                      />
                    </View>

                    <View>
                      <Text style={styles.titleStyle}>
                        Repeat
                      </Text>

                      <TextInput
                          style={{height: 40}}
                          placeholder="Create a new meal plan repeating the 7 dates after repeat!"
                          onChangeText={this.repeatFunction}
                          //defaultValue={text}
                      />
                    </View>







                  </ScrollView>

                  <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => this.setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>GET YOUR MEAL PLAN!</Text>
                  </TouchableOpacity>

              </View>
            </Modal>

            <TouchableOpacity
                style={styles.planButton}
                onPress={() => this.setModalVisible(true)}>
              <Text style={styles.planButtonText}>CREATE</Text>
            </TouchableOpacity>

          </View>
          </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    paddingLeft: 10,
    paddingRight: 10,
    //justifyContent: 'center',
  },
  listItemStyle:{
    //paddingRight: 120,
    paddingLeft: 40,
  },
  buttonStyle: {
    //flex: 1,
    width: 170,
    height: 170,
    resizeMode: 'contain',
    //backgroundColor: 'red',
  },
  tagTextStyle: {
    paddingTop: 100,
    paddingBottom:30,
    fontFamily: "Mulish-Regular",
    fontSize: 28,
    color: "#eceece",
    paddingLeft: 40,

  },
  titleStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily:'Mulish-Regular',
    fontSize: 23,
    //fontWeight: '700',
    color: "#7B8235",
  },
  forModal: {
    width: 250,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    marginRight: 8,
  },

  forCreate: {
    width: 100,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    marginRight: 8,
  },
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //backgroundColor: "red",
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#ffcc33",
  },
  buttonClose: {
    backgroundColor: "#ffcc33",
    width:250,
    alignItems:'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    //textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    paddingRight: 390,
    marginTop: -10,
    marginBottom: 150,
  },
  planButton:{
    marginTop: 60,
    paddingLeft: 100,
    marginBottom: 250,
    marginLeft:100,
    width:100,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",
  },
  planButtonText:{
    fontFamily:'Mulish-Regular',
    color:'rgba(0,0,0,0.6)',
  },
});
