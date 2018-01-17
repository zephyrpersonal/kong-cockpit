import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

import App from './components/App'
import DashBoard from './components/DashBoard'

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App>
          <Route path='/' component={DashBoard} />
        </App>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App', renderApp)
}
