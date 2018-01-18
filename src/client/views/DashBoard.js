import React, { Component } from 'react'
import styled from 'styled-components'
import client from '../apis/client'

const DashBoardStyle = styled.section``
class DashBoard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: {},
      status: {}
    }
  }

  componentWillMount () {
    Promise.all([client.get('/'), client.get('/status')]).then(([info, status]) => {
      console.log(info, status)
      this.setState({ info })
    })
  }

  render () {
    return (
      <DashBoardStyle>
        <div>{this.state.info.version}</div>
        <div>{this.state.info.lua_version}</div>
      </DashBoardStyle>
    )
  }
}

export default DashBoard