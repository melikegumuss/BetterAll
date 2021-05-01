import React, {Component} from 'react';
import {View, Text, Alert, Modal, ImageBackground} from 'react-native';
import GainWeight from '../../../assets/images/gainWeight.png';
import GetFit from '../../../assets/images/getFit.png';
import GetStronger from '../../../assets/images/getStronger.png';
import LoseWeight from '../../../assets/images/loseWeight.png';
import Slider from "react-native-smooth-slider";
import { List } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Tags from "react-native-tags";
import LinearGradient from "react-native-linear-gradient";

export default class CreateWorkoutPlan extends Component {
  state = {
    goal: '',
    text: '',
    value: 0.2,
    modalVisible: false,
  };

  constructor() {
    super();
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>

        <SafeAreaView>
          <View style={styles.centeredView}>

          <Text style={{marginTop: 20,marginRight: 20,marginLeft: 20}}>List of Workout Plans</Text>

          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("You meal plan has not been created.");
                this.setModalVisible(!modalVisible);
              }}
          >
              <View style={styles.modalView}>

                <ScrollView>
                <Text style={styles.titleStyle}>
                  Weakest muscle group
                </Text>

                <ScrollView horizontal={true}>
                  <Tags createTagOnReturn
                        initialText="monkey"
                        textInputProps={{
                          placeholder: "Any type of animal"
                        }}
                        initialTags={["dog", "cat", "chicken"]}
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                          console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                    //createTagOnString={["\n"]}
                        containerStyle={{ justifyContent: "center" }}
                        inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                          <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                            <Text style={styles.tagTextStyle}>💪 {tag}</Text>
                          </TouchableOpacity>
                        )}
                  />
                </ScrollView>
                <Text style={styles.titleStyle}>
                  Strongest muscle group
                </Text>
                <ScrollView horizontal={true}>
                  <Tags createTagOnReturn
                        initialText="monkey"
                        textInputProps={{
                          placeholder: "Any type of animal"
                        }}
                        initialTags={["dog", "cat", "chicken"]}
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                          console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                    //createTagOnString={["\n"]}
                        containerStyle={{ justifyContent: "center" }}
                        inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                          <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                            <Text style={styles.tagTextStyle}>💪 {tag}</Text>
                          </TouchableOpacity>
                        )}
                  />
                </ScrollView>
                <Text style={styles.titleStyle}>
                  Injuries
                </Text>
                <ScrollView horizontal={true}>
                  <Tags createTagOnReturn
                        initialText="monkey"
                        textInputProps={{
                          placeholder: "Any type of animal"
                        }}
                        initialTags={["dog", "cat", "chicken"]}
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                          console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                    //createTagOnString={["\n"]}
                        containerStyle={{ justifyContent: "center" }}
                        inputStyle={{ backgroundColor: '#eceece', borderRadius: 100, color: '#9cb3d3'}}
                        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                          <TouchableOpacity key={`${tag}-${index}`} onPress={onPress} style={styles.tagTouchable}>
                            <Text style={styles.tagTextStyle}>🤕 {tag}</Text>
                          </TouchableOpacity>
                        )}
                  />
                </ScrollView>
                  <Text style={styles.titleStyle}>
                    Fitness Level: {' '}
                      {Math.floor((this.state.value*10)/2)}
                  </Text>

                  <Slider
                    thumbTintColor={'#9cb3d3'}
                    minimumTrackTintColor={'#9cb3d3'}
                    step={0.2}
                    //moveVelocityThreshold={0.1}
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                    value={this.state.value}
                    useNativeDriver={true}
                    onValueChange={value => {
                      clearTimeout(this.sliderTimeoutId)
                      this.sliderTimeoutId = setTimeout(() => {
                        this.setState({value})
                      }, 100)
                    }}
                    // Slider moves too fast with this value of onValueChange
                    //onValueChange={value => this.setState({ value })}
                  />

                  <View style={styles.column}>
                    <Text style={styles.titleStyle}>
                      Diet Goal
                    </Text>
                    <View style={styles.row}>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <View>
                          <Image source={GainWeight} style={styles.image2} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={this.onPress}>
                        <View>
                          <Image source={LoseWeight} style={styles.image2} />
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <View>
                          <Image source={GetFit} style={styles.image2} />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}>
                        <View>
                          <Image source={GetStronger} style={styles.image2} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                </ScrollView>

                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>GET YOUR WORKOUT PLAN!</Text>
                </TouchableOpacity>
              </View>

          </Modal>

          <TouchableOpacity
              style={styles.planButton}
              onPress={() => this.setModalVisible(true)}>
            <ImageBackground source={require("../../../assets/images/workoutPlan.png")}
                             style={styles.image}/>
          </TouchableOpacity>
      </View>
          <List.Item
              style={styles.listItemStyle}
              title="Workout Name"
              description="Description"
              left={props => <List.Icon {...props} icon='weight-lifter' />}
          />
          <List.Item
              style={styles.listItemStyle}
              title="Workout Name"
              description="Description"
              left={props => <List.Icon {...props} icon='weight-lifter' />}
          />
        </SafeAreaView>
        </LinearGradient>
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
    alignItems: 'stretch',
  },
  image2: {
    //flex: 1,
    width: 100,
    height: 120,
    //resizeMode: 'contain',
    //justifyContent: 'space-evenly',
    //backgroundColor: 'black',
    //marginRight:50,
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
    width: 70,
    height: 30,
    resizeMode: 'contain',
    backgroundColor: "#7685B3",
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
    fontSize: 26,
    //fontWeight: '700',
    color: "#3D4182",
  },
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: '#eceece',
    color: '#9cb3d3',
    shadowColor: '#9cb3d3',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#e9c033',
    borderColor: '#ffcc33',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
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
    marginBottom: 50,
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
  listItemStyle:{
    paddingLeft:45,
  },
});
