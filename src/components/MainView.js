import React, { Component } from 'react';
import { CardSection } from './common';
import { StyleSheet, View, Text } from 'react-native';

class MainView extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <CardSection style={styles.previewWindow}>
          <Text>test</Text>
        </CardSection>
        <CardSection style={styles.toolbarMenu}>
        </CardSection>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  previewWindow: {
    flex: 9,
    backgroundColor: 'skyblue'
  },
  toolbarMenu: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
});

export default MainView;
