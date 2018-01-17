import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Popover, Position } from '@blueprintjs/core'

const AppHeaderStyle = styled.nav`
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid #183e46;
  display: flex;
  flex-flow: row wrap;
`

const Title = styled.div`
  flex: 1 0;
`

const UserPanel = styled.div`
  flex: 0 1;
`

class AppHeader extends Component {
  render () {
    return (
      <AppHeaderStyle>
        <Title>KONG</Title>
        <UserPanel>
          <Popover
            position={Position.BOTTOM}
            target={
              <Icon iconName='user' iconSize={14}>
                admin
              </Icon>
            }
            content={<div>123</div>}
          />
        </UserPanel>
      </AppHeaderStyle>
    )
  }
}

export default AppHeader
