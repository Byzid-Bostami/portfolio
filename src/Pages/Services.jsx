import React from 'react'
import Motioneffect from '../components/Motioneffect';
import icon2 from '../assets/img/icon2.png'
import sign from '../assets/img/sign.png'


import { FaCamera } from "react-icons/fa";
import { PiPencilCircle } from "react-icons/pi";
import { GiCircleSparks } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { BiPowerOff } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import {motion} from "framer-motion";



function Services() {
  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>
        
        {/* first row start from here */}


        <div className='container grid w-auto h-full grid-cols-1 gap-4 px-6 mx-auto lg:grid-cols-3 lg:px-10 md:container-md md:grid-cols-3'>


            <motion.div
                    onClick={()=>{window.location.href = "/MoreAboutMe";}}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='flex flex-col items-start col-span-1 pl-12 pr-5 space-y-6 md:pl-4 lg:pl-20 justify-evenly rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 py-7'>

                <div className='flex items-center space-x-10 text-white'><FaCamera className='text-3xl' /> <p className='text-lg '>PHOTOGRAPHY</p></div>
                <div className='flex items-center space-x-10 text-white'><PiPencilCircle className='text-3xl' /> <p className='text-lg '>WEB DESIGNING</p></div>
                <div className='flex items-center space-x-10 text-white'><GiCircleSparks className='text-3xl' /> <p className='text-lg '>BRANDING</p></div>
                <div className='flex items-center space-x-10 text-white'><MdOutlineMobileFriendly className='text-3xl' /> <p className='text-lg '>DEVELOPMENT</p></div>
                
            </motion.div>



            <div className='flex flex-col items-center col-span-1 space-y-5 md:col-span-2 lg:col-span-2'>

                <motion.div
                        initial={{ opacity: 0, y:50 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }} className='flex flex-row self-center space-x-3 text-3xl font-semibold lg:text-6xl md:text-5xl text-slate-500 group'>
                        <LuSunMoon className='group-hover:animate-spin ' /><h1 className='text-white '>MY OFFERINGS</h1><LuSunMoon className='group-hover:animate-spin ' />
                </motion.div>

                <motion.div
                        onClick={()=>{window.location.href = "/MoreAboutMe";}}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='grid grid-cols-1 grid-rows-1 gap-5 p-6 rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 md:lg:grid-cols-2 md:lg:grid-rows-2'>
                    <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black' >
                        <p className='text-slate-400'>PHOTOGRAPHY</p>
                        <p className='text-gray-300'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                    </div>

                    <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
                        <p className='text-slate-400'>WEB DESIGNING</p>
                        <p className='text-gray-300'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                    </div>

                    <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
                        <p className='text-slate-400'>BRANDING</p>
                        <p className='text-gray-300'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                    </div>

                    <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
                        <p className='text-slate-400'>DEVELOPMENT</p>
                        <p className='text-gray-300'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                    </div>
                </motion.div>

            </div>

        </div>


        {/* first row ends here */}

        {/* Second row start from here */}

        <div className='container grid w-auto h-full grid-cols-1 grid-rows-1 gap-4 px-4 mx-auto space-y-4 lg:gap-4 md:container-md lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 md:space-y-0 lg:px-10'>
      
      <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
             className='box-border flex flex-col justify-between w-full h-full group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl md:col-span-1 lg:col-span-1 '>
          <div className='flex items-center justify-center p-4 mb-4 shadow-sm space-x-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white bg-slate-700 shadow-black '><TbWorld /></button>
            <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white shadow-black bg-slate-700 '><SlSocialTwitter /></button>
          </div>

          <div className='flex flex-row items-center justify-between'>
            <div>
              <p className='text-sm uppercase text-slate-500'>STAY WITH ME</p>
              <p className='text-xl text-white'>Profiles</p>
            </div>
            <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
              <BiPowerOff className='rotate-90' />
            </div>
          </div>
      </motion.div>



      <motion.div
               onClick={()=>{window.location.href = "/Contact";}}
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true, amount: 0.1 }}
              className='flex flex-col px-8 cursor-pointer lg:col-span-2 md:col-span-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl group '>
          <div><img src={icon2} alt="div icon" /></div>
          <div className='flex justify-between pb-8'>
              <div className='text-5xl text-white'>
                <p>Let's</p>
                <p>Work <span className='text-[#5B78F6]'>together.</span></p>
              </div>
              <div className='self-end text-4xl text-gray-700 group-hover:text-white'>
                    <BiPowerOff className='rotate-90' />
              </div>
      </div>
    </motion.div>



    <motion.div
           onClick={()=>{window.location.href = "/MoreAboutMe";}}
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true, amount: 0.1 }}
          className='box-border flex flex-col w-full h-full cursor-pointer lg:col-span-1 md:col-span-2 group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
        <div className='flex items-center justify-center mb-4'>
          <img src={sign} alt="my sign" />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <p className='text-sm uppercase text-slate-500'>more about me</p>
            <p className='text-xl text-white'>Credentials</p>
          </div>
          <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
            <BiPowerOff className='rotate-90' />
          </div>
        </div>
    </motion.div>




</div>

        {/* Second row ends here */}

    </div>
  )
}

export default Motioneffect (Services)