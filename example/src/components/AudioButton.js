import React from 'react'
import { withAudio } from 'connector'
import PropTypes from 'prop-types'

const component = ({audio}) => (
  <button type='button' onClick={() => audio.play('hello', 'en-US-Wavenet-D', 2, 1, 'token')}>
    Say "Hello" !
  </button>
)

component.propTypes = {
  audio: PropTypes.object.isRequired
}

export default withAudio(component)
