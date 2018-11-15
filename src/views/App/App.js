
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import store from '../../store'
import { Default, NotFound } from '../../components'
import { Scratchpad } from '../../views'
import '../../ui/global' // Global Styles
import theme from '../../ui/theme'

export default class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App.Styled className='application-root'>
            <Router primary>
              <Default path='/' />
              <Scratchpad path='/scratchpad' />
              <NotFound default />
            </Router>
          </App.Styled>
        </ThemeProvider>
      </Provider>
    )
  }
}

App.Styled = styled.div``
