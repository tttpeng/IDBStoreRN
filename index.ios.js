/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import BuildListComponent from './BuildListComponent'
const Routes = require('./Routes');
const Realm = require('realm');
class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    );
  },

};


class IDBStoreRN extends Component {
  //
  // render() {
  //   let realm = new Realm({
  //     schema: [{name: 'Dog', properties: {name: 'string'}}]
  //   });
  //
  //   realm.write(() => {
  //     realm.create('Dog', {name: 'Rex'});
  //   });
  //
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Count of Dogs in Realm: {realm.objects('Dog').length}
  //       </Text>
  //     </View>
  //   );
  // }

  render() {
    let defaultName = 'BuildListComponent';
    let defaultComponent = BuildListComponent;
    return (
      <View style={styles.base}>
      {Routes.navigator('trend')}
      </View>

  );

  }
}

var styles = StyleSheet.create({
  container:{
    top: 40,
  },
  base: {
    flex: 1,
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('IDBStoreRN', () => IDBStoreRN);
