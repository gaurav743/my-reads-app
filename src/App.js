import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import HomePage from './HomePage'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    booksRead: [],
    booksWantToRead: [],
    booksCurrentlyReading: []
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState(({
        books: books
      }))

      this.getAllBookCategories()
    })
  }

  getAllBookCategories = () => {
    this.getBooksRead(this.state.books)
    this.getBooksWantToRead(this.state.books)
    this.getBooksCurrentlyReading(this.state.books)
  }

  getBooksRead = (books) => {
    const booksRead =  books.filter(( book ) => {
       return book.shelf === "read"
    })

    this.setState(({
      booksRead
    }))
  }

  getBooksWantToRead = (books) => {
    const booksWantToRead = books.filter(( book ) => {
      return book.shelf === "wantToRead"
    })

    this.setState(({
      booksWantToRead
    }))
  }

  getBooksCurrentlyReading = (books) => {
    const booksCurrentlyReading = books.filter(( book ) => {
      return book.shelf === "currentlyReading"
    })
   
    this.setState(({
      booksCurrentlyReading
    }))
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
    }, this.updateBookShelf(book, newShelf))
  }

  updateBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then( () => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route path = '/search' render = { () => (<SearchBooks changeBookShelf = { this.changeBookShelf }></SearchBooks>)}></Route>
        <Route exact path='/' render = { () => (<HomePage 
            changeBookShelf = { this.changeBookShelf }
            booksCurrentlyReading = { this.state.booksCurrentlyReading } 
            booksRead = { this.state.booksRead } 
            booksWantToRead = { this.state.booksWantToRead }></HomePage>) }>
        </Route>
      </div>
    )
  }
}

export default BooksApp
