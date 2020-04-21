import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'

class HomePage extends Component{
    render(){
        const { booksCurrentlyReading, booksRead, booksWantToRead, changeBookShelf } = this.props
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BooksList changeBookShelf = { changeBookShelf } books = { booksCurrentlyReading }></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <BooksList changeBookShelf = { changeBookShelf }  books = { booksWantToRead }></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <BooksList changeBookShelf = { changeBookShelf }  books = { booksRead }></BooksList>
                </div>
              </div>
            </div>
            <Link className="open-search" to 
            ='/search'> <button>Add a book</button></Link>
          </div>
        )
    }
} 

export default HomePage