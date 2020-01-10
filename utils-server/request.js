/*
 * @Author: linjian
 * @Date: 2020-01-09 14:09:16
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
const axios = require("axios").default;
//encryption加密参数
const encryption = {
  get16: function(a, v, p) {
    var pp = {};
    var _t = new Date().getTime() + "";
    var _p = JSON.stringify(p);
    pp._0x0111 = base.base64.encoder(_t);
    pp._0x1011 = base.base64.encoder(a);
    pp._0x1100 = base.base64.encoder(v);
    pp._0x1110 = base.base64.encoder(encodeURIComponent(_p));
    pp._0x1001 = md5
      .md5(pp._0x0111 + pp._0x1011 + pp._0x1100 + pp._0x1110)
      .toUpperCase();
    pp._0x1101 = base.base64.encoder("localhost");
    return pp;
  }, //get16
  getK: function(a, v, p) {
    //_params.._version .. _timestamp .. _api_name
    var pp = {};
    var _t = new Date().getTime() + "";
    var _p = JSON.stringify(p);
    pp.KInGDOM = base.base64.encoder(_t);
    pp.KINGdOM = base.base64.encoder(a);
    pp.KINGDoM = base.base64.encoder(v);
    pp.KiNGDOM = base.base64.encoder(encodeURIComponent(_p));
    pp.kINGDOM = md5
      .md5(pp.KiNGDOM + pp.KINGDoM + pp.KInGDOM + pp.KINGdOM)
      .toUpperCase();
    pp.KINgDOM = base.base64.encoder("localhost");
    pp.KINGDOm = base.base64.encoder("http");
    return pp;
  }, //getK
  getL: function(a, v, p) {
    var pp = {};
    var _t = new Date().getTime() + "";
    var _p = JSON.stringify(p);
    pp.css = base.base64.encoder(_t);
    pp.android = base.base64.encoder(a);
    pp.html = base.base64.encoder(v);
    pp.ios = base.base64.encoder(encodeURIComponent(_p));
    pp.js = md5.md5(pp.ios + pp.android + pp.css + pp.html).toUpperCase();
    pp.wp = base.base64.encoder("localhost");
    return pp;
  } //getL
};
function getAjaxParams(a, v, p) {
  if (process.env.TEST === "isTest") {
    const test_param = {};
    test_param.a = a;
    test_param.v = v;
    test_param.p = JSON.stringify(p);
    return test_param;
  } else {
    const random = Math.floor(Math.random() * 10) % 3;
    if (random == 0) {
      return encryption.get16(a, v, p);
    } else if (random == 1) {
      return encryption.getK(a, v, p);
    } else {
      return encryption.getL(a, v, p);
    }
  }
} //getAjaxParams

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.timeout = 2500;
// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
const request = {
  getApi: (api, version, params) => {
    const encryptionParams = getAjaxParams(api, version, params);
    return axios.post(process.env.proxy + '/api', encryptionParams);
  },
  getApiSync: async (api, version, params) => {
    const encryptionParams = getAjaxParams(api, version, params);
    const response = await axios.post(process.env.proxy + '/api', encryptionParams);
    const { data, status } = response;
    return { data, status };
  }
};

module.exports = request;
