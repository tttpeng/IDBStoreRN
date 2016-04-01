
import React, {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'


class UserCell extends React.Component {
  render() {
    const build = this.props.build;
    console.log(this.props.build);
    return (
      <View style={styles.cellContentView}>
        <Image
          source={{uri: 'http://o1wh05aeh.qnssl.com/image/view/app_icons/'+build.appIcon}}
          style={styles.iconStyle}
        />
        <View style={styles.rightContainer}>
        <Text style={styles.nameTextStyle}>{build.appName}</Text>
        <Text style={styles.versionStyle}>版本:{build.appVersion}, {(build.appFileSize/1024/1024).toFixed(1)}MB</Text>
        <View style={styles.tagStyle}>
        <Text style={styles.tagTextStyle}>iOS</Text>
        </View>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  cellContentView:{
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dedede',
    borderWidth: 0.5,
    height: 70,
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  iconStyle: {
    width : 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 14,
  },
  nameTextStyle:{
    color: 'black',
    fontWeight: '400',
    marginTop: 4,
    // fontSize: 17,
    marginLeft: 10,
    // backgroundColor:'green',
  },
  versionStyle:{
    marginTop: 10,
    marginLeft: 40,
    color: 'gray',
    // backgroundColor: 'blue',
  },
  tagTextStyle:{
    width : 18,
    height: 11,
    backfaceVisibility: 'visible',
    marginLeft: 4,
    marginTop: 1,
    color:'white',
    fontSize: 10,
  },
  tagStyle:{
    width : 24,
    height: 14,
    marginLeft: 10,
    backgroundColor: '#3DC4D8',
    marginTop:-16,
    borderColor: '#3DC4D8',
    borderRadius: 4,
  },
  rightContainer: {
    flex: 1,
    height: 50,
  },


});



module.exports = UserCell
