import React from 'react';

function Search({ search, setSearch }) {
  return (
    <div className='search-container'>
      <input
        type="text"
        className='search-input'
        placeholder='Suche'
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
    </div>
  );
}

export default Search;
