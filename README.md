# `withWindow`

A higher-order components can spy window properties

## Usage

```js
import React from 'react'
import withWindow from 'with-window'

class CusComponent extends React.Component {
  render() {
    const { foo } = this.props
    return (
      <h1>{ foo }</h1>
    )
  }
}

export default withWindow('foo', CusComponent)

// OtherComponent
window.foo = 'bar' // `<CusComponent />` will update when `foo` changes
```
