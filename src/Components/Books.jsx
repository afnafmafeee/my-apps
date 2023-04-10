import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const {books} = useLoaderData()
    
    return (
      <div className='grid grid-cols-4 max-w-screen-lg mx-auto'>
        {books.map((book) => (
          <SingleBook key={book.isbn13} book={book} />
        ))}
      </div>
    );
};

export default Books;