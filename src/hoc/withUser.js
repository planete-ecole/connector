import React from 'react'
import UserContext from '../contexts/UserContext'

function withUser(WrappedComponent) {
  function WithUser(props) {
    return (
      <UserContext.Consumer>
        {user => <WrappedComponent user={user} {...props} />}
      </UserContext.Consumer>
    )
  }

  WithUser.displayName = `withUser(${WrappedComponent.displayName || WrappedComponent.name})`
  return WithUser
}

export default withUser
