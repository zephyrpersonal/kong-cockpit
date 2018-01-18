import React, { Component } from 'react'
import client from '../apis/client'
import { red } from 'material-ui/colors'
import ActionDelete from 'material-ui-icons/Delete'
import ActionEdit from 'material-ui-icons/Edit'
import styled from 'styled-components'

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
  padding: 10px;
`
const Td = styled.td`
  width: ${props => props.width || 'auto'};
  text-align: ${props => props.align || 'left'};
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
`
const Tr = styled.tr`
  &:hover {
    background: rgba(25, 25, 25, 0.1);
    ${Td} {
      color: #fff;
    }
  }
`
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
                  <ActionEdit color='primary' />
                  <ActionDelete color='error' />
                </Td>
              </Tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default ApisView
