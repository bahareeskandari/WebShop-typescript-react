import React from 'react'
import './App.css'
import Products from './components/Products'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Test from './components/Test'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Test">Test</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/Test" component={Test} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
