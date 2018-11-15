import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {
  NotFound
} from '../../components'

export default class Scratchpad extends PureComponent {
  render () {
    return (
      <Scratchpad.Styled>
        <h1>Scratchpad for building components before they are used</h1>

        <section>
          <h2>Not Found Component</h2>
          <NotFound />
        </section>
      </Scratchpad.Styled>
    )
  }
}

Scratchpad.Styled = styled.div`
  padding: 100px;

  > section {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  }
`
