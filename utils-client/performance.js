/*
 * @Author: linjian
 * @Date: 2020-01-09 13:44:23
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
import React from 'react'

export default class Performance extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    // 性能检测代码
        window.addEventListener("load", function() {
        setTimeout(function() {
            const { performance } = window;
            if (performance) {
                let e = performance.getEntriesByType("navigation")[0];
                let r = 0;
                if (!e) {
                    e = performance.timing;
                    r = e.navigationStart;
                }
                var item = [{
                    key: "Redirect",
                    desc: "网页重定向的耗时",
                    value: e.redirectEnd - e.redirectStart
                }, {
                    key: "AppCache",
                    desc: "检查本地缓存的耗时",
                    value: e.domainLookupStart - e.fetchStart
                }, {
                    key: "DNS",
                    desc: "DNS查询的耗时",
                    value: e.domainLookupEnd - e.domainLookupStart
                }, {
                    key: "TCP",
                    desc: "TCP连接的耗时",
                    value: e.connectEnd - e.connectStart
                }, {
                    key: "Waiting(TTFB)",
                    desc: "从客户端发起请求到接收到响应的时间 / Time To First Byte",
                    value: e.responseStart - e.requestStart
                }, {
                    key: "Content Download",
                    desc: "下载服务端返回数据的时间",
                    value: e.responseEnd - e.responseStart
                }, {
                    key: "HTTP Total Time",
                    desc: "http请求总耗时",
                    value: e.responseEnd - e.requestStart
                }, {
                    key: "DOMContentLoaded",
                    desc: "dom加载完成的时间",
                    value: e.domContentLoadedEventEnd - r
                }, {
                    key: "Loaded",
                    desc: "页面load的总耗时",
                    value: e.loadEventEnd - r
                }];
            
                console && console.table && console.table(item);
                return item;
            }
            }, 0);
        });
    }
    render() {
        return <React.Fragment></React.Fragment>
    }
 }
