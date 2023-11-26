import axios from 'axios';


export const fetchImage = async (searchTerm: string) => {
    const response = await axios.get<ResponseType, ResponseType>('', {
        headers: {

        },
        params: {

        }
    });
    return response.data.results

}

type ResponseType = {
    data: {
        results: string[]
    }
}
