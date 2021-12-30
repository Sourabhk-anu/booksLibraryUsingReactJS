import React from 'react'
import {useState} from 'react'
import Books from './Books'

const App = () => {

  const[title, setTitle]= useState('');
  const[books, setBooks]= useState([]);

  const URL=`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCkbkhU3Qe6yhLp1T-J5NcF6mwqPyIkzeQ&`;
  const handleSubmit = e => {
    e.preventDefault();
    if(title!==''){
      getBooks();
    }
    else alert('Please enter some text');
  }

  const getBooks = async() => {
    const res = await fetch(URL+'q='+title);
    const data = await res.json();
    setBooks(data.items);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for book"  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Search <i className="fa fa-search"></i></button>
      </form>

      <ul>
        {books.map(book => <Books book={book.volumeInfo}/> )}
      </ul>
    </div>
  )
}

export default App
