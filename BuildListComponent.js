var React = require("react-native")
import BuildService from './BuildService'
const Realm = require('realm');
import BuildCell from './BuildCell'

var {
  ListView,
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} = React;

import BuildListComponent from './BuildDetailComponent'


let realm = new Realm();


class ListViewExample extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
    };
  }

  componentDidMount() {
    BuildService.loadBuildList('http://www.pgyer.com/apiv1/user/listMyPublished',1)
      .then((value) => {
        let builds = realm.objects("Build");
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(builds),
        })
        console.log(builds);

      });
  }


  renderRow = (rowData, sectionID, rowID, highlightRow) => {    
    return (
      <BuildCell key={rowID} build={rowData} navigator={this.props.navigator}/>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    );
  }

  openTargetUser = () => {
    const {navigator} = this.props;
    this.props.navigator.push({id: 'detail'});
  }

  _genRows () {
    var dataBlob = [];
    for (var i = 0; i < 10; i++) {
      dataBlob.push({
        "name": "nick" + i,
        "age": i * i
      });
    }

    return dataBlob;
  }
}


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
