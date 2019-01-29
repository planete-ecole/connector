import React from 'react'

const store = {
  user: {
    authenticated: true,
    info: {
      username: 'natacha',
      first_name: 'natacha',
      last_name: 'blanchet'
    },
    refresh_token: '',
    token: ''
  }
}

export default (data, submit = () => alert('')) => WrappedComponent => () => (
  <WrappedComponent
    store={store}
    data={data}
    submit={submit}
  />
)
