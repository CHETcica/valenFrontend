import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID yWR7Cz4mtXHKPptC2VFdF6c5ENCKp5OlsBqnfwkYMpA',
  },
});
