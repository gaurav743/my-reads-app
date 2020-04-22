import React, { Component } from 'react'

class Book extends Component{

    render(){
        const { changeBookShelf } = this.props
        return(
            <div className="book">
                {
                    this.props.book.imageLinks && (
                        <div>
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange = { (event) => { changeBookShelf(this.props.book, event.target.value ) }}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                            <div className="book-title">{this.props.book.title}</div>
                            {
                                this.props.book.authors && (
                                    <div className="book-authors">{
                                        this.props.book.authors.map( (author) => (
                                            <span key = { author }>
                                                <span>{author}</span>
                                                {(this.props.book.authors.length > 1 && this.props.book.authors[this.props.book.authors.length - 1] !== author) && (
                                                    <span>, </span>
                                                )}
                                            </span>
                                        ))
                                    }
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>        
        )
    }
}


export default Book