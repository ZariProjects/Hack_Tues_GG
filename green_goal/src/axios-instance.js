import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://green-goal-5234f-default-rtdb.firebaseio.com/'
});

export default instance;