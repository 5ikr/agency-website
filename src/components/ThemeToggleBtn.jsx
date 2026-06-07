import React from 'react'
import assets from '../assets/assets'
import { useEffect } from 'react'
import { motion } from 'motion/react'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        const prefersDark = window.matchMedia('(prefers-color-scheme:dark').matches
        setTheme(theme || (prefersDark ? 'dark' : 'light'))
    },[])

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

    return (
        <>
            <motion.button initial={{opacity:0, x: 20}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay: 0.9}} viewport={{once:true}} className='cursor-pointer transition-all duration-100'>
                {theme === 'dark' ? (
                    <img onClick={()=> setTheme('light')} src={assets.sun_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full" alt='' />
                ) : (
                    <img onClick={()=> setTheme('dark')} src={assets.moon_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full" alt='' />
                )} 
            </motion.button>
        </>
    )
}

export default ThemeToggleBtn
