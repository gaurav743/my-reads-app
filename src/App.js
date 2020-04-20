import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import HomePage from './HomePage'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path = '/search' render = { () => (<SearchBooks></SearchBooks>)}></Route>
        <Route exact path='/' render = { () => (<HomePage books = { this.state.books }></HomePage>) }></Route>
      </div>
    )
  }
}

export default BooksApp
