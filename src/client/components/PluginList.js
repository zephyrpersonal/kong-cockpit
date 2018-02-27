import React, { PureComponent } from 'react'
import { Table, Modal } from 'antd'
import { DeleteButton } from './RestButtons'
import PluginDetailForm from './PluginDetailForm'

export default class PluginList extends PureComponent {
  state = {
    showDetail: false,
    currentId: '',
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, record) => (
          <a onClick={() => this.showDetail(record.id)}>{text}</a>
        )
      },
      {
        title: 'Consumer',
        dataIndex: 'consumer_id',
        render: text => text || 'all'
      },
      {
        title: 'Created',
        dataIndex: 'created_at',
        sorter: (a, b) => a.created_at - b.created_at,
        render: text => new Date(text).toLocaleDateString()
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record, index) => (
          <DeleteButton
            onDelete={() => {
              console.log(record.id, index)
            }}
            confirmText='Do you confirm to delete this plugin?'
          />
        )
      }
    ]
  }

  hideDetail = () => {
    this.setState({
      showDetail: false
    })
  }

  showDetail = id => {
    this.setState({
      showDetail: true,
      currentId: id
    })
  }

  formattedPlugins = () =>
    this.props.plugins.map(plugin => ({
      key: plugin.id,
      ...plugin
    }))

  render () {
    const { showDetail, currentId } = this.state
    return (
      <section>
        <Table
          dataSource={this.formattedPlugins()}
          columns={this.state.columns}
        />
        <Modal
          visible={showDetail}
          width={800}
          destroyOnClose
          onCancel={this.hideDetail}
        >
          <PluginDetailForm id={currentId} />
        </Modal>
      </section>
    )
  }
}
