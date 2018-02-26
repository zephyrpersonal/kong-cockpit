import React, { Component } from 'react'
import { Table } from 'antd'
import client from '../apis/client'

class ApisView extends Component {
  state = {
    apis: [],
    apiEditShow: false
  }

  componentWillMount () {
    client.get('/apis').then(apis => {
      this.setState({ apis: this.formatApiData(apis.data) })
    })
  }

  formatTableColumn () {}

  formatApiData (data) {
    console.log(data)
    return data.map(d => ({
      key: d.id,
      ...d
    }))
  }

  render () {
    return (
      <div ref={container => (this.container = container)}>
        <Table dataSource={this.state.apis} />
      </div>
    )
  }
}

export default ApisView
