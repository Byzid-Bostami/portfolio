import React from 'react'
import Motioneffect from '../components/Motioneffect'
import icon2 from '../assets/img/icon2.png'

import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {motion} from "framer-motion";






 
 function Contact() {

        const formik = useFormik({

          initialValues : {
                name:"",
                email:"",
                subject:"",
                message:""

          },
          onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values:""});
          },
          validationSchema: Yup.object({
            name: Yup.string()
              .min(2, 'Must be 2 characters or more')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            subject: Yup.string()
              .min(4, 'Must be 4 characters or more')
              .required('Required'),
            message: Yup.string()
              .min(50, 'Must be 50 characters or more')
              .required('Required'),
          }),

        });


   return (


     <div className='bg-[#0F0F0F] pt-14'>

        <div className='container grid grid-cols-1 gap-4 px-4 mx-auto space-y-5 md:grid-cols-3 lg:grid-cols-3 lg:px-10 md:container-md md:space-x-4 ' >


          <div className='flex flex-col col-span-1 text-white md:col-span-1 lg:col-span-1 space-y-14'>
            <div className='space-y-4 '>
              <motion.h1
                     initial={{ opacity: 0, y:50 }}
                     whileInView={{ opacity: 1, y:0 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                     className='text-lg font-semibold text-white uppercase'>
                      CONTACT INFO</motion.h1>
              <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                    className='flex flex-row items-center space-x-4'>
                <div className='text-3xl p-7 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900'><IoMailOutline /></div>
                <div>
                    <h2 className='text-slate-400'>MAIL US</h2>
                    <a className='text-base font-semibold text-white capitalize' href="mailto:info@bluebase.com">info@bluebase.com</a>
                    <br />
                    <a className='text-base font-semibold text-white capitalize' href="mailto:info@bluebase2.com">info@bluebase2.com</a>

                </div>
              </motion.div>

              <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true, amount: 0.1 }}
                     className='flex flex-row items-center pt-8 space-x-6'>
                <div className='text-3xl p-7 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900'><FaPhone /></div>
                <div>
                    <h2 className='text-slate-400'>CONTACT US</h2>
                    <p className='text-base font-semibold text-white capitalize'>+1 504-899-8221</p>
                    <p className='text-base font-semibold text-white capitalize'>+1 504-749-5456</p>

                </div>
              </motion.div>
              <motion.div
                       initial={{ opacity: 0, scale: 0.5 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 1 }}
                       viewport={{ once: true, amount: 0.1 }}
                      className='flex flex-row items-center pt-8 space-x-6 '>
                <div className='text-3xl p-7 rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900'><GoLocation /></div>
                <div>
                    <h2 className='text-slate-400'>LOCATION</h2>
                    <p className='text-base font-semibold text-white capitalize'>22 Baker Street, Texas</p>
                    <p className='text-base font-semibold text-white capitalize'>United States</p>
                    <p className='text-base font-semibold text-white capitalize'>W1U 3BW</p>

                </div>
              </motion.div>
            </div>

            <div className='space-y-5'>
              <motion.h1
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='text-lg font-semibold text-white uppercase'>SOCIAL INFO</motion.h1>
              <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='flex flex-row space-x-5'>
                <div className='p-6 text-4xl text-white transition-all duration-300 rounded-full cursor-pointer lg:p-6 lg:text-4xl md:text-3xl md:p-5 bg-slate-700 hover:text-black hover:bg-white'><TbWorld /></div>
                <div className='p-6 text-4xl text-white transition-all duration-300 rounded-full cursor-pointer lg:p-6 lg:text-4xl md:text-3xl md:p-5 bg-slate-700 hover:text-black hover:bg-white'><SlSocialTwitter /></div>
                <div className='p-6 text-4xl text-white transition-all duration-300 rounded-full cursor-pointer lg:p-6 lg:text-4xl md:text-3xl md:p-5 bg-slate-700 hover:text-black hover:bg-white'><CiInstagram /></div>
              </motion.div>
            </div>

          </div>








          <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                className='col-span-1 px-8 pb-8 space-y-4 lg:col-span-2 md:col-span-2 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>


            <div className='flex flex-row justify-between pb-2'>
              <h1 className='pt-8 text-5xl font-semibold text-white'>Let’s work <span className='text-[#5B78F6]'>togather.</span></h1>
              <img src={icon2} alt="icon2 image" />
            </div>

        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col w-full h-auto space-y-3'>
              <input
                className='p-4 shadow-sm text-slate-300 bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black focus:outline-none'
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              
              {formik.touched.name && formik.errors.name? (<span className='text-center text-red-500'>{formik.errors.name}</span>) : null }
              <input
                className='p-4 shadow-sm text-slate-300 bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black focus:outline-none'
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              
              {formik.touched.email && formik.errors.email? (<span className='text-center text-red-500'>{formik.errors.email}</span>) : null }
              <input
                className='p-4 shadow-sm text-slate-300 focus:outline-none bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black'
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Your Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              
              {formik.touched.subject && formik.errors.subject? (<span className='text-center text-red-500'>{formik.errors.subject}</span>) : null }
              <textarea
                className='p-4 shadow-sm resize-none text-slate-300 focus:outline-none bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-black'
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              
              {formik.touched.message && formik.errors.message? (<span className='text-center text-red-500'>{formik.errors.message}</span>) : null }
              <button
                className='p-4 text-xl text-white transition-all duration-300 shadow-sm rounded-xl hover:text-black bg-slate-700 shadow-black hover:bg-white'
                type="submit"
              >
                Send Message
              </button>
            </form>
        </div>



          </motion.div>


        </div>
          
     </div>
   )
 }
 
 export default Motioneffect (Contact)