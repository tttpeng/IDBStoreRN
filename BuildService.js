const U_KEY = '8f9d205b1aaee0ff18353cc091c4908d';
const API_KEY = 'ca1cbd6c6323f55e3d2364287dcd49e6';
const API_PATH = 'http://www.pgyer.com/apiv1';

const Realm = require('realm');


const BuildSchema = {
  name: 'Build',
  primaryKey: 'appKey',
  properties: {
    appKey: 'string',
    appType: 'string',
    appFileSize: 'string',
    appName: 'string',
    appVersion: 'string',
    appVersionNo: 'string',
    appBuildVersion: 'string',
    appIdentifier: 'string',
    appIcon: 'string',
    appDescription: 'string',
    appUpdateDescription: 'string',
    appScreenshots: 'string',
    appCreated: 'string'
  }
};


let realm = new Realm({schema: [BuildSchema]});

class BuildService {


  apiPath() {
    return API_PATH;
  }
  loadBuildList(url,page) {
    return new Promise((resolve,reject) => {
      var data = new FormData();
      data.append('uKey', U_KEY);
      data.append('_api_key',API_KEY)
      data.append('page',page)
      fetch(url, {
        method: 'post',
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body:data
      })
        .then((response) => response.json())
        .then((responseData) => {
          realm.write(() => {
            console.log('write');
            if (page === 1) {
              console.log('delete');
              let builds = realm.objects('Build');
              realm.delete(builds);
            }
            for (var i = 0;i < responseData.data.list.length; i++) {
              console.log(responseData.data.list[i]);
              realm.create('Build',responseData.data.list[i]);
            }
            if (responseData.data.list.length == 20) {
              this.loadBuildList(url,page + 1);
            } else {
              resolve(true);
            }
          })
        })
        .done();
    });
  }


}
const SingleBDService = new BuildService();
module.exports = SingleBDService;
