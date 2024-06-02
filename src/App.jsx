import { useState } from 'react'
import Button from './components/Button'
import Top from './components/Top'
import SearchField from './components/SearchField';
import ImageTitle from './components/ImageTitle'
import ApiDataFetcher from './components/ApiDataFetcher';
import { createContext } from 'react';

//Create Context API 

export const ImageContext = createContext();

function App() {
  const [searchImage,setSearchImage] = useState("");
  const {response,isLoading,error,fetchData} = ApiDataFetcher(`search/photos?page=1&query=office&client_id=1PhC_Ic-YUowKi7uOuZj-qBjWMD6P-DyVi0mg6FRFx8`);

  const value={
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
   <div className="self-center">
       <Top/>
    <SearchField/>
    <div className='flex mt-4 justify-center '>  
      <Button text="Mountains"/>
      <Button text="Beaches"/>
      <Button text="Birds"/>
      <Button text="Food"/>
    </div>
    <ImageTitle/>
    <br/>
   </div>
    </ImageContext.Provider>
  )
}

export default App
