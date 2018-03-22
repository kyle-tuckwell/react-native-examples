/**
 * react-navigation DrawerNavigator Example using Icons
 */

import React from 'react'
import { Image, Button, View, StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: <FAIcon name='home' size={25} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
       </View>
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: <MIcon name='notifications' size={25} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  }
});