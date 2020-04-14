import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'

export interface IMovie {
  id: number
  name: string
  price: number
  Amount: number
  imageUrl: string
  productCategory: [{categoryId: number}]
}

export interface IMovieState {
  movies: IMovie[]
  cart: ICart[]
}
export interface ICart {
  orderId: number
  Amount: number
}

const Products: React.FC = () => {
  const [movies, setMovies] = useState({
    movies: [],
    cart: [],
  })
  const [cartArr, setCartArr] = useState({
    companyId: 321,
    created: '0001-01-01T00:00:00',
    createdBy: 'sebastian.tegel@tegelconsulting.se',
    paymentMethod: 'MasterCard',
    totalPrice: 0,
    status: 2,
    orderRows: [],
  })

  useEffect(() => {
    axios.get('http://medieinstitutet-wie-products.azurewebsites.net/api/products').then((res) => {
      setMovies({
        ...movies,
        movies: res.data.map((movie: IMovie) => {
          return {
            id: movie.id,
            name: movie.name,
            price: movie.price,
            Amount: 0,
            imageUrl: movie.imageUrl,
            productCategory: [{categoryId: movie.productCategory}],
          }
        }),
      })
    })
  }, [])

  const [cartUpdate, setCartUpdate] = useState([])

  const onBuy = (movie: IMovie) => {
    console.log(movie)
    movie.Amount++
    setMovies({...movies})
    setCartArr({
      ...cartArr,
      orderRows: movies.movies
        .filter((movie) => movie.Amount)
        .map((movie) => {
          return {
            ProductId: movie.id,
            OrderId: movie.id,
            Amount: movie.Amount,
          }
        }),
      totalPrice: movies.movies.reduce((a, b) => a + b.Amount * b.price, 0),
    })
  }

  const sendOrder = () => {
    console.log(cartArr, 'SLUTK')
  }

  useEffect(() => {
    setCartUpdate(movies.movies.filter((movie: IMovie) => movie.Amount))
  }, [movies])

  return (
    <div>
      <Home onBuy={onBuy} movies={movies.movies} />
      <br />
      <hr />
      <hr />
      <hr />
      <Cart
        totalPrice={cartArr.totalPrice}
        onBuy={onBuy}
        sendOrder={sendOrder}
        cartUpdate={cartUpdate}
      />
    </div>
  )
}
export default Products
