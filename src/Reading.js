import React from 'react';
import PropTypes from "prop-types"

//component
import BookView from './BookView'

const Reading = ({books, shelf, title, handleBookMoved})=>{

return(
  <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
  {
  books && books.map(book =>(
  book.shelf === shelf &&(
 <li key={book.id}>
               <BookView book={book} defaultValue={book.shelf} handleBookMoved={handleBookMoved}/>    	
  </li>
)
))
    
}
                    </ol>
                  </div>
                </div>

)

}

Reading.propTypes = {
books: PropTypes.array.isRequired,
 handleBookMoved:PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired
}
export default Reading;