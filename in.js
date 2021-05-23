import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

export class InScreen extends React.Component {
  render() {
    return (
      <Button color="red" title="click me">
        {' '}
      </Button>
    );
  }
}

export default class InScreen2 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 300 }}>
        <FbScreen />
      </View>
    );
  }
}