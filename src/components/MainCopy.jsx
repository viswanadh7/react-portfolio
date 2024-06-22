import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import img from '../assets/nobgimg-compressed.png'
import resume from '../assets/Viswanadh_Fullstack.pdf'

import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

// import { FaReact } from "react-icons/fa";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaNode } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
// import { BiLogoMongodb } from "react-icons/bi";
// import { DiMysql } from "react-icons/di";

function MainCopy() {
    const [skill, showSkills] = useState(true)
    const [education, showEducation] = useState(false)
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })

    const skillVariants = {
        open: { opacity: 1, x: 0, height: 0 },
        closed: { opacity: 1, x: '-100%', height: 0 }
    }
    const educationVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 1, x: '100%' }
    }
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
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const message = `New form submission:\n\n\nName: ${contactForm.name}\n\nEmail: ${contactForm.email}\n\nMessage: ${contactForm.message}`;
            const telegramBotToken = '7253968320:AAHF63IW9wmYulph3qxf4iutbUBn836UML8';
            const telegramChatId = '-1002192507379';

            await axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                params: {
                    chat_id: telegramChatId,
                    text: message,
                }
            });
            toast.success(`Thank you ${contactForm.name} for contacting me. I'll get back to you as soon as possible.`)
            setContactForm({ name: '', email: '', message: '' })

        } catch (error) {
            //console.log(error);
            toast.error('Failed to send. Please try again')
        }
    }
    return (
        <>
            <Navbar />
            <section id='home' className='min:h-screen md:h-screen grid md:grid-cols-2 items-center justify-items-center p-10 gap-5 md:gap-10 lg:gap-40'>
                {/* <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='md:order-2 mt-10 md:mt-0 lg:flex lg:ml-auto'>
                    <img className='h-80 lg:h-96 w-fit border-2 border-black rounded-3xl shadow-xl shadow-gray-400' src={img} alt="" />
                </motion.div> */}
                <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='md:order-2 mt-10 md:mt-0 lg:flex lg:ml-auto hidden md:block'>
                    <img className='h-80 lg:h-96 w-fit border-2 border-black rounded-3xl shadow-xl shadow-gray-400' src={img} alt="" />
                </motion.div>
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className='mt-10 md:mt-0 md:hidden'>
                    <img className='h-80 w-fit border-2 border-black rounded-3xl shadow-xl shadow-gray-400' src={img} alt="" />
                </motion.div>
                <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='md:order-1'>
                    <h1 className='heading'>Viswanadh Mudunuru</h1>
                    <p className='para my-3'>Welcome to my Fullstack Developer portfolio! I'm Viswanadh, a skilled and creative fullstack developer with a passion for crafting robust, efficient, and user-centric applications. I've contributed to a wide range of projects, from complex applications to innovative solutions.</p>
                    <button className='border border-black px-3 py-2 shadow-lg rounded-lg font-semibold md:hidden hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 duration-300'><a href={resume}>Download CV</a></button>
                </motion.div>
            </section>
            <section id='about' className='h-fit grid grid-cols-1 lg:grid-cols-2 gap-20 p-10 md:p-10'>
                <div className=''>
                    <h1 className='heading'>About</h1>
                    {/* <p className='para mt-5'>Enthusiastic and dedicated fresher with a strong passion and demonstrated skills in fullstack development. Armed with a solid foundation in programming languages such as Python, I excel at transforming complex concepts into functional and efficient software solutions. My proficiency in software architecture and design principles enables me to craft scalable and user-centric applications, driven by a deep understanding of user needs and industry standards.<br />My passion for learning and staying current with the latest advancements in fullstack development fuels my ongoing pursuit of knowledge. As a self-driven individual, I am eager to contribute my technical prowess and imaginative problem-solving abilities to an innovative fullstack development team. I firmly believe that my dedication to excellence and creative problem-solving will position me as a valuable contributor in delivering outstanding software solutions.</p> */}
                    <p className='para mt-5'>Enthusiastic and dedicated developer with a strong foundation in fullstack development. Proficient in React.js, I have honed my skills in Axios for seamless API interactions, utilized interceptors for efficient request/response handling, and integrated advanced state management using React Query and Formik for robust form solutions. Additionally, I have mastered advanced routing techniques to optimize application navigation and user experience. My expertise extends to Tailwind CSS, where I've achieved proficiency in designing responsive and visually appealing interfaces. I am well-versed in version control using Git and GitHub, contributing effectively to collaborative projects and ensuring code integrity throughout development cycles.<br /><br />My experience at Online Hoja has not only strengthened my technical skills but also enhanced my ability to thrive in dynamic project environments. I am eager to leverage my diverse skill set and passion for innovation to contribute positively to impactful software projects. With a keen eye for detail and a dedication to continuous improvement, I am prepared to tackle new challenges and deliver exceptional results in fullstack development.</p>
                </div>
                <div className='overflow-x-hidden'>
                    <div className='flex justify-between'>
                        <h1 onClick={() => { showEducation(false); showSkills(true) }} className={`heading cursor-pointer ${skill ? 'text-blue-700 border-b-2 border-blue-700' : ''}`}>Skills</h1>
                        <h1 onClick={() => { showEducation(true); showSkills(false) }} className={`heading cursor-pointer ${education ? 'text-blue-700 border-b-2 border-blue-700' : ''}`}>Education</h1>
                    </div>
                    <motion.ul animate={skill ? 'open' : 'closed'} variants={skillVariants} className='grid grid-cols-3 sm:place-items-center lg:place-items-start gap-x-2 gap-y-16 sm:gap-14 lg:gap-20 mt-10 text-xl font-light'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </motion.ul>
                    <motion.div animate={education ? 'open' : 'closed'} variants={educationVariants} className='para'>
                        <div className='mb-10'>
                            <h1 className='flex'>Bachelor of Technology <span className='ml-auto hidden sm:block'>2019-2023</span></h1>
                            <p className='font-light text-md'>Gudlavalleru Engineering College</p>
                            <span className='sm:hidden'>2019-2023</span>
                        </div>
                        <div className='my-10'>
                            <h1 className='flex'>Secondary Education <span className='ml-auto hidden sm:block'>2017-2019</span></h1>
                            <p className='font-light text-md'>Sri Chaitanya Jr. College</p>
                            <span className='sm:hidden'>2017-2019</span>
                        </div>
                        <div className='my-10'>
                            <h1 className='flex'>10th <span className='ml-auto hidden sm:block'>2016-2017</span></h1>
                            <p className='font-light text-md'>National High School</p>
                            <span className='sm:hidden'>2016-2017</span>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section id='experience' className='p-10'>
                <h1 className='heading my-5'>Experience</h1>
                <p className='para font-semibold'>ReactJS Developer</p>
                <a href='https://www.onlinehoja.com/' target='_blank' rel="noreferrer" className='para font-semibold underline'>Online Hoja <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></a>
                <p className='para font-semibold'>January 2024 - Present</p>
                <ul className='para list-disc ml-5 mt-5 flex flex-col gap-5'>
                    <li>Advanced proficiency in React.js: Developed skills in React.js at Online Hoja, gaining expertise in Axios, Axios interceptors, Tanstack Query, Formik, and advanced routing techniques.</li>
                    <li>Proficient in Tailwind CSS: Acquired advanced knowledge of Tailwind CSS, effectively utilizing its utility-first approach to streamline UI development and enhance front-end design aesthetics.</li>
                    <li>Hands-on experience with Git and GitHub: Successfully collaborated on projects using Git version control system and GitHub for code repository management, demonstrating proficiency in branch management, merging, and collaborative workflows.</li>
                    <li>Project contribution and teamwork: Actively participated in team projects, contributing to the development and deployment phases, showcasing strong teamwork and collaboration skills in an agile environment.</li>
                    <li>Problem-solving and adaptation: Developed a knack for troubleshooting and adapting solutions to meet project requirements, demonstrating flexibility and a proactive approach in resolving technical challenges.</li>
                </ul>
            </section>
            <section id='projects' className='min:h-screen p-10'>
                <h1 className='heading my-5'>Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                    {/* <ProjectCard url='https://images.pexels.com/photos/15955380/pexels-photo-15955380/free-photo-of-fancy-restaurant-food-on-table.jpeg?auto=compress&cs=tinysrgb&w=600' name='Retaurant Landing Page' link='https://elaborate-syrniki-a20d03.netlify.app/' /> */}

                    <ProjectCard url='https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600' name='Travel Booking Website' link='https://magenta-cassata-546ebd.netlify.app/' />

                    <ProjectCard url='https://images.pexels.com/photos/13632832/pexels-photo-13632832.jpeg?auto=compress&cs=tinysrgb&w=600' name='Fashion Website' link='https://prismatic-mermaid-1cf30e.netlify.app/' />

                    <ProjectCard url='https://images.pexels.com/photos/13722887/pexels-photo-13722887.jpeg?auto=compress&cs=tinysrgb&w=600' name='Interior Designer Website' link='https://react-interior.netlify.app/' />
                </div>
            </section>
            <section id='contact' className='h-fit'>
                <div className='p-10 grid grid-cols-1 md:grid-cols-2 md:gap-20'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='heading'>Contact Me</h1>
                        <p className='para my-3'>Your communication is important to me, so feel free to get in touch anytime. I'm eager to connect and explore how we can work together. You can reach out to me via email or give me a call.</p>
                        <a className='text-md sm:text-lg hover:scale-105 origin-left duration-200 w-fit' href="mailto:mudunuruviswanadh@gmail.com"><i className="fa-solid fa-envelope mr-3"></i> mudunuruviswanadh@gmail.com</a>
                        <a className='text-md sm:text-lg hover:scale-105 origin-left duration-200 w-fit' href="tel:+919966211689"><i className="fa-solid fa-phone mr-4"></i>9966211689</a>
                        <div className='flex justify-between sm:justify-normal sm:gap-10 text-2xl mt-8'>

                            <a href="https://github.com/viswanadh7"><i className="fa-brands fa-github cursor-pointer hover:scale-125 duration-300"></i></a>

                            <a href="https://www.linkedin.com/in/viswanadh-mudunuru"><i className="fa-brands fa-linkedin cursor-pointer hover:scale-125 duration-300"></i></a>

                            <a href="http://t.me/Viswanadh_M"><i className="fa-brands fa-telegram cursor-pointer hover:scale-125 duration-300"></i></a>

                            <a href="https://www.instagram.com/_.viswanadh._?igsh=MTlxc3hzcjh0Z3l1Zw=="><i className="fa-brands fa-instagram cursor-pointer hover:scale-125 duration-300"></i></a>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <form onSubmit={(e) => handleSubmit(e)} className='p-5 border border-black rounded-2xl shadow-xl' action="">
                            <label className='text-lg mb-3' htmlFor="name">Name</label><br />
                            <input required onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} value={contactForm.name} className='border border-black rounded-md px-3 py-2 mb-5 w-full' placeholder='Enter your name' type="text" /><br />

                            <label className='text-lg mb-3' htmlFor="email">Email</label><br />
                            <input required onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} value={contactForm.email} className='border border-black rounded-md px-3 py-2 mb-5 w-full' placeholder='Enter your email' type="email" /><br />

                            <label className='text-lg mb-3' htmlFor="message">Message</label><br />
                            <textarea onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} value={contactForm.message} className='border border-black rounded-md px-3 py-2 mb-5 w-full' placeholder='Write your message here' name="" id=""></textarea><br />
                            <input type='submit' value='Submit' className='border border-black px-5 py-1.5 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 duration-300' />
                        </form>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between px-10 mt-5 mb-3'>
                    <h1 className='flex items-center gap-2'><i className="fa-regular fa-copyright"></i>Viswanadh Portfolio</h1>
                    <h1>2024</h1>
                </div>
            </section>
            <ToastContainer floatingTime={5000} />
        </>
    )
}

export default MainCopy

