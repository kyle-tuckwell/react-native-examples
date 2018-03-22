/**
 * react-navigation StackNavigator Example using Icons
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Settings Screen"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});