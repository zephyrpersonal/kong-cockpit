import React, { Component } from 'react'
import styled from 'styled-components'
import AppHeader from './AppHeader'
import AppSideNav from './AppSideNav'

const AppWrapper = styled.div`
  background: #63a98b;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  text-rendering: optimizeLegibility;
  color: hsla(0, 0%, 100%, 0.7);
`

const AppBoard = styled.section`
  /* background-color: #141a2e; */
  background: linear-gradient(
    to bottom,
    rgba(24, 62, 70, 1) 0%,
    rgba(20, 26, 46, 1) 4%,
    rgba(20, 26, 46, 1) 100%
  );
  border-radius: 4px;
  min-height: 800px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
  height: 100%;
  overflow: auto;
`

const AppContainer = styled.section`
  padding: 20px 0;
  display: flex;
  box-sizing: border-box;
  flex-direction: row wrap;
`
class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <AppWrapper>
        <AppBoard>
          <AppHeader />
          <AppContainer>
            <AppSideNav />
            {this.props.children}
          </AppContainer>
        </AppBoard>
      </AppWrapper>
    )
  }
}

export default App
