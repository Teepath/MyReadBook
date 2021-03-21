import React,{Component} from 'react';
import {Link}from 'react-router-dom';
 import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';


import Book from './BookView';


class SearchInput extends Component{
  state={
    search:'',
    books:[],
  }

handleSearch = (search)=>{
 
this.setState(()=>({
	search: search.split(" ")[0].trim()
}))
  
   try{ 
 BooksAPI.search(search, 8).then((books)=>{  
this.setState(()=>({
books,
}))
   
})
      
 } catch(err){
	console.log(err)
} 
}



debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
                debounceTimer 
            = setTimeout(() => func.apply(context, args), delay) 
    } 
}  



invalid=()=>{
return this.state.search ==='';
}

   render(){
      const{books, search} =this.state

	const {handleBookMoved, data} = this.props;


	const displayBook = search !=="" ? books.filter(book => book.authors.join(" ").trim().toLowerCase().includes(search.toLowerCase()) || book.title.toLowerCase().includes(search.toLowerCase())): <div>"Nothing to show"</div>;
  return(
   <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
onChange={(e)=>this.debounce(this.handleSearch(e.target.value), 5000)}
name="search"
/>
              </div>
	         </div>
            <div className="search-books-results">
              <ol className="books-grid">
{
 
displayBook.length >0 ? displayBook.filter(book=>book.imageLinks.thumbnail).map(book =>(
<Book book={book} handleBookMoved={handleBookMoved} key={book.id} defaultValue={data.findIndex(x=> x===book) >= 0? data[data.findIndex(x=> x===book)].shelf :"none"}/>
  ))
: <div><p> No search result yet </p>
</div>
}

</ol>
            </div>
          </div>
  )
}
                       }

SearchInput.propTypes = {
  handleBookMoved:PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default SearchInput;