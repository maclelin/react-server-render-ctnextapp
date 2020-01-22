/*
 * @Author: linjian
 * @Date: 2020-01-02 19:34:07
 * @LastEditors  : linjian
 * @Description: file content
 * @email: linjian@szkingdom.com
 */
import React from 'react'
import Link from 'next/link'

import { Menu, Icon } from 'antd';
import { Layout } from 'antd';

import css from './nav.scss'

const { Header } = Layout;
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <>
    <Header className={css.headerstyle}>
      <div className={css.logo}>
        <img alt="logo" className="logo" src="/nxtImg/logo.png"/>
      </div>
      <div className={css.menuStyle}>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          className={css.menu}
          mode='horizontal'
          theme={`dark`}
        >
          <Menu.Item key="1">
            我的报表
          </Menu.Item>
          <Menu.Item key="2">
            领导驾驶舱
          </Menu.Item>
          <Menu.Item key="3">
            明细报表
          </Menu.Item>
          <Menu.Item key="4">
            任务监控
          </Menu.Item>
          <Menu.Item key="5">
            知识库
          </Menu.Item>
        </Menu>
        <Icon type="bell" style={{color: '#fff', padding: '0 10px'}}/>
        <img alt="user picture" className={css.userlogo} src="/nxtImg/photo.user.jpg"/>
        <label className={css.loginNameStyle}>分公司1填报</label>
      </div>
      
    </Header>
    <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        .headerstyle {
          display: flex;
          justify-content: space-between;
        }
        nav {
          text-align: center;
        }
        .logo {
          max-height: 30px;
          max-width: 208px;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </>
  
)

export default Nav
