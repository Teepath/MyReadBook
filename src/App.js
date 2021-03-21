import React from 'react'
 import * as BooksAPI from './BooksAPI'


import {Route} from 'react-router-dom'

import './App.css'


//Components

import SearchInput from './SearchInput.js'
import DisplayBooks from './DisplayBooks.js'

class BooksApp extends React.Component {
  state = {
 	data: [],
   
  }

loadData = ()=>{
BooksAPI.getAll().then((data)=>{
console.log(data)
  this.setState(()=>({
  data,
  }))
  
})
}

componentDidMount(){
this.loadData()
}


handleBookMoved = (book, event)=>{
  console.log(event.target.value)
  
 BooksAPI.update(book, event.target.value).then(res=>{
 	this.loadData()
 })
}

handleSearchMoved = (book, event)=>{
 BooksAPI.update(book, event.target.value).then(res=>{
 	this.setState(()=>({
    data:[...this.state.data, book]
    }))
 })
  
  this.loadData()
}



  render() {
    return (
        <div className="app">
         <Route exact path='/' render={()=>(
  	< DisplayBooks
 	handleBookMoved={this.handleBookMoved}
    books={this.state.data}
    />
  )}/>

      
        <Route path='/search' render={()=>(
           <SearchInput handleBookMoved={this.handleSearchMoved} data={this.state.data} />
          )}/>
        
      </div>
    )
  }
}

export default BooksApp;
