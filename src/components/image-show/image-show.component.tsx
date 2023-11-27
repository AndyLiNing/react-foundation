import './image-show.component.css'
import { FC } from 'react';

const ImageShowComponent: FC<ImageShowProp> = ({alt, src}) => {
    return <>
             <img  src={src} alt={alt}/>
           </>
}


export type ImageShowProp = {
    src: string;
    alt: string;
}
export default ImageShowComponent;
