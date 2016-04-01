
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
          source={build.appIcon.length == 0 ? require('./images/default-icon.png'):{uri: 'http://o1wh05aeh.qnssl.com/image/view/app_icons/'+build.appIcon}}
          style={styles.iconStyle}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.nameTextStyle}>{build.appName}</Text>
          <View style={styles.versionContainer}>
            <View style={build.appType == 1 ? styles.tagStyle : styles.tagStyle2} >
            <Text style={build.appType == 1 ? styles.tagTextStyle : styles.tagTextStyle2}>{build.appType == 1 ? 'iOS' : 'Android'}</Text>
            </View>
            <Text style={styles.versionStyle}>版本:{build.appVersion}, {(build.appFileSize/1024/1024).toFixed(1)}MB</Text>
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
    marginTop: 3,
    // fontSize: 17,
    marginLeft: 10,
    // backgroundColor:'green',
  },
  versionStyle:{
    // marginTop: 10,
    marginLeft: 7,
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
  tagTextStyle2:{
    width : 38,
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
    borderColor: '#3DC4D8',
    borderRadius: 4,
  },
  tagStyle2:{
    width : 44,
    height: 14,
    marginLeft: 10,
    backgroundColor: '#61B262',
    borderColor: '#3DC4D8',
    borderRadius: 4,
  },
  rightContainer: {
    flex: 1,
    height: 50,
  },
  versionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

});



module.exports = UserCell
