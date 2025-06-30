import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import img from '../assets/nobgimg-compressed.png'
import resume from '../assets/Viswanadh_Fullstack.pdf'

import { ToastContainer } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import dayjs from 'dayjs'
import { sendTelegramNotification } from '../utils/telegram-bot'
import { backendSkills, databaseSkills, frontendSkills, otherSkills, projects } from '../utils/data'
import SkillBox from '../components/SkillBox'


function Main() {
    const texts = ["App Developer", "Full stack Developer", "MERN stack Developer"];

    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
    const [textIndex, setTextIndex] = useState(0);

    const variants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.1
            }
        }),
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    async function handleSubmit(e) {
        e.preventDefault()
        await sendTelegramNotification(contactForm, setContactForm)
    }
    return (
        <>
            <Navbar />
            <section id='home' className='min:h-screen md:h-fit lg:h-screen grid md:grid-cols-2 items-center justify-items-center p-10 gap-5 md:gap-10 lg:gap-40'>
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
                    <div className="h-12 flex items-center">
                        <motion.div
                            key={textIndex}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                            onAnimationComplete={() => {
                                setTimeout(() => {
                                    setTextIndex((prev) => (prev + 1) % texts.length);
                                }, 2000);
                            }}
                            className="text-xl"
                        >
                            {texts[textIndex].split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={variants}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="ml-1"
                        >
                        </motion.span>
                    </div>
                    <p className='para my-3'>Welcome to my Fullstack Developer portfolio! I'm Viswanadh, a skilled and creative fullstack developer with a passion for crafting robust, efficient, and user-centric applications. I've contributed to a wide range of projects, from complex applications to innovative solutions.</p>
                    <button className='border border-black px-3 py-2 shadow-lg rounded-lg font-semibold lg:hidden hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 duration-300'><a href={resume}>Download CV</a></button>
                </motion.div>
            </section>

            <section id='about' className='min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-20 p-10 md:p-10'>
                <div className=''>
                    <h1 className='heading'>About</h1>
                    {/* <p className='para mt-5'>Enthusiastic and dedicated fresher with a strong passion and demonstrated skills in fullstack development. Armed with a solid foundation in programming languages such as Python, I excel at transforming complex concepts into functional and efficient software solutions. My proficiency in software architecture and design principles enables me to craft scalable and user-centric applications, driven by a deep understanding of user needs and industry standards.<br />My passion for learning and staying current with the latest advancements in fullstack development fuels my ongoing pursuit of knowledge. As a self-driven individual, I am eager to contribute my technical prowess and imaginative problem-solving abilities to an innovative fullstack development team. I firmly believe that my dedication to excellence and creative problem-solving will position me as a valuable contributor in delivering outstanding software solutions.</p> */}
                    {/* <p className='para mt-5'>Enthusiastic and dedicated developer with a strong foundation in fullstack development. Proficient in React.js, I have honed my skills in Axios for seamless API interactions, utilized interceptors for efficient request/response handling, and integrated advanced state management using React Query and Formik for robust form solutions. Additionally, I have mastered advanced routing techniques to optimize application navigation and user experience. My expertise extends to Tailwind CSS, where I've achieved proficiency in designing responsive and visually appealing interfaces. I am well-versed in version control using Git and GitHub, contributing effectively to collaborative projects and ensuring code integrity throughout development cycles.<br /><br />My experience at Online Hoja has not only strengthened my technical skills but also enhanced my ability to thrive in dynamic project environments. I am eager to leverage my diverse skill set and passion for innovation to contribute positively to impactful software projects. With a keen eye for detail and a dedication to continuous improvement, I am prepared to tackle new challenges and deliver exceptional results in fullstack development.</p> */}
                    <p className='para mt-5'>Enthusiastic and dedicated developer with a strong foundation in full-stack development. Proficient in React.js and TypeScript, I have developed skills in seamless API interactions using Axios, alongside efficient request/response handling. I am experienced in advanced state management techniques for creating robust form solutions and optimizing application navigation to enhance user experience. My expertise also includes designing responsive and visually appealing interfaces using MUI and Tailwind CSS.<br /><br />On the backend, I have worked with Express.js, MongoDB, and MySQL to build scalable applications, ensuring smooth data management and integration. I am well-versed in version control using Git and GitHub, contributing effectively to collaborative projects and maintaining code integrity throughout development cycles.<br /><br />My experience in various project environments has strengthened my technical skills and my ability to adapt to dynamic challenges. I am eager to leverage my diverse skill set and passion for innovation to contribute positively to impactful software projects. With a keen eye for detail and a commitment to continuous improvement, I am prepared to tackle new challenges and deliver exceptional results in full-stack development.</p>
                </div>
                <div className='overflow-x-hidden'>
                    <div className='flex justify-between'>
                        <h1 className='heading'>Skills</h1>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-lg mb-3'>Frontend Technologies</h1>
                        <div className="flex flex-wrap gap-3 md:gap-5">
                            {frontendSkills.map((skill, index) => <SkillBox key={index} name={skill.name} image={skill.image} />)}
                        </div>
                        <h1 className='text-lg mt-10 mb-3'>Backend Technologies</h1>
                        <div className="flex flex-wrap gap-5">
                            {backendSkills.map((skill, index) => <SkillBox key={index} name={skill.name} image={skill.image} />)}

                        </div>
                        <h1 className='text-lg mt-10 mb-3'>Database Management</h1>
                        <div className="flex flex-wrap gap-5">
                            {databaseSkills.map((skill, index) => <SkillBox key={index} name={skill.name} image={skill.image} />)}

                        </div>
                        <h1 className='text-lg mt-10 mb-3'>Other Tools</h1>
                        <div className="flex flex-wrap gap-5">
                            {otherSkills.map((skill, index) => <SkillBox key={index} name={skill.name} image={skill.image} />)}

                        </div>
                    </div>
                </div>
            </section>
            <section id='experience' className='p-10'>
                <h1 className='heading my-5'>Experience</h1>
                <div className='mb-10'>
                    <p className='para font-semibold'>Full Stack Developer</p>
                    <a href='https://gyanmatrix.com/' target='_blank' rel="noreferrer" className='para font-semibold underline'>Gyanmatrix <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></a>
                    <p className='para font-semibold'>August 2024 - Present</p>
                    <ul className='para list-disc ml-5 mt-5 flex flex-col gap-5'>
                        <li>Full Stack Development: Lead the development and maintenance of robust applications utilizing TypeScript, React.js, Express.js, and MySQL, focusing on building scalable architectures and implementing best practices for clean, maintainable code.</li>
                        <li>Collaborative Code Practices: Foster a culture of collaboration through active participation in code reviews, pair programming, and team brainstorming sessions, enhancing code quality and promoting knowledge sharing among team members.</li>
                        <li>Advanced API Integration: Design and implement complex API integrations, optimizing data retrieval and manipulation processes, which resulted in a 25% increase in API response efficiency and improved overall application performance.</li>
                        <li>Responsive UI Development: Create and optimize responsive UI components using MUI, ensuring a consistent and user-friendly experience across all devices, while adhering to accessibility standards and design principles.</li>
                        <li>Performance Monitoring and Optimization: Conduct regular performance assessments and optimization of both front-end and back-end systems, leveraging tools and analytics to identify bottlenecks and enhance application speed and responsiveness.</li>
                    </ul>
                </div>
                <div>
                    <p className='para font-semibold'>ReactJS Developer</p>
                    <a href='https://www.onlinehoja.com/' target='_blank' rel="noreferrer" className='para font-semibold underline'>Online Hoja <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></a>
                    <p className='para font-semibold'>January 2024 - June 2024</p>
                    <ul className='para list-disc ml-5 mt-5 flex flex-col gap-5'>
                        <li>Advanced proficiency in React.js: Developed skills in React.js at Online Hoja, gaining expertise in Axios, Axios interceptors, Tanstack Query, Formik, and advanced routing techniques.</li>
                        <li>Proficient in Tailwind CSS: Acquired advanced knowledge of Tailwind CSS, effectively utilizing its utility-first approach to streamline UI development and enhance front-end design aesthetics.</li>
                        <li>Hands-on experience with Git and GitHub: Successfully collaborated on projects using Git version control system and GitHub for code repository management, demonstrating proficiency in branch management, merging, and collaborative workflows.</li>
                        <li>Project contribution and teamwork: Actively participated in team projects, contributing to the development and deployment phases, showcasing strong teamwork and collaboration skills in an agile environment.</li>
                        <li>Problem-solving and adaptation: Developed a knack for troubleshooting and adapting solutions to meet project requirements, demonstrating flexibility and a proactive approach in resolving technical challenges.</li>
                    </ul>
                </div>
            </section>
            <section id='projects' className='min:h-screen p-10'>
                <h1 className='heading my-5'>Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                    {projects.map((project, index) => <ProjectCard key={index} name={project.title} url={project.url} link={project.link} />)}
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

                            <a href="https://www.instagram.com/viswanadh_mudunuru?igsh=MTlxc3hzcjh0Z3l1Zw=="><i className="fa-brands fa-instagram cursor-pointer hover:scale-125 duration-300"></i></a>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <form onSubmit={(e) => handleSubmit(e)} className='p-5 border border-black rounded-xl shadow-xl' action="">
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
                    <h1>{dayjs().year()}</h1>
                </div>
            </section>
            <ToastContainer floatingTime={5000} />
        </>
    )
}

export default Main

