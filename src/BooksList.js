import React, { Component } from 'react'
import Book from './Book'

class BooksList extends Component{
    render(){
        const { changeBookShelf } = this.props

        return(          
            <div className="bookshelf-books">
                {
                    this.props.books && (
                        <ol className="books-grid">{
                            this.props.books.map( (book) => (
                                <li key = { book.id }>
                                    <Book changeBookShelf = { changeBookShelf } book = { book }></Book>
                                </li>
                            ))
                        }
                        </ol>
                    )
                }
            </div>
        )
    }
}

export default BooksList