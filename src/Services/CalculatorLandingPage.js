import React from 'react'
import pic from './clanding.gif'
import Footer from '../Components/Footer'
import WorkoutCalculatorHeader from './WorkoutCalculatorHeader'
import { motion } from 'framer-motion'
const CalculatorLandingPage = () => {
  return (
    <>
    <WorkoutCalculatorHeader/>
    <div className='wlandingpage'>
    <motion.div className='wlandingpage-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <img src={pic} alt='WORKOUT WITH US'></img>
    </motion.div>
    <motion.div className='wlandingpage-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
        <h2>Welcome To Our Fitness Calculator</h2>
        <p>We Provide Basic Calculator Applications For Our Users</p>
        <div className='wl-1'>
        <motion.div className='wl-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
            <h2>BMI</h2>
            <p>It Is Simple Numerical Measure Of A Persons's Weight Relative To Their Height,Commonly Used To Access If Someone Is UnderWeight,OverWeight,Normal Weight Or Obese.</p>
        </motion.div>
        <motion.div className='wl-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
            <h2>BMR</h2>
            <p>It Is A Number Of Calories Your Body Need To Maintain Basic Functions At Rest,Such As Breathing And Digestion,Without Any Additional Activity.</p>
        </motion.div>
        </div>
        <div className='wl-1'>
        <motion.div className='wl-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
            <h2>Calorie Counter</h2>
            <p>An Estimator Of Daily Calorie Needs Based On Factors Protein,Carbohydrate,Fats To Manage Nutrition And Weight Goals</p>
        </motion.div>
        <motion.div className='wl-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2.5}}>
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

export default CalculatorLandingPage