import React, { createContext, useState } from 'react';
import Nav from "../components/Nav";
import Search from "../components/Search";
import Flowers from "../components/Flowers";

export const SearchContext = createContext('')

function Main() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Nav />
      <SearchContext.Provider value={search}>
        <Search search={search} setSearch={setSearch}/>
        <div>
          <Flowers />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default Main;
