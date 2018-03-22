/**
 * This view switches between the example views for this project
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DrawerNavigatorExample from './react-navigation/DrawerNavigatorExample';
import StackNavigatorExample from './react-navigation/StackNavigatorExample';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="StackNavigator Example"
          onPress={() => this.props.navigation.navigate('StackNavigator')}
        />
        <Button
          title="DrawerNavigator Example"
          onPress={() => this.props.navigation.navigate('DrawerNavigator')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SettingsScreen Screen</Text>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  StackNavigator: {
    screen: StackNavigatorExample,
  },
  DrawerNavigator: {
    screen: DrawerNavigatorExample,
  },
},{
  headerMode: 'none',
  initialRouteName: 'Home'
});