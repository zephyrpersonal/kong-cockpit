import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './assets/main.css'

import App from './components/App'
import DashBoard from './views/DashBoard'
import ApisView from './views/Apis'
import PluginsView from './views/Plugins'

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/apis' component={ApisView} />
            <Route path='/plugins' component={PluginsView} />
          </Switch>
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
