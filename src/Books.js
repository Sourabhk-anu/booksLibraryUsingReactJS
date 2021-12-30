import React from 'react'

const Books = ({book}) => {
    const {title, authors, imageLinks}= book;
    return (
        <div>
            <h1>Books name: {title}</h1>
            <h2>Authors: {authors && authors.map(author=> <span>{author}</span>)}</h2>
            <img src={imageLinks.thumbnail} alt={title}/>
        </div>
    )
}

export default Books
