import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import './App.css';

import { fetchImage } from './axios/fetch-image';

import SearchBarComponent from './components/search-bar/search-bar.component';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  useEffect(() => {
    console.log('searchTerm', searchTerm)
    const a = fetchImage(searchTerm)
  }, [searchTerm]);


  return (
    <div className="App">
      <SearchBarComponent onSearchHandler={searchHandler} />
    </div>
  );
}

export default App;
