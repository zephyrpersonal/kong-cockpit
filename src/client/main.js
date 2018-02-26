import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'modern-normalize/modern-normalize.css'
import 'antd/dist/antd.css'

import App from './components/App'

const renderApp = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp(App))
}
