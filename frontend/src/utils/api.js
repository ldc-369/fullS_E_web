import axios from 'axios';


export const BASE_URL = 'http://localhost:1337';
const REACT_APP_STRIPE_API_KEY = process.env.REACT_APP_STRIPE_API_KEY;


const params = {
    headers: {
        Authorization: 'bearer ' + REACT_APP_STRIPE_API_KEY
    }
}


export const fetchDataFromAPI = async(url_last)=>{
    try {
        const {data} = await axios.get(BASE_URL + url_last, params);
        return data;
    } catch(err) {
        console.log(err);
        return err;
    }
}


export const paymentRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'bearer ' + REACT_APP_STRIPE_API_KEY
    }
});