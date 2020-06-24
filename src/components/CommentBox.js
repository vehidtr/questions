import React from 'react';

export const CommentBox = ({ question, setFavorite }) => {
  return (
    <li>
      <div className="question-header">
        <h3 className="question-title">{question.title}</h3>
      </div>
      <p>{question.question}</p>
      <div className="question-tags">
        {question.tags?.length &&
          question.tags.map(tag => (
            <a key={tag + question.id} href="/" className="tag" rel="tag">
              {tag}
            </a>
          ))}
      </div>
      <hr className="divider" />
      <div className="question-footer">
        <span>
          <span onClick={() => setFavorite(question.id)}>
            {question.favorited ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="question-favorite"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="question-favorite"
                viewBox="0 0 24 24"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
              </svg>
            )}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            className="question-comment"
            viewBox="-21 -47 682.66669 682"
            width="24px"
          >
            <path d="m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.472656-87.988281 87.988281v283.972656c0 48.421875 39.300781 87.824219 87.675781 87.988282v128.871093l185.183594-128.859375h279.152344c48.515625 0 87.988281-39.472656 87.988281-88v-283.972656c0-48.515625-39.472656-87.988281-87.988281-87.988281zm-83.308594 330.011719h-297.40625v-37.5h297.40625zm0-80h-297.40625v-37.5h297.40625zm0-80h-297.40625v-37.5h297.40625zm0 0" />
          </svg>
        </span>
        <span className="question-text">{question.date}</span>
      </div>
      <div />
    </li>
  );
};
