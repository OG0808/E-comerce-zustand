import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  
  const getApi = () => {
    axios.get(url)
    .then(res => setData(res.data))
    .catch(error => console.log(error))
 }
  return [ data,  getApi ];
};

export default useFetch;
