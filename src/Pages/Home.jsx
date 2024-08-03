import {useState, useRef } from 'react'
import Motioneffect from '../components/Motioneffect'
import myImg from '../assets/img/me.png'
import sign from '../assets/img/sign.png'
import work from '../assets/img/my-works.png'
import Gfonts from '../assets/img/gfonts.png'
import Icon2 from '../assets/img/icon2.png'

import { BiPowerOff } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { PiPencilCircle } from "react-icons/pi";
import { GiCircleSparks } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";

import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion} from 'framer-motion';





function Home() {
  
  
  const [CountOn,setCountOn] = useState(false);

   
  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>

      {/* first row start form here */}

        <div className='grid px-4 space-y-4 lg:space-x-5 md:container-md lg:grid-cols-2 md:grid-cols-1 md:space-y-3 lg:px-10'>

        
          <motion.div
                onClick={()=>{window.location.href = "/About";}}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className='box-border flex flex-wrap items-center justify-center space-x-6 space-y-4 cursor-pointer md:flex-nowrap sm:flex-nowrap lg:flex-nowrap p-9 group rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900'>
              <div className='w-[210px] h-[200px] flex shrink-0 items-end bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-tl-3xl rounded-br-3xl'>
                <img className='rounded-br-3xl w-[210px] h-[200px] '  src={myImg} alt="my photo" />
              </div>
              <div className='flex flex-col items-start space-y-3'>
                <p className='sm:self-start md:self-start lg:self-start text-slate-500'>A WEB DISIGNER</p>
                <h2 className='self-start text-5xl text-white'>Devid Henderson</h2>
                <p className='mt-3 sm:self-start md:self-start lg:self-start text-slate-500'>I am a web designer based in san francisco</p>
              </div>
              <div className='absolute flex items-end self-end text-5xl text-gray-700 right-9 sm:static lg:static md:static group-hover:text-white '> <BiPowerOff className='rotate-90' /></div>
          </motion.div>
         


        <div className='flex flex-col space-y-4 rounded-3xl md:basis-1/2 lg:basis-1/2 '>

          <motion.div 
                   
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1 }}
                   viewport={{ once: true, amount: 0.1 }}
                  className='container flex self-center justify-center w-full px-2 py-3 rounded-full md:items-center bg-gradient-to-r from-slate-700 to-slate-900' > 
                  <Marquee speed={60}> 
                      <p className='space-x-3 text-sm text-center uppercase text-slate-400'><span> *  leatest works and <span className='text-white' >featured</span></span>
                      <span> *  leatest works and <span className='text-white' >featured</span></span>
                            <span> *  leatest works and <span className='text-white'>featured</span></span>    
                      </p>
                  </Marquee> 
          </motion.div>

    <div className='grid gap-4 md:gap-y-4 md:grid-cols-2 lg:grid-cols-2'>

      <motion.div
               onClick={()=>{window.location.href = "/MoreAboutMe";}}
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true, amount: 0.1 }}
              className='box-border flex flex-col w-full h-full cursor-pointer group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
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



      <motion.div
              onClick={()=>{window.location.href = "/Work";}}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              className='box-border flex flex-col w-full h-full cursor-pointer group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
        <div className='flex items-center justify-center mb-4'>
          <img src={work} alt="my works" />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <p className='text-sm uppercase text-slate-500'>showcase</p>
            <p className='text-xl text-white'>projects</p>
          </div>
          <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
            <BiPowerOff className='rotate-90' />
          </div>
        </div>
      </motion.div>
    </div>
        </div>

        </div>



              {/* first row ends here */}

              {/* second row start from here */}


        <div className='container grid w-auto h-full grid-cols-1 gap-4 px-6 mx-auto lg:grid-cols-4 lg:px-10 md:container-md md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 '>


            <motion.div
                    onClick={()=>{window.location.href = "/Gfonts";}}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='box-border flex flex-col w-auto h-full cursor-pointer group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
                <div className='flex items-center justify-center mb-4'><img src={Gfonts} alt="img fonts here" /></div>

                <div className='flex flex-row items-center justify-between'>
                  <div>
                    <p className='text-sm uppercase text-slate-500'>blogs</p>
                    <p className='text-xl text-white'>GFonts</p>
                  </div>
                  <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
                    <BiPowerOff className='rotate-90' />
                  </div>
                </div>
            </motion.div>



            <motion.div
                     onClick={()=>{window.location.href = "/Services";}}
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                    className='box-border flex flex-col justify-between w-full h-full cursor-pointer lg:col-span-2 group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>

                <div className='flex flex-row items-center self-center justify-center p-4 mb-4 space-x-10 text-4xl text-white md:space-x-12 lg:space-x-24'>
                <FaCamera />
                <PiPencilCircle />
                <GiCircleSparks />
                <MdOutlineMobileFriendly />
                </div>

                <div className='flex flex-row items-center justify-between'>
                  <div>
                    <p className='text-sm uppercase text-slate-500'>Specialization</p>
                    <p className='text-xl text-white'>Services Offering</p>
                  </div>
                  <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
                    <BiPowerOff className='rotate-90' />
                  </div>
                </div>
            </motion.div>



            
            <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='box-border flex flex-col justify-between w-full h-full group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl md:col-span-2 lg:col-span-1 '>
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



        </div>



              {/*second row end here*/}


              {/* third row start from here */}


        <div className='container grid w-auto h-full grid-cols-1 gap-4 px-6 mx-auto lg:px-10 md:container-md lg:grid-cols-2 md:grid-cols-1 '>

          <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className='grid content-center grid-cols-1 gap-3 p-7 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl lg:grid-cols-3 md:grid-cols-3'>
            <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
            <div className='flex flex-col items-center justify-center p-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black '>
              {CountOn && <h1 className='pb-6 text-5xl text-white '>0<CountUp start={0} end={7} duration={5} /></h1>}
              <p className='text-sm font-medium uppercase text-slate-500'>YEARS</p>
              <p className='text-sm font-medium uppercase text-slate-500' >EXPERIENCE</p>
            </div>
            </ScrollTrigger>
            
            <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
            <div className='flex flex-col items-center justify-center p-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            {CountOn && <h1 className='pb-6 text-5xl text-center text-white '>+<CountUp start={0} end={125} duration={5} /></h1>}
              <p className='text-sm font-medium uppercase text-slate-500'>CLIENTS</p>
              <p className='text-sm font-medium uppercase text-slate-500'>WORLDWIDE</p>
            </div>
            </ScrollTrigger>
            
            <ScrollTrigger>
            <div className='flex flex-col items-center justify-center p-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            {CountOn && <h1 className='pb-6 text-5xl text-white '>+<CountUp start={0} end={210} duration={5} /></h1>}
              <p className='text-sm font-medium uppercase text-slate-500'>TOTAL</p>
              <p className='text-sm font-medium uppercase text-slate-500'>PROJECTS</p>
            </div>
            </ScrollTrigger>
          </motion.div>
          
          
          <motion.div
                  onClick={()=>{window.location.href = "/Contact";}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className='flex flex-col px-8 cursor-pointer bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl group '>
            <div><img src={Icon2} alt="div icon" /></div>
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

        </div>


              {/* third row ends here */}







    </div>
  )
}

export default Motioneffect(Home);