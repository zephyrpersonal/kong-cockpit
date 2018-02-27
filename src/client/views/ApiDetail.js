import React, { Component, Fragment } from 'react'
import { isObject } from 'lodash'
import styled from 'styled-components'
import { Card, Row, Col, Icon, Menu, Button } from 'antd'

import ApiDetailForm from '../components/ApiDetailForm'
import PluginList from '../components/PluginList'
import client from '../apis/client'

const FormItemDesc = styled.div`
  font-size: 12px;
  color: #ddd;
  line-height: 1.5;
`

export default class ApiDetail extends Component {
  constructor () {
    super()
    this.state = {
      api: {},
      plugins: [],
      currentTab: '1'
    }
  }

  componentWillMount () {
    this.fetchApiData(this.props.match.params.id).then(({ api, plugins }) => {
      this.setState({ api: this.formatApiObject(api), plugins })
    })
  }

  fetchApiData = async apiId => {
    const [api, plugins] = await Promise.all([
      client.get(`/apis/${apiId}`),
      client.get(`/apis/${apiId}/plugins`)
    ])
    return { api, plugins: plugins.data }
  }

  formatApiObject = api => {
    api.methods = isObject(api.methods) ? [] : api.methods
    return api
  }

  handleSubmit = form => {
    console.log(form.getFieldsValue())
  }

  renderPanel = () => {
    const { api, plugins, currentTab } = this.state
    switch (currentTab) {
      case '1':
        return <ApiDetailForm api={api} onSubmit={this.handleSubmit} />
      case '2':
        return (
          <section style={{ textAlign: 'right' }}>
            <Button type='primary' icon='plus' style={{ marginBottom: 8 }}>
              ADD NEW PLUGIN
            </Button>
            <PluginList plugins={plugins} />
          </section>
        )
      default:
        return <div>111</div>
    }
  }

  render () {
    const { history } = this.props
    const { currentTab } = this.state

    return (
      <Row gutter={16}>
        <Col span={24}>
          <Card
            title={
              <div>
                <Button
                  icon='arrow-left'
                  onClick={history.goBack}
                  shape='circle'
                  style={{ marginRight: 8 }}
                />
                API Info
              </div>
            }
          >
            <Menu
              style={{ marginBottom: 20 }}
              mode='horizontal'
              onClick={e => this.setState({ currentTab: e.key })}
              selectedKeys={[currentTab]}
            >
              <Menu.Item key='1'>
                <Icon type='info-circle-o' />API detail
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon type='fork' />Plugin
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon type='heart-o' />Health Check
              </Menu.Item>
            </Menu>
            {this.renderPanel()}
          </Card>
        </Col>
      </Row>
    )
  }
}
