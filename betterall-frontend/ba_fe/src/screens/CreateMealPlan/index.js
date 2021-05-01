import React,{Component} from 'react';
import { useState } from 'react';
import Vegan from '../../../assets/images/vegan.png';
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
  Picker
} from "react-native";
import Tags from "react-native-tags";
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import DropdownItem from "react-native-material-dropdown-v2-fixed/src/components/item";

export default class CreateMealPlan extends Component {
  state = {


  };

  constructor() {
    super();
    this.state={
      options:[],
      selectedRestriction:'',
      dietSelectedValue:'',
      modalVisible: false,
      calorie:2000,
      carbsPerc:0.45,
      proteinPerc:0.25,
      fatPerc:0.3,
      omega3Perc:0.09,
      error:0.5,
      addDays:false,
      ignoreLock:false,
      repeat:null,
      kcalLimit: 0.50,
      maxNumOfServings:15,
      maxServingWeight:600,
      minServingWeight:100,
      breakfastDistribution:0.1,
      lunchDistribution:0.1,
      dinnerDistribution:0.1,
      snackDistribution:0.1,
      selectedGoal:'',
      goal:[],

    }
  }

  generateNewPlan = () =>{
    console.log("generateNewPlan:", this.state.selectedRestriction,this.state.selectedGoal,
        this.state.dietSelectedValue, this.state.calorie,
        this.state.carbsPerc,
        this.state.proteinPerc,
        this.state.fatPerc,
        this.state.omega3Perc,
        this.state.error,
        this.state.kcalLimit,
        this.state.maxNumOfServings,
        this.state.maxServingWeight,
        this.state.minServingWeight,
       this.state.breakfastDistribution,
       this.state.lunchDistribution,
       this.state.snackDistribution,
       this.state.dinnerDistribution

       /* addDays:false,
        ignoreLock:false,
        repeat:null,*/

  )
  }

  getMealPlan = () =>{
    var myHeaders = new Headers();
    myHeaders.append("sg-user", "3d719962-cca4-4a88-b7e4-402ef42e8cd2");
    myHeaders.append("Authorization", "Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef");
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: `mutation {\r\n  profileRestrictionsUpdate(\r\n    restrictions: [\r\n            "${this.state.selectedRestriction}"\r\n    ]) {\r\n    success\r\n  }\r\n} `,
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    fetch("https://production.suggestic.com/graphql", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);
              var myHeaders = new Headers();
              myHeaders.append("sg-user", "3d719962-cca4-4a88-b7e4-402ef42e8cd2");
              myHeaders.append("Authorization", "Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef");
              myHeaders.append("Content-Type", "application/json");

              var graphql = JSON.stringify({
                query: `mutation {\r\n  profileMealPlanSettings (\r\n    calories: ${this.state.calorie}\r\n    carbsPerc: ${this.state.carbsPerc}\r\n    proteinPerc: ${this.state.proteinPerc}\r\n    fatPerc: ${this.state.fatPerc}\r\n    omega3Perc: ${this.state.omega3Perc}\r\n	  format: ${this.state.dietSelectedValue}\r\n	  error: ${this.state.error}\r\n  ) {\r\n      success\r\n  }\r\n}`,
                variables: {}
              })
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: graphql,
                redirect: 'follow'
              };

