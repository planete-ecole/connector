import React from 'react'
import { withMocks } from './'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(withMocks()(<div />)).toBeTruthy()
  })
})
