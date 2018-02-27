import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Divider, Button, Popconfirm, message, Card } from 'antd'
import update from 'immutability-helper'

import client from '../apis/client'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}
class ApisView extends Component {
  state = {
    apis: [],
    paginationSetting: {
      pageSize: 50,
      showSizeChanger: true,
      pageSizeOptions: ['20', '50', '100']
    },
    tableColumns: [
      {
        dataIndex: 'name',
        title: 'name',
        render: (text, record) => (
          <Link to={`/apis/${record.id}`}>{record.name}</Link>
        )
      },
      {
        dataIndex: 'upstream_url',
        title: 'upstream'
      },
      {
        dataIndex: 'hosts',
        title: 'hosts'
      },
      {
        dataIndex: 'created_at',
        title: 'created at',
        sorter: (a, b) => a.created_at - b.created_at,
        render: (text, record) => {
          return new Date(record.created_at).toLocaleDateString()
        }
      },
      {
        dataIndex: 'action',
        title: 'action',
        width: 100,
        render: (text, record, index) => (
          <div>
            <Popconfirm
              placement='left'
              arrowPointAtCenter
              title='Are you sure delete this api?'
              onConfirm={this.onDelete(record.id, index)}
              okText='Yes'
              okType='danger'
              cancelText='No'
            >
              <Button
                icon='delete'
                type='danger'
                ghost
                shape='circle'
                size='small'
              />
            </Popconfirm>
            <Divider type='vertical' />
            <Button
              icon='copy'
              type='primary'
              ghost
              shape='circle'
              size='small'
            />
          </div>
        )
      }
    ],
    apiEditShow: false
  }

  componentWillMount () {
    client.get('/apis').then(apis => {
      this.setState({ apis: this.formatApiData(apis.data) })
    })
  }

  onDelete (id, index) {
    return () => {
      this.setState({
        apis: update(this.state.apis, { $splice: [[index, 1]] })
      })
      message.success(`${id} is deleted`)
    }
  }

  formatApiData (data) {
    console.log(data)
    return data.map(d => ({
      key: d.id,
      ...d
    }))
  }

  render () {
    const { apis, tableColumns, paginationSetting } = this.state
    return (
      <Card
        title='API LIST'
        extra={
          <Button type='primary' icon='plus'>
            ADD NEW API
          </Button>
        }
      >
        <Table
          rowSelection={rowSelection}
          dataSource={apis}
          columns={tableColumns}
          pagination={paginationSetting}
        />
      </Card>
    )
  }
}

export default ApisView