              fetch("https://production.suggestic.com/graphql", requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));
        }

        )
        .catch(error => console.log('error', error));
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
    this.setState({ calorie: +text });
    console.log('caloriecalorie',this.state.calorie)
  }
  handleCarb= (text) => {
    this.setState({ carbsPerc: +text });
  }
  handleProtein= (text) => {
    this.setState({ proteinPerc: +text });
  }
  handleFat= (text) => {
    this.setState({ fatPerc: +text });
  }
  handleOmega= (text) => {
    this.setState({ omega3Perc: +text });
  }
  handleError= (text) => {
    this.setState({ error: +text });
  }
  kcalLimitFunction= (text) => {
    this.setState({ kcalLimit: +text });
  }
  maxNumOfServingsFunction= (text) => {
    this.setState({ maxNumOfServings: +text });
  }
  maxServingWeightFunction= (text) => {
    this.setState({ maxServingWeight: +text });
  }
  minServingWeightFunction= (text) => {
    this.setState({ minServingWeight: +text });
  }
  breakfastDistributionFunction= (text) => {
    this.setState({ breakfastDistribution: +text });
  }
  lunchDistributionFunction= (text) => {
    this.setState({ lunchDistribution: +text });
  }
  dinnerDistributionFunction= (text) => {
    this.setState({ dinnerDistribution: +text });
  }
  snackDistributionFunction= (text) => {
    this.setState({ snackDistribution: +text });
  }
  ignoreLockFunction= (text) => {
    this.setState({ ignoreLock: text });
  }
  repeatFunction= (text) => {
    this.setState({ repeat: text });
  }

  getRestrictionData = () => {

    var myHeaders = new Headers();
    myHeaders.append("sg-user", "3d719962-cca4-4a88-b7e4-402ef42e8cd2");
    myHeaders.append("Authorization", "Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef");
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: "{\r\n  restrictions(first: 10) {\r\n    edges {\r\n      node {\r\n        id\r\n        name\r\n        subcategory\r\n        slugname\r\n        isOnProgram\r\n      }\r\n    }\r\n  }\r\n}",
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    fetch("https://production.suggestic.com/graphql", requestOptions)
        .then(response => response.json())
        .then(result => {console.log('result', result); this.setState({options:result.data.restrictions.edges})})
        .catch(error => console.log('error', error));

  }

  getMyGoal= () => {
    var myHeaders = new Headers();
    myHeaders.append("sg-user", "3d719962-cca4-4a88-b7e4-402ef42e8cd2");
    myHeaders.append("Authorization", "Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef");
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: "{\r\n  programs {\r\n    edges {\r\n      node {\r\n        id\r\n        databaseId\r\n        name\r\n        author\r\n      }\r\n    }\r\n  }\r\n}",
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    fetch("https://production.suggestic.com/graphql", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result); this.setState({goal:result.data.programs.edges})})
        .catch(error => console.log('error', error));
  }


  getMyMealPlan= () => {
    var myHeaders = new Headers();
    myHeaders.append("sg-user", "3d719962-cca4-4a88-b7e4-402ef42e8cd2");
    myHeaders.append("Authorization", "Token 4efbe99a39de42eb211ca1270cbe2a87ea482fef");
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: "{\r\n  mealPlan {\r\n    day\r\n    date(useDatetime: false)\r\n    calories\r\n    meals {\r\n      id\r\n      calories\r\n      meal\r\n      numOfServings\r\n      recipe {\r\n        name\r\n        numberOfServings\r\n        nutrientsPerServing {\r\n          calories\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    fetch("https://production.suggestic.com/graphql", requestOptions)
        .then(response => response.json())
        .then(result => console.log("EN SON",result.data.mealPlan[0].meals))
        .catch(error => console.log('error', error));
  }

  componentDidMount() {
    this.getRestrictionData();
    this.getMyGoal();
    this.getMealPlan();
    this.getMyMealPlan();

  }

  render() {
    const { modalVisible } = this.state;

    let data = [{
      value: 'Vegan',
    }, {
      value: 'Vegan',
    }, {
      value: 'Vegan',
    }];

    let data_meal_time = [{
      format:['BREAKFAST','SNACK','LUNCH','DINNER'],
      value: 'Breakfast-Snack-Lunch-Dinner',
    }, {
      format:['BREAKFAST','LUNCH','SNACK','DINNER'],
      value: 'Breakfast-Lunch-Snack-Dinner',
    }, {
      format:['BREAKFAST','LUNCH','DINNER'],
      value: 'Breakfast-Lunch-Dinner',
    }];

    let myRestrictions=this.state.options.map((option,index)=>{
      return(
          <Picker.Item label={option.node.name} value={option.node.id}></Picker.Item>
      )
    })

    let mealTimeType=data_meal_time.map((mealTime,index)=>{
      return(
          <Picker.Item label={mealTime.value} value={mealTime.format}></Picker.Item>
      )
    })

    let myGoal=this.state.goal.map((current_goal,index)=>{
      return(
          <Picker.Item label={current_goal.node.name} value={current_goal.node.id}></Picker.Item>
      )
    })



    return (
        <View style={styles.container}>
          <View style={styles.centeredView}>
            <Text style={{marginTop: 20,marginRight: 20,marginLeft: 20}}>List of Meal Plans</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.setModalVisible(!modalVisible);
                }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <ScrollView>


                    <View style={styles.column}>
                      <Text style={styles.titleStyle}>
                        Goal
                      </Text>

                      <Picker
                          style={{ height: 50, width: 150 }}
                          selectedValue={this.state.selectedGoal}
                          onValueChange={(value)=>this.setState({selectedGoal:value})}
                      >
                        {myGoal}

                      </Picker>
                    </View>

                    <View style={styles.column}>
                      <Text style={styles.titleStyle}>
                        Dietary Restriction
                      </Text>

                      <Picker
                          style={{ height: 50, width: 150 }}
                          selectedValue={this.state.selectedRestriction}
                          onValueChange={(value)=>this.setState({selectedRestriction:value})}
                      >
                        {myRestrictions}

                      </Picker>
                    </View>

                    <View style={styles.column}>
                      <Text style={styles.titleStyle}>
                        Meal Time Type
                      </Text>

                      <Picker
                          style={{ height: 50, width: 150 }}
                          selectedValue={this.state.dietSelectedValue}
                          onValueChange={(value)=>this.setState({dietSelectedValue:value})}
                      >
                        {mealTimeType}

                      </Picker>

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
                      onPress={() => {this.setModalVisible(!modalVisible),
                          this.generateNewPlan()
                      }
                      }
                  >
                    <Text style={styles.textStyle}>GET YOUR MEAL PLAN!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
                style={styles.planButton}
                onPress={() => this.setModalVisible(true)}>
              <ImageBackground source={require("../../../assets/images/mealPlan.png")}
                               style={styles.image}/>
            </TouchableOpacity>

          </View>
        </View>

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
  tagTouchable: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    backgroundColor: "#ffcc33",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  tagTextStyle: {
    fontFamily: "Mulish-Regular",
    color: "#eceece",
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
    marginTop: 22
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
    //alignItems: 'center',
    //resizeMode: 'contain'
  },
  planButton:{
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor:'rgba(0,0,0,0.6)',
    //backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
    marginBottom: 25,
  },
});
