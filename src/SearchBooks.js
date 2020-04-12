import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class SearchBooks extends Component {
    render(){
        return(
            <Route path = '/search' render = { () => (
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" >Close</button>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            )}></Route>
        )
    }
}

export default SearchBooks