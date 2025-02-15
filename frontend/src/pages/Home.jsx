import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'

const Home = () => {
  return (
  <div className="bg-cover h-[100vh] bg-linear-to-b from-black/50 to-black/50" style={{ backgroundImage: "url('/foto.jpg')" }}>
    <div className="min-h-screen bg-black/80 ">
     <Navbar />
     <div>
      <div className="flex flex-col items-center justify-center  gap-3 h-max mt-45">
        <h1 className="text-4xl text-white font-bold">Welcome to the best place for your business</h1>
        <p className="text-white w-[45%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod fringilla justo, sit amet posuere est. Sed nec tellus sit amet velit luctus aliquet. Nullam et faucibus dui. </p>
        <Link to="/login"><button className="bg-white text-black font-bold py-2 px-4 rounded mt-5 hover:bg-black hover:text-white hover:border-black cursor-pointer">Get Started</button></Link>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default Home
