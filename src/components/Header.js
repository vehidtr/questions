import React from 'react';

export const Header = ({ page, setPage }) => {
  return (
    <header>
      <h1>
        <p>+</p> questions
        <span
          className='questions-favorited'
          id={page ? 'selected' : ''}
          onClick={() => setPage(1)}
        >
          favorited
        </span>
        <span
          className='questions-favorited'
          id={!page ? 'selected' : ''}
          onClick={() => setPage(0)}
        >
          home
        </span>
      </h1>
    </header>
  );
};
