import React, { useState } from 'react';
import './App.css';

import { fetchImage } from './axios/fetch-image';
import ImageListComponent, { ImageTypes } from './components/image-list/image-list.component';

import SearchBarComponent from './components/search-bar/search-bar.component';

function App() {
  const [images, setImages] = useState<ImageTypes[]>([])
  const searchHandler = async (searchTerm: string) => {
    const results = await fetchImage(searchTerm);
    setImages(results);
  }

  return (
    <div className="App">
      <SearchBarComponent onSearchHandler={searchHandler} />
      <ImageListComponent images={images}/>
    </div>
  );
}

export default App;
