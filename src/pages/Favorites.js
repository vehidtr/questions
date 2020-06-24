import React from 'react';
import { CommentBox } from '../components/CommentBox';

export const Favorites = ({ searchValue, filtered, setFavorite }) => {
  return (
    <>
      <main>
        <h1>Favorite questions</h1>
        <ul>
          {filtered?.length ? (
            filtered.map(
              question =>
                question.favorited && (
                  <CommentBox
                    key={question.id}
                    question={question}
                    setFavorite={setFavorite}
                  />
                )
            )
          ) : searchValue ? (
            <div>Nothing matches your search...</div>
          ) : (
            <div> No questions yet...</div>
          )}
        </ul>
      </main>
    </>
  );
};
