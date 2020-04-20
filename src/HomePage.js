import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'

class HomePage extends Component{

    // state = {
    //   booksRead: [],
    //   booksWantToRead: [],
    //   booksCurrentlyReading: []
    // }
  

    // componentDidMount(){
    //   BooksAPI.getAll().then( (books) => {
    //     this.setState( () => ({
    //       booksRead: this.getBooksRead(books),
    //       booksWantToRead: this.getBooksWantToRead(books),
    //       booksCurrentlyReading: this.getBooksCurrentlyReading(books)
    //     }))
    //   })

    //   console.log('Inside home page...............')
    //   console.log(JSON.stringify(this.state.booksRead))
    //   console.log(JSON.stringify(this.state.booksWantToRead))
    //   console.log(JSON.stringify(this.state.booksCurrentlyReading))
    // }


    getBooksRead = (books) => {
      const booksToRead =  books.filter(( book ) => {
         return book.shelf === "read"
      })

      return booksToRead
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
        const booksRead = this.getBooksRead(this.props.books)
        const booksWantToRead = this.getBooksWantToRead(this.props.books)
        const booksCurrentlyReading = this.getBooksCurrentlyReading(this.props.books)

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <BooksList books = { booksCurrentlyReading }></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <BooksList books = { booksWantToRead }></BooksList>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <BooksList books = { booksRead }></BooksList>
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