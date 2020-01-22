/*
 * @Author: linjian
 * @Date: 2020-01-02 19:34:07
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Layout, Row, Col, Button, Input, Tabs, Badge, Icon } from 'antd';
import Nav from '../components/nav'
import Performance from '../utils-client/performance'
import css from './index.scss'
const request  = require('../utils-server/request')
const { Content } = Layout;
const { Search } = Input;
const { TabPane } = Tabs;


const Home = (props) => (
  <div>
    <Head>
      <title>港融科技有限公司</title>
      <link rel="icon" href="/nxtImg/favicon.ico" />
    </Head>
    <Layout>
      <Nav />
      <Content className={css.content}>
        <div className={css['page-content']}>
          <Row>
            <Col span={12}>
              <div className={css.userpic}>
                <img alt="logo" className={css.userpiclog} src="/nxtImg/photo.user.jpg"/>
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
                    <p className={css.infoNum}>5</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>待办总数</p>
                    <p className={css.infoNum}>5</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>数据上报</p>
                    <p className={css.infoNum}>13</p>
                  </Col>
                  <Col span={6} className={css.infoItem}>
                    <p>发布审批</p>
                    <p className={css.infoNum}>0</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className={css.addTask}>
            <Button className={css.addTaskBtn}>新增表格任务</Button>
            <Button>导入报送任务</Button>
          </div>
          <div className={css.border}>
          </div>
          <div className={css.search}>
            <label style={{'padding-top': '10px'}}>任务搜索：</label>
            <Search
              placeholder="请输入"
              enterButton="搜索"
              style={{ width: 400, height:20 }}
              size="default"
              onSearch={value => console.log(value)}
            />
          </div>
          <div>
            <Tabs defaultActiveKey="0" tabPosition={'top'}>
              {['我的待办', '所有任务', '我创建的', '我参与的'].map((item, i) => (
                <TabPane tab={item} key={i}>
                  <div className={css['task-container']}>
                    <Link href='/details'>
                      <>
                        <div className={css['task-title']}>申万测试</div>
                        <Badge count={25} className={css.badge}/>
                        <ul className={css['task-info']}>
                          <li className={css['task-item-info']}>创建人：分公司1填报</li>
                          <li className={css['task-item-info']}>报告期类型：日报</li>
                          <li className={css['task-item-info']}>完成时限：</li>
                          <li className={css['task-item-info']}>当前状态：上报中</li>
                          <li className={css['task-item-info']}>任务发布时间：2020-01-10   16:28:30</li>
                          <Icon type="delete" className={css.deleteBadge}/>
                        </ul>
                      </>
                      
                    </Link>
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </Content>
    </Layout>
    <Performance/>
  
    <style jsx>{`
      
    `}</style>
  </div>
);

Home.getInitialProps = async (ctx) => {
  const taskList = await request.getApiSync(ctx, 'kingdom.kgrp.get_all_join_task_list','v1.0',{})
  return { stars: 5 ,taskList}
}


export default Home
