const U_KEY = '8f9d205b1aaee0ff18353cc091c4908d';
const API_KEY = 'ca1cbd6c6323f55e3d2364287dcd49e6';
const API_PATH = 'http://www.pgyer.com/apiv1';


class BuildService {

  apiPath() {
    return API_PATH;
  }
  loadBuildList(url) {
    var data = new FormData();
    data.append('uKey', U_KEY);
    data.append('_api_key',API_KEY)
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:data
      // body: new FormData({
      //   ukey: U_KEY,
      //   _api_key: API_KEY,
      // })
    });
  }

}
const SingleBDService = new BuildService();
module.exports = SingleBDService;
