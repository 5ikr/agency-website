import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({theme}) => {
    return (
        <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
            
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <motion.img initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}} src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='' className='w-32 sm:w-44' />
                    <motion.p initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}} className='max-w-md'>From strategy to execution, we craft digital solutions</motion.p>

                    <ul className='flex gap-8'>
                        <motion.li initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}}><a className='hover:text-primary' href="#">Home</a></motion.li>
                        <motion.li initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.25}} viewport={{once:true}}><a className='hover:text-primary' href="#services">Services</a></motion.li>
                        <motion.li initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.3}} viewport={{once:true}}><a className='hover:text-primary' href="#our-work">Our Work</a></motion.li>
                        <motion.li initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.35}} viewport={{once:true}}><a className='hover:text-primary' href="#contact-us">Contact Us</a></motion.li>
                    </ul>
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                    <motion.h3 initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}} className='font-semibold'>Subscribe to our newsletter</motion.h3>
                    <motion.p initial={{opacity:0, x: 50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}} className='text-sm mt-2 mb-6'>The latest News, articles and resources, sent to your inbox weekly.</motion.p>
                    <div className='flex gap-2 text-sm'>
                        <motion.input initial={{opacity:0, x: 30}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.25}} viewport={{once:true}} type="email" placeholder='Enter to your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
                        <motion.button initial={{opacity:0, x: 30}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.25}} viewport={{once:true}} type='submit' className='bg-primary cursor-pointer hover:bg-primary/50 text-white rounded px-6'>Subscribe</motion.button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 dark:border-gray-600 my-6' />

            <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
                <motion.p initial={{opacity:0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{duration:0.5, delay: 0.2}} viewport={{once:true}}>Copyright 2026 © agency.io - All Rights Reserved</motion.p>
                <div className='flex items-center justify-between gap-4'>
                    <motion.img initial={{opacity:0, scale: 1.1}} whileInView={{opacity:1, scale: 1}} transition={{duration:0.2, delay: 0.2}} viewport={{once:true}} src={assets.facebook_icon} className='hover:scale-110 cursor-pointer' alt="" />
                    <motion.img initial={{opacity:0, scale: 1.1}} whileInView={{opacity:1, scale: 1}} transition={{duration:0.2, delay: 0.25}} src={assets.twitter_icon} className='hover:scale-110 cursor-pointer' alt="" />
                    <motion.img initial={{opacity:0, scale: 1.1}} whileInView={{opacity:1, scale: 1}} transition={{duration:0.2, delay: 0.3}} src={assets.instagram_icon} className='hover:scale-110 cursor-pointer' alt="" />
                    <motion.img initial={{opacity:0, scale: 1.1}} whileInView={{opacity:1, scale: 1}} transition={{duration:0.2, delay: 0.35}} src={assets.linkedin_icon} className='hover:scale-110 cursor-pointer' alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer
