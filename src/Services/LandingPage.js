import React from 'react'
import HeaderS from './HeaderS'
import Footer from '../Components/Footer'
import './Services.css'
import pic from './Landing Page-1.gif'
import { motion } from 'framer-motion'
const LandingPage = () => {
  return (
    <>
    <HeaderS/>
    <motion.div className='landing-page' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <img src={pic} alt='OUR INTRO'></img>
    </motion.div>
    <Footer/>
    </>
  )
}

export default LandingPage