import React from 'react'
import PropTypes from 'prop-types'
import { withMocks } from 'connector'
import ExampleComponent from './ExampleComponent'

const component = ({store}) => <ExampleComponent store={store} />

component.propTypes = {
  store: PropTypes.object.isRequired
}

export default withMocks()(component)
