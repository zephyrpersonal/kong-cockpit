import React from 'react'
import { Button, Dropdown, Menu } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>123</Menu.Item>
  </Menu>
)

export const UserAction = props => (
  <div {...props}>
    <Dropdown overlay={menu} placement='bottomRight'>
      <Button icon='user'>Hello, Admin</Button>
    </Dropdown>
  </div>
)
