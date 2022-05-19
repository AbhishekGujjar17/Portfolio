import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import abhishekprofile from '../assets/abhishekprofile.jpg'
import resume from '../assets/Abhishek_Resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:bestabhishek17@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={abhishekprofile} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Abhishek <span>Gujjar</span> </div>
            <div className="sidebar__item sidebar__title">Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/abhishekgujjarj/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"  className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/abhi._eth/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/gujjarabhishek/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/AbhishekGujjar17" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    St. John's, Canada</div>
                <div className="sidebar__item">bestabhishek17@gmail.com</div>
                <div className="sidebar__item">+1(709-986-5877)</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Hire Me</div>
            <div className="sidebar__quote">Favourite Quote: <strong>"The future belongs to those who believe in the beauty of their dreams."</strong></div>
        </motion.div>
    )
}

export default Sidebar;