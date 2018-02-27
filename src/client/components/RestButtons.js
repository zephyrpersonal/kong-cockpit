import React from 'react'
import { Popconfirm, Button } from 'antd'

export const DeleteButton = ({ confirmText, onDelete }) => (
  <Popconfirm
    placement='left'
    arrowPointAtCenter
    title={confirmText}
    onConfirm={onDelete}
    okText='Yes'
    okType='danger'
    cancelText='No'
  >
    <Button icon='delete' type='danger' ghost shape='circle' size='small' />
  </Popconfirm>
)
