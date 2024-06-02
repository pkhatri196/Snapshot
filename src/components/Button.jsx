import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-950 text-white font-bold py-2 px-4 m-4 rounded'>{props.text}</button>
  )
}

export default Button
