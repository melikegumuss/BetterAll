import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GainWeight from '../../../assets/images/gainWeight.png';
import GetFit from '../../../assets/images/getFit.png';
import GetStronger from '../../../assets/images/getStronger.png';
import LoseWeight from '../../../assets/images/loseWeight.png';

import Slider from "react-native-smooth-slider";


import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Tags from "react-native-tags";
import Modal from "react-native-modal";

export default class CreateWorkoutPlan extends Component {
  state = {
    goal: '',
    text: '',
    value: 0.2,
    isModalVisible:false,
  };

  constructor() {
    super();
  }
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,

    });
    console.log(' lütfen ' + this.state.isModalVisible)
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={{marginTop: 20,marginRight: 20,marginLeft: 20}}>List of Workout Plans</Text>

          <View  style={{alignContent:"center",marginTop: 20}}>
            <TouchableOpacity onPress={this.toggleModal} style={styles.forModal}>
              <Text> I want to create a new workout plan</Text>
            </TouchableOpacity>
          </View>

          <Modal isVisible={this.state.isModalVisible}>
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
                      <Image source={GainWeight} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={this.onPress}>
                    <View>
                      <Image source={LoseWeight} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={GetFit} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <View>
                      <Image source={GetStronger} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View  style={{alignContent:"center",marginTop: 20}}>
                <TouchableOpacity onPress={this.toggleModal} style={styles.forCreate}>
                  <Text> Create !</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
         </Modal>
        </SafeAreaView>
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
  image: {
    //flex: 1,
    width: 170,
    height: 170,
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
});
