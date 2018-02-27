import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import Menus from '../const/menu'
import { UserAction } from './UserAction'

import DashBoard from '../views/DashBoard'
import ApisView from '../views/Apis'
import ApiDetailView from '../views/ApiDetail'
import PluginsView from '../views/Plugins'

const { Header, Content, Sider, Footer } = Layout

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: '84px 16px 84px', overflow: 'initial' }}>
              <Switch>
                <Route exact path='/' component={DashBoard} />
                <Route exact path='/dashboard' component={DashBoard} />
                <Route exact path='/apis' component={ApisView} />
                <Route exact path='/plugins' component={PluginsView} />
                <Route path='/apis/:id' component={ApiDetailView} />
              </Switch>
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
                height: 20,
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
            <Menu theme='dark' mode='inline' defaultOpenKeys={[Menus[0].name]}>
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
      </BrowserRouter>
    )
  }
}

export default App
