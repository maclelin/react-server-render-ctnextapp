/*
 * @Author: linjian
 * @Date: 2020-01-09 14:19:38
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
var path = require('path');

const utils = require('../uitls/utils');

const now = utils.getDate();

//错误日志输出完整路径
var errorLogPath = path.resolve(__dirname, "../logs/error/error" + now + ".txt");
 
//响应日志输出完整路径
var responseLogPath = path.resolve(__dirname, "../logs/response/response" + now + ".txt");

module.exports = {
    appenders: {
        errorLogger: { type: 'dateFile', filename: errorLogPath },
        resLogger: { type: 'dateFile', filename: responseLogPath },
        console: { type: 'console' }
      },
      categories: {
        errorLogger: {
            appenders: ['errorLogger'], 
            level: 'error', 
            "alwaysIncludePattern":true, 
            "pattern": "-yyyy-MM-dd-hh.log"
        },
        resLogger: {
            appenders: ['resLogger'], 
            level: 'all', 
            "alwaysIncludePattern":true, 
            "pattern": "-yyyy-MM-dd-hh.log"
        },
        another: { appenders: ['console'], level: 'trace' },
        default: { appenders: ['console', 'errorLogger'], level: 'trace' }
      }
}