import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ url, name, link }) {
    return (
        <>
            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} style={{ backgroundSize: "cover", backgroundImage: `url(${url})` }} className='h-80 w-full text-center hover:scale-105 duration-300 hover:shadow-lg hover:shadow-black rounded-2xl md:hidden'>
                <div className='bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-black hover:to-transparent h-full pt-52 rounded-2xl'>
                    <h1 className='text-2xl text-white mb-5'>{name}</h1>
                    <a className='border border-white rounded-lg px-5 py-2 text-white hover:px-7 duration-300' href={link}>Live Demo</a>
                </div>
            </motion.div>
            <div style={{ backgroundSize: "cover", backgroundImage: `url(${url})` }} className='h-80 w-full text-center hover:scale-105 duration-300 hover:shadow-lg hover:shadow-black rounded-2xl hidden md:block'>
                <div className='bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-black hover:to-transparent h-full pt-52 rounded-2xl'>
                    <h1 className='text-2xl text-white mb-5'>{name}</h1>
                    <a className='border border-white rounded-lg px-5 py-2 text-white hover:px-7 duration-300' href={link}>Live Demo</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
