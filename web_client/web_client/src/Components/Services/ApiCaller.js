
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export function getYoutubeVideos(searchQuery){
     
    // We will use axios to make the API call
    const endpoint = 'http://127.0.0.1:5000/summarize'
    const bodyRequest = {
        "search_query": searchQuery, 
        "max_results": 2
    }

    return axiosInstance.post(endpoint, bodyRequest);
    
}