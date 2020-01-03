/*
 * @Author: linjian
 * @Date: 2020-01-03 16:19:49
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
const WithCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})


if(typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withBundleAnalyzer(withSourceMaps(withSass({
    ...WithCss({}),
    ...{
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
    }
})));