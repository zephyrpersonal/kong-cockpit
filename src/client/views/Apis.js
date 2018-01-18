import React, { Component } from 'react'
import client from '../apis/client'

class ApisView extends Component {
  constructor () {
    super()
    this.state = {
      apis: []
    }
  }

  componentWillMount () {
    client.get('/apis').then(apis => {
      this.setState({ apis: apis.data })
    })
  }
  render () {
    return (
      <div>
        {this.state.apis.map(api => {
          return <div key={api.id}>{api.name}</div>
        })}
      </div>
    )
  }
}

export default ApisView
