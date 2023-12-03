import './image-list.component.css'
import { FC, ReactNode } from 'react';

import ImageShowComponent from '../image-show/image-show.component';

export const ImageListComponent: FC<ImageListProps> = ({images}) => {
    const imageShows = images.map((image) => {
        return <ImageShowComponent key={image.id} src={image.urls.thumb} alt={image.alt_description}/>
    })
    return <div className='show-list'>
        {imageShows}
    </div>
}

export type ImageTypes = {
    id: string;
    alt_description: string;
    urls: {
        thumb: string;
    }
}
export type ImageListProps = {
    images: ImageTypes[];
    children?: ReactNode
}
export default  ImageListComponent;
