import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
 //import * as BooksAPI from './BooksAPI'



//components
import Header from './Header.js'
import Reading from './Reading.js'





class DisplayBooks extends Component{

  static propTypes ={
  books: PropTypes.array.isRequired,
  handleBookMoved:PropTypes.func.isRequired
  }


render(){
const {books, handleBookMoved} = this.props;
return(
   <div className="list-books">
           <Header />
            <div className="list-books-content">
              <div>
  
    			<Reading books={books} shelf="currentlyReading" title="Currently Reading"  handleBookMoved={handleBookMoved}/>
            	<Reading books={books} shelf="wantToRead" title="Want to Read" handleBookMoved={handleBookMoved}/>
      			<Reading books={books} shelf="read" title="Read"handleBookMoved={handleBookMoved}/>
 	
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
)

}

}


export default DisplayBooks;