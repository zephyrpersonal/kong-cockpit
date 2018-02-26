import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

import Menus from '../const/menu'
import { UserAction } from './UserAction'
const { Header, Content, Sider, Footer } = Layout

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Layout>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '84px 16px 0', overflow: 'initial' }}>
            {this.props.children}
          </Content>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              textAlign: 'right',
              position: 'fixed',
              right: 0,
              width: '100%'
            }}
          >
            <UserAction style={{ marginRight: 10 }} />
          </Header>

          <Footer
            style={{
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '100%',
              background: '#fff'
            }}
          >
            123
          </Footer>
        </Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div className='logo' />
          <Menu theme='dark' mode='inline'>
            {Menus.map(menu => (
              <Menu.Item key={menu.name}>
                <NavLink to={menu.path}>
                  <Icon type={menu.icon} />
                  <span className='nav-text'>{menu.name}</span>
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </Layout>
    )
  }
}

export default App
