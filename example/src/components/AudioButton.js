import React from 'react'
import { withAudio } from 'connector'
import PropTypes from 'prop-types'

const component = ({audio, name}) => (
  <button type='button' onClick={() => audio.get('hello', 'en-US-Wavenet-D', 2, 1)}>
    Say "Hello {name}" !
  </button>
)

component.propTypes = {
  audio: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default withAudio(component)
