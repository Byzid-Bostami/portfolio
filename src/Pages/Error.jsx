import React from 'react'
import Motioneffect from '../components/Motioneffect';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className='bg-[#0F0F0F] flex flex-col justify-center items-center w-screen h-auto md:h-screen lg:h-auto p-10'>

        <h1 className='font-semibold text-neutral-200 text-[180px] md:text-[230px] lg:text-[230px]'>404</h1>
        <p className='pb-4 capitalize text-slate-400'>Oops somethings went wrong</p>
        <Link to="/" className='p-2 text-sm text-white capitalize transition-all duration-300 rounded-full shadow-sm hover:bg-white hover:text-black hover:scale-110 active:scale-90 bg-slate-700'>back to home </Link>

    </div>
  )
}

export default Motioneffect(Error);