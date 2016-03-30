import React, {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import BuildListComponent from './BuildListComponent';

export default class SecondPageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <View style={styles.base}>
        <TouchableOpacity style={{marginTop : 100}}>
          <Text>点我跳回去</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    // marginTop: 200,
    flex:1,
    backgroundColor:'blue',
  },
});



module.exports = SecondPageComponent;