import React from 'react'
import Cart from './Cart'
import {IMovie} from './Home'
import {IPropsCart} from './Cart'

export default class Test extends React.Component<IPropsCart, {}> {
  render() {
    return (
      <div className="App">
        <h3>TEST</h3>
        <Cart />
      </div>
    )
  }
}
