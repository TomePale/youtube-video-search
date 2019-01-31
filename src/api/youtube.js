import axios from 'axios';

const KEY = 'AIzaSyC9hv6dvJ2CBeypjdnu9CCihcLf_6Z9PE0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
