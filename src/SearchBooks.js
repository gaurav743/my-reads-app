import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { debounce } from 'throttle-debounce'
import { Link } from 'react-router-dom' 

class SearchBooks extends Component {
    state = {
        books: []
    }

    searchBooks = (e) => {
        e.persist()
        debounce(3000, BooksAPI.search(e.target.value).then( (books) => { 
            if( !books || books.error ){
                this.setState({
                    books: []
                })
            }else {
                if(books){
                    this.setState({
                        books
                    })
                }
            }
        }))
    }

    render(){
        const { changeBookShelf } = this.props
        return(
            <div className="search-books">
                {
                    this.state.books && (
                        <div>
                            <div className="search-books-bar">
                                <Link to = "/" className="close-search" >Close</Link>
                                <div className="search-books-input-wrapper">
                                    <input type="text" placeholder="Search by title or author" 
                                        onChange = { (e) => { this.searchBooks(e) } }
                                    />
                                </div>
                            </div>
                            <div className="search-books-results">
                                <ol className="books-grid">{
                                    this.state.books && (this.state.books.map( (book) => (<Book key = { book.id } changeBookShelf = { changeBookShelf } book={ book }></Book>)))
                                }
                                </ol>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default SearchBooks