var React = require("react-native")

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

  render: function () {
    return (
      <ListView style={styles.listStyle}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                <TouchableHighlight onPress={this.openTargetUser} underlayColor={'lightGray'}>
                  <View style={styles.cellContentView}>
                    <Text style={styles.userName}>{rowData.name}</Text>
                  </View>
                </TouchableHighlight>
     }
      />
    );
  },

  openTargetUser: function () {
    const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator) {
      navigator.push({
        name: 'BuildListComponent',
        component: BuildListComponent,
      })
    }
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
  cellContentView: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderColor: '#cccc3c',
    borderBottomWidth: 0.5,
  },
})


module.exports = ListViewExample;