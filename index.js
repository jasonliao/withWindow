import React, { Component } from 'react'

import KeyStore from './libs/KeyStore'
import spyProperies from './libs/spyProperties'

const ks = new KeyStore()

export default (value, WrapComponent, obj = window) => {
  return class extends Component {
    constructor() {
      super()

      this.state = {
        [value]: ''
      }

      spyProperies(obj, value, this, ks)
    }

    render() {
      return <WrapComponent {...this.state} {...this.props} />
    }
  }
}
