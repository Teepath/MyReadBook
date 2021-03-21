import React from 'react';
import PropTypes from "prop-types"

const BookView = ({book, handleBookMoved, defaultValue})=>{

return(

                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e)=> handleBookMoved(book, e)} value={defaultValue}>
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.map(author => author)}</div>
                        </div>
                    


)

}

BookView.propTypes = {
book: PropTypes.object.isRequired,
handleBookMoved: PropTypes.func.isRequired,
defaultValue: PropTypes.string.isRequired,
}

export default BookView;