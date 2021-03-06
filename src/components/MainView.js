'use strict';
import React, { Component } from 'react';
import { CardSection, Button } from './common';
import { View, Dimensions, Text, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';

class MainView extends Component {
  render(){
    const {
      previewWindow,
      preview,
      toolbarMenu,
      filtersButton,
      capture,
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
            style={preview}
            onBarCodeRead={this._onBarCodeRead}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </CardSection>
        <CardSection style={toolbarMenu}>
          <Button style={filtersButton}>Filters</Button>
          <Button style={capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Button>
          <Button style={albumButton}>Album</Button>
        </CardSection>
      </View>
    )
  }

  _onBarCodeRead(e){
    console.log("Type: " + e.type + "\nData: " + e.data);
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  albumButton: {
    flex: 3
  }
};

export default MainView;
