import React from 'react'
import styled from 'styled-components'

const PanelWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`

const PanelHeader = styled.section`
  font-size: 14px;
`
const PanelBody = styled.section`
  font-size: 14px;
`
const Panel = props => (
  <PanelWrapper>
    <PanelHeader>{props.title}</PanelHeader>
    <PanelBody>{props.children}</PanelBody>
  </PanelWrapper>
)

export default Panel
