import React, { Component } from 'react'
import styled from 'styled-components'
import AccountCircle from 'material-ui-icons/AccountCircle'

const AppHeaderStyle = styled.nav`
  font-size: 14px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid #183e46; */
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
          <AccountCircle />
        </UserPanel>
      </AppHeaderStyle>
    )
  }
}

export default AppHeader
