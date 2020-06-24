import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionAtom, searchAtom, filterNames } from '../store';
import { CommentBox } from '../components/CommentBox';
import { AskQuestion } from '../components/AskQuestion';
import { Search } from '../components/Search';
import '../styles.css';
import { Header } from '../components/Header';
import { Favorites } from './Favorites';

export default function App() {
  const [questions, setQuestions] = useRecoilState(questionAtom);
  const [searchValue, setSearchValue] = useRecoilState(searchAtom);
  const filtered = useRecoilValue(filterNames);
  const title = React.useRef(null);
  const questionText = React.useRef(null);
  const tagsList = React.useRef(null);
  const [page, setPage] = React.useState(0);

  const handleQuestion = (e) => {
    e.preventDefault();
    if (title.current.value.length === 0) return;
    if (questionText.current.value.length === 0) return;
    let newTags = tagsList.current.value
      ? tagsList.current.value.split(',')
      : null;
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    setQuestions(() => [
      ...questions,
      {
        id: questions.length + 1,
        title: title.current.value,
        date: new Date().toLocaleDateString('en-US', options),
        question: questionText.current.value,
        favorited: false,
        tags: newTags,
      },
    ]);
    title.current.value = '';
    questionText.current.value = '';
    tagsList.current.value = '';
  };

  const setFavorite = (id) => {
    setQuestions(() =>
      questions.map((item, index) => {
        if (item.id === id)
          return {
            ...item,
            favorited: !item.favorited,
          };
        return item;
      })
    );
  };

  return (
    <div className='App'>
      <Header page={page} setPage={setPage} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <hr className='divider' />
      {page ? (
        <Favorites
          searchValue={searchValue}
          filtered={filtered}
          setFavorite={setFavorite}
        />
      ) : (
        <>
          <main>
            <h1>Recently added</h1>
            <ul>
              {filtered?.length ? (
                filtered.map((question) => (
                  <CommentBox
                    key={question.id}
                    question={question}
                    setFavorite={setFavorite}
                  />
                ))
              ) : searchValue ? (
                <div>Nothing matches your search...</div>
              ) : (
                <div> No questions yet...</div>
              )}
            </ul>
          </main>
          <hr className='divider' />
          <AskQuestion
            handleQuestion={handleQuestion}
            title={title}
            questionText={questionText}
            tagsList={tagsList}
          />
        </>
      )}
    </div>
  );
}
