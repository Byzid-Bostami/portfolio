import React, { useState } from 'react';
import Motioneffect from '../components/Motioneffect';
import { LuSunMoon } from "react-icons/lu";
import blog1 from '../assets/img/blog1.jpeg';
import {motion} from "framer-motion";


function Gfonts() {
  const [comments, setComments] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') return;
    setComments([...comments, formData]);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>
      <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className='container flex flex-row self-center w-full h-auto px-4 mx-auto space-x-3 text-3xl font-semibold pb-14 lg:px-10 md:container-md lg:text-6xl md:text-5xl text-slate-500 group'>
        <LuSunMoon className='group-hover:animate-spin ' />
        <h1 className='text-white '>CONSULTED ADMITTING IS POWER ACUTENESS.</h1>
        <LuSunMoon className='group-hover:animate-spin ' />
      </motion.div>

      <div className='container grid w-full grid-cols-1 gap-10 px-4 mx-auto md:lg:grid-cols-3 lg:px-10 md:container-md'>
        <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              className='col-span-1 space-y-7 md:lg:col-span-2'>
          <div className='w-full'><img className='w-full' src={blog1} alt="blog1" /></div>

          <div className='space-y-4 text-white '>
            <p className='text-lg text-blue-600'>June 9, 2023 - Uncategorized</p>
            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. <br /> <br />

              Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Giy direction neglected but supported yet her. <br /> <br />

              New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>

            <p className='text-lg text-slate-500'>– Pretty merits waited six</p>
            <p className='text-lg text-slate-500'>– General few civilly amiable pleased account carried.</p>
            <p className='text-lg text-slate-500'>– Continue indulged speaking</p>
            <p className='text-lg text-slate-500'>– Narrow formal length my highly</p>
            <p className='text-lg text-slate-500'>– Occasional pianoforte alteration unaffected impossible</p>

            <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>
          </div>

          <div className='flex space-x-5'>
            <button className='px-5 py-2 text-white transition-all duration-300 hover:text-black bg-slate-700 hover:bg-white rounded-3xl focus:scale-90'>Development</button>
            <button className='px-5 py-2 text-white transition-all duration-300 hover:text-black bg-slate-700 hover:bg-white rounded-3xl focus:scale-90'>SASS</button>
          </div>

          <div className='p-10 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-2xl text-white'>Comments</p>
            <p className='text-2xl text-white '>LEAVE A REPLY</p>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <textarea onChange={handleChange} className='w-full p-4 space-y-3 shadow-sm resize-none bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black text-slate-300 focus:outline-none' name="message" id="message" rows={5} placeholder="Your message" value={formData.message} required></textarea>
              <input onChange={handleChange} className='w-full p-4 space-y-3 shadow-sm bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black text-slate-300 focus:outline-none' type="text" id="name" name="name" placeholder="Name" value={formData.name} required />
              <input onChange={handleChange} className='w-full p-4 space-y-3 shadow-sm bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black text-slate-300 focus:outline-none' type="email" id="email" name="email" placeholder='Email' value={formData.email} required />
              <p></p>
              <button className='w-full p-3 text-lg text-white transition-all duration-300 shadow-sm hover:text-black bg-slate-800 shadow-black hover:bg-white rounded-xl' type="submit">Send Message</button>
            </form>
          </div>
        </motion.div>






        <div className='flex flex-col col-span-1 space-y-10'>
          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className='flex flex-col justify-center px-8 py-16 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-slate-300'>Search</p>
            <form className='relative'>
              <input className='w-full p-4 rounded-lg' type="search" name="search" id="search" />
              <button className='absolute right-3 top-[15%] text-center px-5 py-2 text-white bg-blue-600 rounded-lg hover:text-black' type="submit">Search</button>
            </form>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              className='flex flex-col justify-center px-8 py-12 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-4xl text-slate-300'>Recent Posts</p>
            <p className='text-gray-200'>Discovery incommode earnestly he commanded</p>
            <hr />
            <p className='text-gray-200'>Unsatiable entreaties may collecting Power.</p>
            <hr />
            <p className='text-gray-200'>Consulted admitting is power acuteness.</p>
          </motion.div>

          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className='px-8 py-12 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-4xl text-slate-300'>Recent Comments</p>
            {comments.length > 0 ? (
              comments.map((item, index) => (
                <div className='p-3 shadow-sm shadow-black bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl' key={index}>
                  <h1 className='text-xl capitalize text-slate-300'>{item.name}</h1>
                  <p className='text-lg text-slate-400'>{item.message}</p>
                </div>
              ))
            ) : (
              <p className='text-lg text-slate-300'>No one has commented yet</p>
            )}
          </motion.div>

          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                className='px-8 py-12 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-4xl text-slate-300'>Archives</p>
            <p className='text-sm text-slate-400'>June 2023</p>
          </motion.div>

          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                className='px-8 py-12 space-y-3 shadow-sm bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <p className='text-4xl text-slate-300'>Categories</p>
            <p className='text-sm text-slate-400'>uncategorize</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Motioneffect(Gfonts);
