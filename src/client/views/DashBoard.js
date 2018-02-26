import React, { PureComponent } from 'react'
import { Card, Col, Row, Icon, Tag } from 'antd'
import styled from 'styled-components'

import { CONNECTION_TAB, NODE_INFO_TAG } from '../const/dashboard'
import client from '../apis/client'

const DashBoardStyle = styled.section``

const ConnectionCount = styled.span`
  font-size: 20px;
`

const CardIconTitle = ({ icon, title }) => (
  <span>
    <Icon type={icon} style={{ marginRight: 5 }} />
    {title}
  </span>
)

const InfoCard = ({ title, children, ...rest }) => (
  <Card
    title={<CardIconTitle icon='info-circle-o' title={title} />}
    bordered={false}
    {...rest}
  >
    {children}
  </Card>
)

const InfoRow = ({ left, right }) => (
  <Row>
    <Col span={12}>{left}</Col>
    <Col span={12} style={{ textAlign: 'right' }}>
      {right}
    </Col>
  </Row>
)

const NodeInfoCard = ({ info }) => (
  <InfoCard title='NodeInfo'>
    {NODE_INFO_TAG.map(tag => (
      <InfoRow left={tag} right={info[tag]} key={tag} />
    ))}
    <InfoRow left='admin_listen' right={info.configuration.admin_listen} />
  </InfoCard>
)

const DataBaseStatus = ({ isReachable }) => (
  <Tag color={isReachable ? 'green' : 'red'}>
    {isReachable ? 'Reachable' : 'UnReachable'}
  </Tag>
)

const DatabaseInfoCard = ({ info, status }) => (
  <InfoCard
    title='DataBaseInfo'
    extra={<DataBaseStatus isReachable={status.database.reachable} />}
  >
    <InfoRow left='DBM' right={info.configuration.database} />
    <InfoRow left='Database' right={info.configuration.pg_database} />
    <InfoRow left='Host' right={info.configuration.pg_host} />
    <InfoRow left='User' right={info.configuration.pg_user} />
    <InfoRow left='Port' right={info.configuration.pg_port} />
  </InfoCard>
)

class DashBoard extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      info: {
        configuration: {},
        plugins: {
          available_on_server: {},
          enabled_in_cluster: []
        }
      },
      status: {
        server: {},
        database: {}
      }
    }
  }

  isEnabledPlugin (plugName) {
    return !!~this.state.info.plugins.enabled_in_cluster.indexOf(plugName)
  }

  componentWillMount () {
    Promise.all([client.get('/'), client.get('/status')]).then(
      ([info, status]) => {
        this.setState({ info, status })
      }
    )
  }

  render () {
    const { status, info } = this.state
    const rowStyle = {
      marginBottom: 8
    }
    return (
      <DashBoardStyle>
        <Row gutter={16} style={rowStyle}>
          <Col span={24}>
            <Card
              title={<CardIconTitle icon='global' title='Connections' />}
              bordered={false}
              extra={`total request: ${status.server.total_requests}`}
            >
              <Row style={{ textAlign: 'center' }}>
                {CONNECTION_TAB.map(tab => (
                  <Col span={24 / CONNECTION_TAB.length} key={tab}>
                    {tab} <br />
                    <ConnectionCount>
                      {status.server[`connections_${tab}`]}
                    </ConnectionCount>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={rowStyle}>
          <Col span={8}>
            <NodeInfoCard info={info} />
          </Col>
          <Col span={8}>
            <Card title='Card title' bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <DatabaseInfoCard info={info} status={status} />
          </Col>
        </Row>
        <Row gutter={16} style={rowStyle}>
          <Col span={24}>
            <Card
              title={<CardIconTitle icon='usb' title='Plugins' />}
              bordered={false}
            >
              {Object.keys(info.plugins.available_on_server).map(plugin => (
                <Tag
                  key={plugin}
                  color={this.isEnabledPlugin(plugin) ? 'green' : ''}
                >
                  {plugin}
                </Tag>
              ))}
            </Card>
          </Col>
        </Row>
      </DashBoardStyle>
    )
  }
}

export default DashBoard
