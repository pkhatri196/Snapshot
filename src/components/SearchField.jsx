import React from 'react'
import { useState,useContext } from 'react';
import { ImageContext } from '../App'


const SearchField = () => {
    const [searchValue,setSearchValue] = useState("");
    const {fetchData,setSearchImage}= useContext(ImageContext);
    const handleInputChange =(e) =>{
        setSearchValue(e.target.value)
    }

    const handleButtonSearch = () =>{
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=1PhC_Ic-YUowKi7uOuZj-qBjWMD6P-DyVi0mg6FRFx8`)
        setSearchValue("");
        setSearchImage(searchValue);
    }

    const handleEnterSearch=(e)=>{
        if(e.key==='Enter'){
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=1PhC_Ic-YUowKi7uOuZj-qBjWMD6P-DyVi0mg6FRFx8`)
            setSearchValue("");
            setSearchImage(searchValue);
        }

    }

  return (
    <div className="flex ">
       <input type="text" className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl" placeholder="Search.."
       value={searchValue}
       onChange={handleInputChange}
       onKeyDown={handleEnterSearch}
       ></input>
       <button className="outline rounded-tr rounded-br p-2 text-white bg-gray-400 focus:bg-blue-950"
       onClick={handleButtonSearch}
       disabled={!searchValue}
       >Search</button>
       </div>
  )
}

export default SearchField
