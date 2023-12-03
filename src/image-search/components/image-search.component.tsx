import React, { useState } from 'react';
import { fetchImage } from '../axios/fetch-image';
import ImageListComponent, { ImageTypes } from './image-list/image-list.component';
import SearchBarComponent from './search-bar/search-bar.component';

const ImageSearchComponent = () => {
    const [images, setImages] = useState<ImageTypes[]>([])
    const searchHandler = async (searchTerm: string) => {
        const results = await fetchImage(searchTerm);
        setImages(results);
    }
    return <>
        <SearchBarComponent onSearchHandler={searchHandler} />
        <ImageListComponent images={images}/>
    </>
}

export default ImageSearchComponent
