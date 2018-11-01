
import './app.css'

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '../../store'
import { Default, NotFound } from '../../components'
import { Router } from '@reach/router'

export default class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <div className='application-root'>
            <Router primary>
              <Default path='/' />
              <NotFound default />
            </Router>
          </div>
        </ThemeProvider>
      </Provider>
    )
  }
}
