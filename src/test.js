import React from 'react'
import { withAudio, withUser } from './'

describe('audio hoc', () => {
  it('is truthy', () => {
    expect(withAudio(<div />)).toBeTruthy()
  })
})

describe('user hoc', () => {
  it('is truthy', () => {
    expect(withUser(<div />)).toBeTruthy()
  })
})
