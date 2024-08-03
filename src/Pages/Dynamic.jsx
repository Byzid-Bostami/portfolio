import React from 'react'
import project3 from '../assets/img/project3-1.jpeg'

import { useLocation } from 'react-router-dom'

function Dynamic() {

    const location = useLocation();

  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>


        <div className='container flex flex-col items-center px-4 py-6 mx-auto space-y-4 text-white bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl md:container-md lg:px-10'>
            <img className='rounded-3xl' src={project3} alt="project" />
            
            <h1 className='text-3xl font-semibold text-slate-300'>{location.state.title}</h1>
            <p className='text-justify'>{location.state.body}</p>

        </div>


    </div>
  )
}

export default Dynamic