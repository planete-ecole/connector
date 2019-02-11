import React from 'react'
import AudioContext from '../contexts/AudioContext'

function withAudio (WrappedComponent) {
  function WithAudio (props) {
    return (
      <AudioContext.Consumer>
        {audio => <WrappedComponent audio={audio} {...props} />}
      </AudioContext.Consumer>
    )
  }

  WithAudio.displayName = `withAudio(${WrappedComponent.displayName || WrappedComponent.name})`
  return WithAudio
}

export default withAudio
