//import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, ScrollView } from "react-native";
//import React, {useState} from 'react';

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
const screenWidth = Dimensions.get("window").width;

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}



export default class ViewProgressScreen extends React.Component {
  constructor() {
    super();
  }

  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }


  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.header}>ViewProgress</Text>

              <Text style={styles.titleStyle}>Weight</Text>
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
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#3D4182",
                  backgroundGradientTo: "#7685B3",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />


            <SelectMultiple
              items={fruits}
              renderLabel={renderLabel}
              selectedItems={this.state.selectedFruits}
              onSelectionsChange={this.onSelectionsChange} />
          </View>
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
    color:'#7B8235',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 40,
    borderBottomColor: '#7B8235',
    //borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  titleStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily:'Mulish-Regular',
    fontSize: 26,
    //fontWeight: '700',
    color: "#3D4182",
  },

});
