import React, { Component } from 'react'
import client from '../apis/client'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import ActionDelete from 'material-ui-icons/Delete'
import ActionEdit from 'material-ui-icons/Edit'
import styled from 'styled-components'
import confirmDialog from '../components/ConfirmDialog'

const Table = styled.table`
  text-align: center;
  flex: 1;
  width: 100%;
  table-layout: fixed;
  word-break: break-all;
  word-wrap: break-all;
`

const Th = styled.th`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.align || 'left'};
  padding: 5px 10px;
`
const Td = styled.td`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.align || 'left'};
  padding: 5px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  font-size: 12px;
`
const Tr = styled.tr`
  &:hover {
    background: #1c2237;
    ${Td} {
      color: #fff;
    }
  }
`
class ApisView extends Component {
  state = {
    apis: [],
    apiEditShow: false
  }

  deleteAPI = () => {
    confirmDialog(
      {
        size: 'md',
        title: 'Delete API'
      },
      <div>Will You Delete this API?</div>
    )
      .then(res => console.log('success'))
      .catch(e => console.log('cancel'))
  }

  componentWillMount () {
    client.get('/apis').then(apis => {
      this.setState({ apis: apis.data })
    })
  }
  render () {
    return (
      <div ref={container => (this.container = container)}>
        <Table>
          <thead>
            <Tr>
              <Th>name</Th>
              <Th>host</Th>
              <Th width='10%'>uris</Th>
              <Th>upstream</Th>
              <Th width='10%' align='right'>
                action
              </Th>
            </Tr>
          </thead>
          <tbody>
            {this.state.apis.map(api => {
              return (
                <Tr key={api.id}>
                  <Td>{api.name}</Td>
                  <Td>{api.hosts.join(',')}</Td>
                  <Td>/</Td>
                  <Td>{api.upstream_url}</Td>
                  <Td align='right'>
                    <IconButton
                      color='inherit'
                      onClick={() =>
                        this.setState({ apiEditShow: !this.state.apiEditShow })
                      }
                    >
                      <ActionEdit />
                    </IconButton>
                    <IconButton color='accent' onClick={this.deleteAPI}>
                      <ActionDelete />
                    </IconButton>
                  </Td>
                </Tr>
              )
            })}
          </tbody>
        </Table>
        <Drawer
          type='persistent'
          anchor='right'
          open={this.state.apiEditShow}
        />
      </div>
    )
  }
}

export default ApisView
