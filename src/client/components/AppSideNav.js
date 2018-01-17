import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Icon } from '@blueprintjs/core'

const navs = [
  {
    name: 'DASHBOARD',
    path: '/'
  },
  {
    name: 'APIS',
    path: '/apis'
  },
  {
    name: 'PLUGINS',
    path: '/plugins'
  }
]

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`

const NavItem = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  color: #ddd;
`

const NavItemActived = {
  background: 'rgba(0,0,0,0.6)',
  boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.1)'
}

class AppSideNav extends Component {
  render () {
    return (
      <NavBar>
        {navs.map(({ name, path }) => {
          return (
            <NavLink key={name} to={path} activeStyle={NavItemActived}>
              <NavItem>
                <Icon iconName='grid' />
              </NavItem>
            </NavLink>
          )
        })}
      </NavBar>
    )
  }
}

export default AppSideNav
