import React from 'react'
import styled from 'styled-components'

const PanelWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const PanelHeader = styled.section`
  font-size: 14px;
`
const PanelBody = styled.section`
  font-size: 14px;
  padding: 24;
  background: '#fff';
  min-height: 360;
`
const Panel = props => (
  <PanelWrapper>
    <PanelHeader>{props.title}</PanelHeader>
    <PanelBody>{props.children}</PanelBody>
  </PanelWrapper>
)

export default Panel
