import React from 'react'
import Navbar from '../components/Navbar'

const Product = () => {
  return (
    <div className='bg-gray-500 h-screen w-full bg-linear-to-b from-black/70 to-black/20'>
           <div className='bg-black-80 h-screen w-full flex flex-col'>
           <Navbar />
           <div className='flex flex-row items-center justify-center w-full h-min pt-10 pl-90 gap-10'>
              <img className='w-80 rounded-4xl shadow-2xl shadow-black' src="paris-7539257.jpg" alt="eyfel" />
              <div className='flex flex-col items-start gap-5'>
                <h1 className='text-white text-4xl font-bold'>About Us</h1>
                <p className='text-white w-[45%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod fringilla justo, sit amet posuere est. Sed nec tellus sit amet velit luctus aliquet. Nullam et faucibus dui. </p>
              </div>
           </div>
           </div>
    </div>
  )
}

export default Product
