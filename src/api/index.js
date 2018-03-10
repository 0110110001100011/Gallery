import axios from '../../node_modules/axios';

const URL = 'https://jsonplaceholder.typicode.com/photos';

export default function API_getPhotos() {
  return axios.get(URL)
    .then(response => response.data);
}
