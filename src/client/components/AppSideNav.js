import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  CompareArrows,
  Dashboard,
  SettingsInputComponent
} from 'material-ui-icons'

const navs = [
  {
    name: 'DASHBOARD',
    path: '/',
    icon: <Dashboard />
  },
  {
    name: 'APIS',
    path: '/apis',
    icon: <CompareArrows />
  },
  {
    name: 'PLUGINS',
    path: '/plugins',
    icon: <SettingsInputComponent />
  }
]

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const NavItem = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #183e46;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  color: #ddd;
  transition: 0.5s ease;
`

const NavItemActived = {
  background: '#183e46',
  boxShadow: 'inset 1px 1px 10px 0 rgba(0, 0, 0, 0.1)'
}

class AppSideNav extends Component {
  render () {
    return (
      <NavBar>
        {navs.map(({ name, path, icon }) => {
          return (
            <NavLink
              key={name}
              to={path}
              activeStyle={NavItemActived}
              style={{ marginBottom: 10 }}
            >
              <NavItem>{icon}</NavItem>
            </NavLink>
          )
        })}
      </NavBar>
    )
  }
}

export default AppSideNav
