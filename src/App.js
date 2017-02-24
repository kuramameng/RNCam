import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainView from './components/MainView';

class App extends Component {
  render() {
    return (
      <MainView></MainView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
