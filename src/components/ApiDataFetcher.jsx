

import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiDataFetcher = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
   
  axios.defaults.baseURL ='https://api.unsplash.com';

  const fetchData = async (url) =>{
    try{
       setIsLoading(true);
       const res= await axios(url);
       setResponse(res.data.results);
    }catch(err){
        setError(err)
    }finally{
        setIsLoading(false) 
    }
  }

  useEffect(()  =>{
    fetchData(param);
  },[param])

  return{
    response,
    isLoading,
    error,
    fetchData :url =>fetchData(url)
  }
  
  // useEffect(() => {
  //   // Replace with your API URL
  //   const apiUrl = 'https://api.unsplash.com';

  //   axios.get(apiUrl)
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data: {error.message}</p>;

  // return (
  //   <div>
  //     <h1>Data from API</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
 // );
};

export default ApiDataFetcher;
