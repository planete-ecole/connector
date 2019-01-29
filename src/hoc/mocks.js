import React from 'react'
import AudioContext from '../contexts/AudioContext'
import UserContext from '../contexts/UserContext'

const notImplemented = () => console.warn('not implemented')

const audio = {
  create: notImplemented,
  get: notImplemented
}

const user = {
  authenticated: true,
  info: { username: 'natacha', firstName: 'natacha', lastName: 'blanchet'},
  refreshToken: 'fake refresh token',
  token: 'fake token'
}

const hoc = WrappedComponent => () => (
  <AudioContext.Provider value={audio}>
    <UserContext.Provider value={user}>
      <WrappedComponent/>
    </UserContext.Provider>
  </AudioContext.Provider>
)

export default hoc
