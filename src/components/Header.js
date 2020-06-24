import React from 'react';

export const Header = ({ page, setPage }) => {
  return (
    <header>
      <h1>
        <p>+</p> questions
        <a
          href="/#"
          className="questions-favorited"
          id={page ? 'selected' : ''}
          onClick={() => setPage(1)}
        >
          favorited
        </a>
        <a
          href="/#"
          className="questions-favorited"
          id={!page ? 'selected' : ''}
          onClick={() => setPage(0)}
        >
          home
        </a>
      </h1>
    </header>
  );
};
