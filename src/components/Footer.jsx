import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='bg-[#0F0F0F] flex flex-col justify-center items-center space-y-4 p-14'>

    <Link to="/"><h1 className='text-4xl font-semibold text-white'>GridX</h1> </Link>
    <p className='flex flex-row flex-wrap justify-center md:flex-nowrap lg:flex-nowrarp text-slate-500 '> &copy;All rights reserved by <span className='pl-1 font-semibold text-green-400'>BYZID BOSTAMI </span></p>
        


    </div>
  )
}

export default Footer