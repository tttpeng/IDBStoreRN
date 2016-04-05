const React = require('react-native');
const Platform = require('Platform');
const Colors = require('./Colors');
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const Icon = require('react-native-vector-icons/Ionicons');

const BuildListComponent = require('./BuildListComponent')
const BuildDetailComponent = require('./BuildDetailComponent')

const {
  Navigator,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  Text,
  TextInput,
  View,
  BackAndroid,
} = React;

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    // return (
    //   <TouchableOpacity
    //     onPress={() => navigator.pop()}
    //     style={styles.navBarLeftButton}>
    //     <Icon
    //       name='ios-arrow-back'
    //       size={30}
    //       style={{marginTop: 8}}
    //       color={Colors.blue}
    //     />
    //   </TouchableOpacity>
    // );
  },

  RightButton: function(route, navigator, index, navState) {
    // return (
    //   <TouchableOpacity
    //     onPress={() => navigator.push(newRandomRoute())}
    //     style={styles.navBarRightButton}>
    //     <Text style={[styles.navBarText, styles.navBarButtonText]}>
    //       Next
    //     </Text>
    //   </TouchableOpacity>
    // );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        产品
      </Text>
    );
  },

};
const routes = {
  navigator(initialRoute) {
    return (
      <Navigator
        debugOverlay={false}
        style={styles.appContainer}
        initialRoute={{id: initialRoute}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  },


  renderScene(route, navigator) {
    switch (route.id) {
      case 'trend':
        return <BuildListComponent navigator={navigator}/>;
      case 'detail':
        return <BuildDetailComponent navigator={navigator}/>;
    }
    return null;
  }
}

const styles = StyleSheet.create({
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
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    flex: 1,
    // width: 400,
    backgroundColor: 'white',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.5,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'black',
    // color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 11,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    width: 40,
    height: 40,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {

  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
  searchBar: {
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: ScreenWidth - 10,
    height: 35,
    // borderWidth: 1,
    // borderColor: Colors.borderColor,
    borderRadius: 4,
    margin: 5,
    backgroundColor: Colors.backGray,
  },
  searchIcon: {
    marginLeft: 3,
    marginRight: 3,
    width: 20,
    height: 20
  },
  textInput: {
    fontSize: 14,
    alignSelf: 'stretch',
    flex: 1,
    color: Colors.black,
  },
});

module.exports = routes;
