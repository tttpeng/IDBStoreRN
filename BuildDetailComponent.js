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

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳回去</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    marginTop: 20,
    flex:1,
    backgroundColor:'blue',
  },
});