import { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../utils/api';


const useFetch = (url_last)=>{
    const [data, setData] = useState();


    useEffect(()=>{
        makeApiCall();
    }, [url_last]);


    const makeApiCall = async()=>{
        const res = await fetchDataFromAPI(url_last);
        setData(res);
    }


    return {data};    
}

export default useFetch;