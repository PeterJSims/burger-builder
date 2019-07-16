import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-d79c1.firebaseio.com/'
});

export default instance;
