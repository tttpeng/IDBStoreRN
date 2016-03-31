var React = require("react-native")
import BuildService from './BuildService'
const Realm = require('realm');

var {
  ListView,
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} = React;

import BuildListComponent from './BuildDetailComponent'





var ListViewExample = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows()),
    }
  },



  componentDidMount() {
    BuildService.loadBuildList('http://www.pgyer.com/apiv1/user/listMyPublished',1)
      .then((value) => console.log(value));
  },

  render: function () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
                        <TouchableHighlight onPress={this.openTargetUser} underlayColor={'#8C8C8C'}>
                          <View style={styles.cellContentView}>
                            <Text style={styles.userName}>{rowData.appName}</Text>
                          </View>
                        </TouchableHighlight>
                          }/>
    );
  },

  openTargetUser: function () {
    const {navigator} = this.props;
    this.props.navigator.push({id: 'detail'});
  },

  _genRows: function ():Array<string> {
    var dataBlob = [];
    for (var i = 0; i < 10; i++) {
      dataBlob.push({
        "name": "nick" + i,
        "age": i * i
      });
    }

    return dataBlob;
  }
})


var styles = StyleSheet.create({
  listStyle: {
    top: 20,
  },
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: 'white',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  cellContentView: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderColor: '#cccc3c',
    borderBottomWidth: 0.5,
  },
})


module.exports = ListViewExample;