import React from 'react'
import AudioContext from '../contexts/AudioContext'

const hoc = WrappedComponent => props => (
  <AudioContext.Consumer>
    { audio => <WrappedComponent audio={audio} {...props} /> }
  </AudioContext.Consumer>
)

export default hoc
