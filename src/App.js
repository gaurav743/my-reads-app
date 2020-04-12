import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import HomePage from './HomePage'

class BooksApp extends React.Component {
  
  state = {
  }

  render() {
    return (
      <div className="app">
        <SearchBooks></SearchBooks>
        <HomePage></HomePage>
      </div>
    )
  }
}

export default BooksApp
