import React from 'react'
import AudioContext from '../contexts/AudioContext'

const hoc = WrappedComponent => () => (
  <AudioContext.Consumer>
    { audio => <WrappedComponent audio={audio} /> }
  </AudioContext.Consumer>
)

export default hoc
