/*
 * @Author: linjian
 * @Date: 2020-01-09 16:19:22
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
const utils = {
    getDate: () => {
        const date = new Date();
        let day =  date.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        return date.getFullYear() + '' + (date.getMonth() + 1) + day;
    }
}

module.exports = utils;