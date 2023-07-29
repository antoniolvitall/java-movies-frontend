import axios from 'axios';

export default axios.create({
    baseURL:'https://44b8-2804-14d-5c80-91e3-80cc-54b4-fb87-968a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});