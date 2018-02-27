import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { isNumber, isBoolean } from 'lodash'
import client from '../apis/client'

const FormItem = Form.Item

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

export default Form.create()(
  class PluginDetailForm extends PureComponent {
    state = {
      plugin: {
        config: {}
      }
    }

    componentWillMount () {
      const { id } = this.props
      if (id) {
        client
          .get(`/plugins/${this.props.id}`)
          .then(plugin => this.setState({ plugin }))
      }
    }

    generateInput = val => {
      if (Array.isArray(val)) {
        return <Select mode='tags' />
      } else if (isNumber(val)) {
        return <InputNumber />
      } else if (isBoolean(val)) {
        return <Switch />
      } else {
        return <Input type='text' />
      }
    }

    render () {
      const { form } = this.props
      const { plugin } = this.state
      const { getFieldDecorator } = form
      return (
        <Form>
          {Object.keys(plugin.config).map(k => {
            const config = {
              initialValue: plugin.config[k]
            }
            if (isBoolean(plugin.config[k])) {
              config.valuePropName = 'checked'
            }
            return (
              <FormItem {...formItemLayout} label={k} key={k}>
                {getFieldDecorator(k, config)(
                  this.generateInput(plugin.config[k])
                )}
              </FormItem>
            )
          })}
        </Form>
      )
    }
  }
)
