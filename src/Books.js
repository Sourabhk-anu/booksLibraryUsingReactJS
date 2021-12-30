import React from 'react'

const Books = ({book}) => {
    const {title, authors, imageLinks, publisher, publishedDate, description}= book;
    return (
        <div className="book-detail">
            <h1>Books name: {title}</h1>
            <h2>Authors: {authors && authors.map(author=> <span>{author}</span>)}</h2>
            <h2>Publisher: {publisher}</h2>
            <h2>Publish Date: {publishedDate}</h2>
            <img src={imageLinks.thumbnail} alt={title}/>
            <p><b>Description:</b> {description}</p>
        </div>
    )
}

export default Books
