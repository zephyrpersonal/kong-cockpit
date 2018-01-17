import React, { Component } from 'react'
import styled from 'styled-components'
import client from '../apis/client'

const DashBoardStyle = styled.section``
class DashBoard extends Component {
  componentWillMount () {
    client.get('/').then(console.log)
  }

  render () {
    return <DashBoardStyle>this is dashboard</DashBoardStyle>
  }
}

export default DashBoard
