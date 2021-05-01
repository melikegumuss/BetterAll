//import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, ScrollView } from "react-native";

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const screenWidth = Dimensions.get("window").width;





export default class ViewProgressScreen extends React.Component {
  constructor() {
    super();
  }



  render() {
    return (
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
              <View style={styles.centeredView}>

              <Text style={styles.header}>My Progress</Text>

              <Text style={styles.titleStyle}>My Weight Loss Journey</Text>
            <LineChart
            data={{
                  labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [
                        65.5,
                        66.3,
                        67.2,
                        65.5,
                        67.7,
                        65.0,
                        66.4,
                        66.2,
                        66.4,
                        66.8,
                        66.3,
                        66.1,
                      ]
                    }
                  ]
                }
            }

                width={360}
                //width={Dimensions.get("window").width} // from react-native
                height={220}
                //yAxisLabel="$"
                xAxisSuffix="month"
                yAxisSuffix="kg"
                yAxisInterval={0.5} // optional, defaults to 1
                chartConfig={{
                  scrollableInfoOffset: 500,
                  backgroundGradientFrom: "#f39c00",
                  backgroundGradientTo: "#f191ac",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#2a2a72"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />

              </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDDA7E',
        paddingLeft: 30,
        paddingRight: 30,
    },
    header: {
        fontSize: 48,
        fontFamily:'Mulish-Regular',
        paddingBottom: 100,
        marginTop: -90,
        marginBottom: 10,
        //borderBottomColor: '#7B8235',
        //borderBottomColor: '#199187',
        //borderBottomWidth: 1,

        color: "#222b14",
        fontWeight: 'bold',
        paddingLeft: 10,

    },
    titleStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Mulish-Regular',
        fontSize: 26,
        fontWeight: "bold",
        color: "#fae6e7",
    },
    centeredView: {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    gradient: {
        flex: 1,
        paddingTop: 150,
        paddingLeft: 30,
        paddingRight: 30,
    },

});
