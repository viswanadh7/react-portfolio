import React, { useState } from 'react'
import { motion } from 'framer-motion'
// import { NavLink } from 'react-router-dom'
import resume from '../assets/Viswanadh_Fullstack.pdf'


function Navbar() {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '100%' }
    }
    const [sideBar, setsideBar] = useState(false)
    return (
        <>
            <motion.nav initial={{ y: -300 }} animate={{ y: 0 }} className='flex justify-between text-center items-center shadow-lg h-16 w-screen px-10 bg-white sticky top-0 z-50'>
                <div>
                    <a href='#home' className='text-2xl'>Viswanadh</a>
                </div>
                <div>
                    {/* <div className='hidden md:grid grid-flow-col gap-10'>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#home">Home</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#about">About</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#projects">Projects</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#contact">Contact</a>
                    </div> */}
                    <div className='hidden md:grid grid-flow-col gap-14'>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#home">Home</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#about">About</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#projects">Projects</a>
                        <a className='h-16 text-lg content-center hover:text-blue-700 cursor-pointer hover:border-b-2 border-blue-700' href="#contact">Contact</a>
                    </div>
                </div>
                <div>
                    <motion.a whileTap={{ scale: 0.8 }} className='border border-black px-3 py-2 rounded-lg font-semibold hidden md:block shadow-md' href={resume}>Download CV</motion.a>
                    <i onClick={() => setsideBar(!sideBar)} className={`fa-solid ${sideBar ? 'fa-xmark' : 'fa-bars'} md:hidden text-2xl cursor-pointer`}></i>
                </div>
            </motion.nav>
            <motion.div initial={{ x: '100%' }} animate={sideBar ? 'open' : 'closed'} variants={variants} transition={{ duration: 0.3 }} className='w-full right-0 sm:w-1/2 h-screen bg-gray-200 md:hidden fixed z-50'>
                <div className='flex flex-col'>
                    <a onClick={() => setsideBar(false)} className='h-20 pl-5 para content-center border-b border-black' href="#home">Home</a>
                    <a onClick={() => setsideBar(false)} className='h-20 pl-5 para content-center border-b border-black' href="#about">About</a>
                    <a onClick={() => setsideBar(false)} className='h-20 pl-5 para content-center border-b border-black' href="#projects">Projects</a>
                    <a onClick={() => setsideBar(false)} className='h-20 pl-5 para content-center border-b border-black' href="#contact">Contact</a>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar
