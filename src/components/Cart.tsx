import React, {useState, useEffect} from 'react'
import {IMovie} from './Home'

interface IOrderObject {
  companyId: 321
  created: '0001-01-01T00:00:00'
  createdBy: 'sebastian.tegel@tegelconsulting.se'
  paymentMethod: 'MasterCard'
  totalPrice: 199
  status: 2
  orderRows: []
}
export interface IPropsCart {
  cartUpdate: IMovie[]
  sendOrder(): void
  onBuy(movie: IMovie): void
  totalPrice: number
}

interface IOrderRow {
  ProductId: number
  OrderId: number
  Amount: number
}

export default class Cart extends React.Component<IPropsCart, {}> {
  constructor(props: IPropsCart) {
    super(props)
    this.state = {
      cartss: [],
    }
  }

  render() {
    return (
      <div>
        <p> TOTAL PRICE: {this.props.totalPrice}</p>
        <button onClick={() => this.props.sendOrder()}>Send order</button>
        {this.props.cartUpdate.map((movie) => (
          <li key={movie.id} onClick={() => this.props.onBuy(movie)}>
            price:{movie.price}--{movie.name}--Amount:{movie.Amount}
          </li>
        ))}
      </div>
    )
  }
}
