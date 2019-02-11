import React from 'react'
import { withMocks } from 'connector'
import AudioButton from './components/AudioButton'
import WelcomeMessage from './components/WelcomeMessage'

const component = () => (
  <React.Fragment>
    <AudioButton />
    <WelcomeMessage />
  </React.Fragment>
)

export default withMocks(component)
