import React from 'react'
import WorkoutSchduleHeader from './WorkoutSchduleHeader'
import Footer from '../Components/Footer'
import './Services.css';
import pic from './wlanding.gif'
import { motion } from 'framer-motion';
const WorkoutLandingPage = () => {
  return (
    <>
    <WorkoutSchduleHeader/>
    <div className='wlandingpage'>
    <motion.div className='wlandingpage-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <img src={pic} alt='WORKOUT WITH US'></img>
    </motion.div>
    <motion.div className='wlandingpage-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
        <h2>Welcome To Our Workout Plans</h2>
        <p>There Are Many Different Splits In The Market</p>
        <p>But We Focus On Only 3 Main Splits For Maximum Results</p>
        <div className='wl-1'>
        <motion.div className='wl-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
            <h2>Push,Pull,Legs</h2>
            <p>It Is A Popular Workout Split That Divides Your Training Into Three Main Days</p>
        </motion.div>
        <motion.div className='wl-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
            <h2>TwoX</h2>
            <p>It Is A Popular Workout Split That Divides Your Training Into 2 Body Part Per Day</p>
        </motion.div>
        </div>
        <div className='wl-1'>
        <motion.div className='wl-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
            <h2>BroSplit</h2>
            <p>It Is A Popular Workout Split That Divides Your Training Into Each Body Part Per Day</p>
        </motion.div>
        <motion.div className='wl-11' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
            <h2>Stay Tuned........</h2>
            <p>We Are Constantly Working Hard For Our Users Stay Tuned To Know More </p>
        </motion.div>
        </div>
    </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default WorkoutLandingPage