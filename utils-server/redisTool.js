/*
 * @Author: linjian
 * @Date: 2019-12-25 17:40:25
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
const Redis = require('ioredis')
const redisConfig = {
    port: process.env.REDISPORT,          // Redis port
    host: process.env.REDISHOST,   // Redis host
    prefix: process.env.REDISPREFIX, //存诸前缀
    ttl: process.env.REDISTTL,  //过期时间   
    family: process.env.REDISFAMILY,
    db: process.env.REDISDB,
    password: process.env.REDISPASSWORD
}

const redisTools= {
    connectRedis: () => {
        return new Redis(redisConfig)
    }
}

module.exports = redisTools;