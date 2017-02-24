'use strict';
import React, { Component } from 'react';
import { CardSection, Button } from './common';
import { StyleSheet, View, Text } from 'react-native';

class MainView extends Component {
  render(){
    const {previewWindow,toolbarMenu,filtersButton,snapButton,albumButton} = styles;

    return (
      <View style={{flex:1}}>
        <CardSection style={previewWindow}>
          <Text>test</Text>
        </CardSection>
        <CardSection style={toolbarMenu}>
          <Button style={filtersButton}>Filters</Button>
          <Button style={snapButton}>Snap</Button>
          <Button style={albumButton}>Album</Button>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  previewWindow: {
    flex: 9,
    backgroundColor: 'skyblue'
  },
  toolbarMenu: {
    flex: 1,
    backgroundColor: 'powderblue',
    flexDirection: 'row'
  },
  filtersButton: {
    flex: 3
  },
  snapButton: {
    flex: 3
  },
  albumButton: {
    flex: 3
  }
};

export default MainView;
