import React from 'react'
import PropTypes from 'prop-types'

const component = ({store}) => <h1>hello {store.user.info.username}</h1>

component.propTypes = {
  store: PropTypes.object.isRequired
}

export default component
