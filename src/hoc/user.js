import React from 'react'
import UserContext from '../contexts/UserContext'

const hoc = WrappedComponent => props => (
  <UserContext.Consumer>
    { user => <WrappedComponent user={user} {...props} /> }
  </UserContext.Consumer>
)

export default hoc
