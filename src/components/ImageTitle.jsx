import React from 'react'
import { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image'
import Skeleton from './Skeleton'



const ImageTitle = () => {
  const {response,isLoading,searchImage} = useContext(ImageContext)
  return (
    <>
      <h2 className="text-center mt-6 text-4xl text-bold">{searchImage ||"Mountain Pictures"}</h2>

    <div className="grid md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
       {isLoading? <Skeleton/> :response.map((data,key)=> <Image key={key} data={data}/>)}
    </div>
    </>
    
  )
}

export default ImageTitle
