import React, {useEffect} from 'react'
import {ICart} from './Products'

export interface IMovie {
  id: number
  name: string
  price: number
  imageUrl: string
  Amount: number
  productCategory: [{categoryId: number}]
}

export interface IProp {
  movies: IMovie[]
  onBuy(movie: IMovie): void
}

export default class Home extends React.Component<IProp, {}> {
  constructor(props: IProp) {
    super(props)
    this.state = {
      cart: [],
    }
  }

  render() {
    return (
      <div>
        {/*this.props.cart.map(movie=><li >{movie.Amount}--{movie.orderId}</li>)*/}
        {this.props.movies.map((movie) => (
          <li key={movie.id} onClick={() => this.props.onBuy(movie)}>
            {movie.Amount}---{movie.name}--{movie.id}
          </li>
        ))}
      </div>
    )
  }
}
