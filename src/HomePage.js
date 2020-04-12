import React , { Component } from 'react'
import { Route , Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'

class HomePage extends Component{

    state = {
      booksRead: [],
      booksWantToRead: [],
      booksCurrentlyReading: []
    }

    componentDidMount(){
      BooksAPI.getAll().then( (books) => {
        console.log(books)
        this.setState( () => {
          booksRead: this.getBooksRead(books)
          booksWantToRead: this.getBooksWantToRead(books)
          booksCurrentlyReading: this.getBooksCurrentlyReading(books)
        })
      })
    }

    getBooksRead = (books) => {
      return books.filter(( book ) => {
        return book.shelf === "read"
      })
    }

    getBooksWantToRead = (books) => {
      return books.filter(( book ) => {
        return book.shelf === "wantToRead"
      })
    }

    getBooksCurrentlyReading = (books) => {
      return books.filter(( book ) => {
        return book.shelf === "currentlyReading"
      })
    }

    render(){
        return(
          <Route exact path='/' render = { () => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BooksList books = { this.state.booksCurrentlyReading}></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BooksList books = { this.state.booksWantToRead }></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BooksList books = { this.state.booksRead }></BooksList>
                </div>
              </div>
            </div>
            <Link className="open-search" to='/search'> <button>Add a book</button></Link>
          </div>
          )}></Route>
        )
    }
} 

export default HomePage