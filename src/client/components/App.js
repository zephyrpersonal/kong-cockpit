import React, { Component } from 'react'
import styled from 'styled-components'
import AppHeader from './AppHeader'
import AppSideNav from './AppSideNav'

import backgroundImage from '../assets/breather-187923.jpg'

const AppWrapper = styled.div`
  background-color: #63a98b;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  text-rendering: optimizeLegibility;
  color: hsla(0, 0%, 100%, 0.7);
`

const AppBoard = styled.section`
  /* background-color: #141a2e; */
  background: linear-gradient(
    to bottom,
    rgba(24, 62, 70, 0.95) 0%,
    rgba(20, 26, 46, 0.95) 4%,
    rgba(20, 26, 46, 0.95) 100%
  );
  border-radius: 4px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const AppContainer = styled.section`
  padding: 20px 0;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex: 1;
`

const AppContent = styled.section`
  padding: 20px;
  overflow: auto;
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
            <AppContent className='custom-scrollbar'>
              {this.props.children}
            </AppContent>
          </AppContainer>
        </AppBoard>
      </AppWrapper>
    )
  }
}

export default App
