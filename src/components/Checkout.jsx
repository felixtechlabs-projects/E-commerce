import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
   <div className='flex flex-col mt-4 h-screen '> 
    <h1 className='text-3xl font-bold'> Your order is successfully placed. </h1>
    <br />
    <Link className='border p-2 m-3 bg-blue-700 text-white w-45 text-center' to={"/"}> Continue Shopping </Link>
   </div>
  )
}

export default Checkout