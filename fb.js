import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

export class FbScreen extends React.Component {
  render() {
    return (
      <Button color="orange" title="click me">
        {' '}
      </Button>
    );
  }
}

export default class FbScreen2 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 300 }}>
        <FbScreen />
      </View>
    );
  }
}
