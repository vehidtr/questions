import React from 'react';

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <svg
        aria-hidden="true"
        className="iconSearch"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="gray"
      >
        <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z" />
      </svg>
      <input
        id="search"
        type="text"
        value={searchValue}
        placeholder="Search ..."
        onChange={e => setSearchValue(e.target.value)}
      />
    </>
  );
};
