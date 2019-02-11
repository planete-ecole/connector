import React from 'react'
import AudioContext from '../contexts/AudioContext'
import UserContext from '../contexts/UserContext'

const audio = {
  play: (text, voice, gender, speakingRate, token) =>
    alert(`this should play ${text} with params [${voice}, ${gender}, ${speakingRate}, ${token}]`)
}

const user = {
  authenticated: true,
  info: { username: 'natacha', firstName: 'natacha', lastName: 'blanchet' },
  refreshToken: 'fake refresh token',
  token: 'fake token'
}

function withMocks(WrappedComponent){
  function WithMocks(props) {
    return (
      <AudioContext.Provider value={audio}>
        <UserContext.Provider value={user}>
          <WrappedComponent {...props} />
        </UserContext.Provider>
      </AudioContext.Provider>
    )
  }

  WithMocks.displayName = `withMocks(${WrappedComponent.displayName || WrappedComponent.name})`
  return WithMocks
}

export default withMocks
