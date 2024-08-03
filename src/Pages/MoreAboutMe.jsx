import React from 'react'
import Me from '../assets/img/me.png'
import Motioneffect from '../components/Motioneffect'

import {Link} from 'react-router-dom'
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci"; 
import { LiaFacebookSquare } from "react-icons/lia";
import {motion} from "framer-motion";



function MoreAboutMe() {
  return (
    <div className='bg-[#0F0F0F] pt-14'>
        <div className='container grid grid-cols-1 gap-6 px-4 mx-auto space-y-5 md:grid-cols-3 lg:grid-cols-3 lg:px-10 md:container-md md:space-x-4 ' >

            

        <div>
        <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true, amount: 0.1 }}
                className='box-border sticky flex flex-col items-center col-span-1 p-6 space-y-10 top-10 md:col-span-1 lg:col-span-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>

            <div className='flex items-end shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl' >
                <img className='rounded-b-3xl' src={Me} alt="my photo" />
            </div>
            <div className='space-y-2 text-center'>
                <h2 className='text-3xl font-semibold text-white '>David Henderson</h2>
                <p className='text-lg text-slate-500'>@davidhenderson</p> 
            </div>
            <div className='flex space-x-3 text-2xl md:space-x-2 lg:space-x-3' >
                <div className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer bg-slate-800 shadow-black hover:bg-white hover:text-black'><TbWorld /></div>
                <div className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:text-black bg-slate-800 shadow-black hover:bg-white'><SlSocialTwitter /></div>
                <div className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:text-black bg-slate-800 shadow-black hover:bg-white'><CiInstagram /></div>
                <div className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:text-black bg-slate-800 shadow-black hover:bg-white'>< LiaFacebookSquare /></div>
            </div>
            <div className='w-full p-2 text-lg text-center text-white transition-all duration-300 shadow-sm hover:text-black focus:scale-90 bg-slate-800 hover:bg-white shadow-black rounded-3xl' >
                <Link to={"/Contact"} > Contact Me </Link>
            </div>

        </motion.div>
        </div>







            <div className='flex flex-col col-span-1 space-y-12 md:col-span-2 lg:col-span-2'>

                <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}>
                        
                    <h2 className='pb-8 text-xl font-semibold text-white uppercase'>About Me</h2>
                    <p className='text-lg text-gray-300 '>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>
                </motion.div>

                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='space-y-1'>
                    <h2 className='pb-8 text-xl font-semibold text-white uppercase'>EXPERIENCE</h2>
                    <p className='text-lg text-slate-400'>2007 - 2017</p>
                    <p className='text-[#5B78F6] text-xl font-semibold'>Framer Designer & Develope</p>
                    <p className='text-sm text-slate-400'>Bluebase Designs</p>
                    <p className='text-lg text-gray-300 '>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='space-y-1'>
                    <p className='text-lg text-slate-400'>2017 - 2023</p>
                    <p className='text-[#5B78F6] text-xl font-semibold'>Front-End Developer</p>
                    <p className='text-sm text-slate-400'>Larsen & Toubro</p>
                    <p className='text-lg text-gray-300 '>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='space-y-1'>
                    <h2 className='pb-8 text-xl font-semibold text-white uppercase'>Education</h2>
                    <p className='text-lg text-slate-400'>2004 - 2007</p>
                    <p className='text-[#5B78F6] text-xl font-semibold'>Bachelor Degree in Psychology</p>
                    <p className='text-sm text-slate-400'>University of California</p>
                    <p className='text-lg text-gray-300 '>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='space-y-1'>
                    <p className='text-lg text-slate-400'>2007 - 2009</p>
                    <p className='text-[#5B78F6] text-xl font-semibold'>Master Degree in Designing</p>
                    <p className='text-sm text-slate-400'>University of Texas</p>
                    <p className='text-lg text-gray-300 '>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                </motion.div>

                <div className='space-y-2'>
                    <motion.h2
                        initial={{ opacity: 0, y:50 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='pb-6 text-xl font-semibold text-white uppercase'>
                            Skills
                    </motion.h2>
                    <div className='grid grid-cols-1 grid-rows-1 gap-5 md:lg:grid-cols-2 md:lg:grid-rows-2'>

                        <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 1 }}
                             viewport={{ once: true, amount: 0.1 }}
                            className='space-y-5'>

                            <div>
                                <p className='text-slate-400'>85%</p>
                                <p className='text-xl font-semibold text-white'>JavaScript</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>
                            <div>
                                <p className='text-slate-400'>92%</p>
                                <p className='text-xl font-semibold text-white'>Figma</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>
                            <div>
                                <p className='text-slate-400'>81%</p>
                                <p className='text-xl font-semibold text-white'>React</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>

                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 1 }}
                             viewport={{ once: true, amount: 0.1 }}
                            className='col-span-1 space-y-5'>

                            <div>
                                <p className='text-slate-400'>78%</p>
                                <p className='text-xl font-semibold text-white'>Python</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>
                            <div>
                                <p className='text-slate-400'>90%</p>
                                <p className='text-xl font-semibold text-white'>WordPress</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>
                            <div>
                                <p className='text-slate-400'>87%</p>
                                <p className='text-xl font-semibold text-white'>Adobe XD</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>

                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, scale: 0.5 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 1 }}
                             viewport={{ once: true, amount: 0.1 }}
                            className='col-span-1 space-y-5'>

                            <h2 className='pt-6 pb-3 text-xl font-semibold text-white uppercase'>Awards</h2>
                            <div>
                                <p className='text-slate-400'>14 May 2020</p>
                                <p className='text-xl text-white'>Bluebase</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>
                            <div>
                                <p className='text-slate-400'>26 June 2018</p>
                                <p className='text-xl text-white'>Demble</p>
                                <p className='text-slate-400'>Non enim praesent</p>
                            </div>

                        </motion.div>

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Motioneffect (MoreAboutMe)