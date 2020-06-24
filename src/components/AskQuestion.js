import React from 'react';

export const AskQuestion = ({
  handleQuestion,
  title,
  questionText,
  tagsList
}) => {
  return (
    <>
      <h1>Ask a questions</h1>
      <form onSubmit={handleQuestion}>
        {/* <label htmlFor="title">Title</label> */}
        <input id="title" type="text" ref={title} placeholder="Title" />
        <hr className="divider" />
        {/* <label htmlFor="question">Question</label> */}
        <textarea id="question" ref={questionText} placeholder="Question" />
        <span className="character-count">0/250</span>
        <input id="tags" ref={tagsList} type="text" placeholder="Add tags..." />
        <input type="submit" value="Submit" id="question-submit" />
      </form>
    </>
  );
};
