import React from 'react'
import { withUser } from 'connector'
import PropTypes from 'prop-types'

const component = ({user}) => (
  <h2>Welcome, {user.info.firstName} !</h2>
)

component.propTypes = {
  user: PropTypes.object.isRequired
}

export default withUser(component)
