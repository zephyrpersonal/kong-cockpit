import React, { PureComponent } from 'react'
import {
  Form,
  Input,
  Select,
  Switch,
  Button,
  InputNumber,
  AutoComplete
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

export default Form.create()(
  class ApiDetailForm extends PureComponent {
    state = {}

    handleSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.props.form)
    }

    render () {
      const { form, api, onSubmit, ...props } = this.props
      const { getFieldDecorator } = form
      return (
        <Form {...props} onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label='Name'>
            {getFieldDecorator('name', { initialValue: api.name })(
              <Input type='text' />
            )}
          </FormItem>

          <FormItem {...formItemLayout} label='Hosts'>
            {getFieldDecorator('hosts', {
              initialValue: api.hosts
            })(<Select mode='tags' style={{ width: '100%' }} />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Uris'>
            {getFieldDecorator('uris', { initialValue: api.uris })(
              <Select mode='tags' style={{ width: '100%' }} />
            )}
          </FormItem>

          <FormItem {...formItemLayout} label='Methods'>
            {getFieldDecorator('methods', {
              initialValue: api.methods
            })(
              <Select mode='multiple' style={{ width: '100%' }}>
                {['GET', 'POST', 'DELETE', 'PUT', 'OPTION'].map(m => (
                  <Option key={m}>{m}</Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label='Upstream URL'>
            {getFieldDecorator('upstream_url', {
              initialValue: api.upstream_url
            })(<Input type='text' />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Strip Uri'>
            {getFieldDecorator('strip_uri', {
              valuePropName: 'checked',
              initialValue: api.strip_uri
            })(<Switch />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Preserve Host'>
            {getFieldDecorator('preserve_host', {
              valuePropName: 'checked',
              initialValue: api.preserve_host
            })(<Switch />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Retries'>
            {getFieldDecorator('retries', {
              initialValue: api.retries
            })(<InputNumber />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Upstream connect timeout'>
            {getFieldDecorator('upstream_connect_timeout', {
              initialValue: api.upstream_connect_timeout
            })(<InputNumber />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Upstream send timeout'>
            {getFieldDecorator('upstream_send_timeout', {
              initialValue: api.upstream_send_timeout
            })(<InputNumber />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Upstream read timeout'>
            {getFieldDecorator('upstream_read_timeout', {
              initialValue: api.upstream_read_timeout
            })(<InputNumber />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Https only'>
            {getFieldDecorator('https_only', {
              valuePropName: 'checked',
              initialValue: api.https_only
            })(<Switch />)}
          </FormItem>

          <FormItem {...formItemLayout} label='Http if terminated'>
            {getFieldDecorator('http_if_terminated', {
              valuePropName: 'checked',
              initialValue: api.http_if_terminated
            })(<Switch />)}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </FormItem>
        </Form>
      )
    }
  }
)
