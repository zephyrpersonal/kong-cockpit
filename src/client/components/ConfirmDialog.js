import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'

class ConfirmDialog extends PureComponent {
  state = {
    open: true
  }

  handleCancel = () => {
    this.setState({ open: false })
    this.props.reject && this.props.reject()
  }

  handleOk = () => {
    this.setState({ open: false })
    this.props.resolve && this.props.resolve()
  }

  handleExit = () => {
    ReactDOM.unmountComponentAtNode(this.props.node)
    document.body.removeChild(this.props.node)
  }

  render () {
    const { size, title, children, resolve, reject, ...others } = this.props
    return (
      <Dialog
        maxWidth={size}
        open={this.state.open}
        onExited={this.handleExit}
        {...others}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleOk} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const confirmDialog = (props, child = <div />) => {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement('div')
    ReactDOM.render(
      <ConfirmDialog resolve={resolve} reject={reject} node={dialog} {...props}>
        {child}
      </ConfirmDialog>,
      dialog
    )
    document.body.appendChild(dialog)
  })
}

export default confirmDialog
