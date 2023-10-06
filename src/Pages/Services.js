import React from 'react'
import Footer from '../Components/Footer'
import ServicesHeader from '../Components/ServicesHeader'
import './Page.css'
import pic from './Services.png'
import pic1 from './services.gif'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <>
    <ServicesHeader/>
    <div className='services'>
      <div className='services-1'>
      <motion.img src={pic1} alt='SERVICES' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}}></motion.img>
      <motion.img src={pic} alt='SERVICES' initial={{opacity:0,x:-1100}} animate={{opacity:1,x:0}} transition={{duration:1,delay:0.6}}></motion.img>
      </div>
      <div className='services-2'>
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.3}}>Our Services</motion.h2>
      <div className='services-22'>
      <motion.div className='services-222' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
      <h2>Workout Calculators</h2>
      <p>We Offer Different Workout And Health Calculators Such As BMI,BMR,Calorie Calculator.....</p>
      </motion.div>
      <motion.div className='services-222' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
      <h2>Workout Plans</h2>
      <p>We Offer Different Workout Splits To Save Your Time ANd Get Best Results</p>
      </motion.div>
      </div>
      <div className='services-22'>
      <motion.div className='services-222' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
      <h2>DIY Workout Planner</h2>
      <p>Our Most Innovative Plan.Set Your Own Workout And Get A PDF And Save Your Time</p>
      </motion.div>
      <motion.div className='services-222' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:3}}>
      <h2>Subscription</h2>
      <p>Our Plans Are Free For Everyone.You Just Need To Register On Our Portal</p>
      </motion.div>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Services