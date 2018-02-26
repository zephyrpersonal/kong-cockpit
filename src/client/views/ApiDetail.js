import React, { PureComponent } from 'react'
import client from '../apis/client'

export default class ApiDetail extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      api: {}
    }
  }

  componentWillUpdate (...args) {
    console.log(args)
  }

  componentWillMount () {
    console.log(this.props)
    client.get(`/apis/${this.props.match.params.id}`).then(api => {
      this.setState({ api: api.data })
    })
  }

  render () {
    return <div>123</div>
  }
}
