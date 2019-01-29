import React from 'react'
import UserContext from '../contexts/UserContext'

const hoc = WrappedComponent => () => (
  <UserContext.Consumer>
    { user => <WrappedComponent user={user} /> }
  </UserContext.Consumer>
)

export default hoc
