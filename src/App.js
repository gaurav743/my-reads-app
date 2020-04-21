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
      this.setState(({
        books: books
      }))
    })
  }

  getBooksRead = (books) => {
    const booksToRead =  books.filter(( book ) => {
       return book.shelf === "read"
    })

    return booksToRead
  }

  getBooksWantToRead = (books) => {
    const booksWantToRead = books.filter(( book ) => {
      return book.shelf === "wantToRead"
    })

    return booksWantToRead
  }

  getBooksCurrentlyReading = (books) => {
    const booksCurrentlyReading = books.filter(( book ) => {
      return book.shelf === "currentlyReading"
    })
   
    return booksCurrentlyReading
  }

  changeBookShelf = (book, newShelf) => {
    const books = this.state.books

    books.forEach( (b) => {
      if(b.id === book.id){
        b.shelf = newShelf
      }
    })

    this.setState({
      books: books
    })
  }

  render() {
    return (
      <div className="app">
        <Route path = '/search' render = { () => (<SearchBooks></SearchBooks>)}></Route>
        <Route exact path='/' render = { () => (<HomePage 
            changeBookShelf = { this.changeBookShelf }
            booksCurrentlyReading = { this.getBooksCurrentlyReading(this.state.books) } 
            booksRead = { this.getBooksRead(this.state.books) } 
            booksWantToRead = { this.getBooksWantToRead(this.state.books) }></HomePage>) }>
        </Route>
      </div>
    )
  }
}

export default BooksApp
