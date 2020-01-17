/*
 * @Author: linjian
 * @Date: 2020-01-02 19:34:07
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
import React from 'react'
import Head from 'next/head'
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav'
import Performance from '../utils-client/performance'
import css from './index.scss'
const request  = require('../utils-server/request')
const { Content } = Layout;

const Home = (props) => (
  <div>
    <Head>
      <title>港融科技有限公司</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Nav />
      <Content className={css.content}>
        <div className={css['page-content']}>
          <Row>
            <Col span={12}>
              <div className={css.userpic}>
                <img alt="logo" className={css.userpiclog} src="/photo.user.jpg"/>
                <ul className={css.userinfo}>
                  <li className={css.greeting}>
                    下午好，分公司1填报，祝你开心每一天
                  </li>
                  <li className={css.document}>
                    <span>测试部</span>
                    <b>
                      <i style={{padding: '0 10px'}}>|</i>
                    </b>
                    <span>上一次登录时间：2020-01-17 13:20:39</span>
                  </li>
                </ul>
              </div>
              
            </Col>
            <Col span={12}>
              <div className={css['task-info']}>
                <Row type="flex" justify="space-between">
                  <Col span={6} className={css.infoItem}>
                    <p>任务总数</p>
                    <p>5</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>待办总数</p>
                    <p>5</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>数据上报</p>
                    <p>13</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>发布审批</p>
                    <p>0</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
    <Performance/>
  
    <style jsx>{`
      
    `}</style>
  </div>
);

Home.getInitialProps = async () => {
  const taskList = await request.getApiSync('kingdom.kgrp.get_all_join_task_list','v1.0',{"taskName":""})
  return { stars: 5 ,taskList}
}


export default Home
