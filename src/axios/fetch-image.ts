import axios from 'axios';
import { ImageTypes } from '../components/image-list/image-list.component';


export const fetchImage = async (searchTerm: string) => {
    const response = await axios.get<ResponseType, ResponseType>('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID bgBSAkDaRCBCLhQeqyNB5MUDrMtW5wU2sWEROq7uhZc`
        },
        params: {
            query: searchTerm
        }
    });
    return response.data.results

}

type ResponseType = {
    data: {
        results: ImageTypes[]
    }
}
