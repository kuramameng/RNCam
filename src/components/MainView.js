'use strict';
import React, { Component } from 'react';
import { CardSection, Button } from './common';
import { View, Dimensions } from 'react-native';
import Camera from 'react-native-camera';

class MainView extends Component {
  render(){
    const {
      previewWindow,
      toolbarMenu,
      filtersButton,
      snapButton,
      albumButton
    } = styles;

    return (
      <View style={{flex:1}}>
        <CardSection style={previewWindow}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
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
    flex: 9
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
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
