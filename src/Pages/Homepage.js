import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Aos from 'aos';
import '../../node_modules/aos/dist/aos.css'
import './Page.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import homepic from './homepage.png'
import red from './red.png';
import green from './green.png'
import yellow from './yello.png'
import { NavLink } from 'react-router-dom';
import cardio from './cardio.png'
import hiit from './hiit.png'
import train from './powerlifting.png'
import hyper from './hypertrophy.png'
import insta from './instagram.png'
import fb from './facebook.png'
import twit from './twitter.png'
const Homepage = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <>
    <Header/>
    <div className='homepage'>
      <motion.div className='homepage-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}} exit={{opacity:0}}>
      <img src={red} alt='OUR PLANS'></img>
      </motion.div>
      <motion.div className='homepage-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}> 
      <h2>Become Fitter,Stronger & More Confident!</h2>
      <h2>Get The Results You Can See And Feel</h2>
      <h2>Empower Your Potential</h2>
      <div className='homepage-button'>
        <button><NavLink to='/About'>KNOW MORE</NavLink></button>
        <button><NavLink to='/Login'>JOIN NOW</NavLink></button>
      </div>
      <img src={homepic} alt='HIT THE MOTIVATION'></img>
      </motion.div>
    </div>
    <div className='homepage1'>
      <div className='homepage-22'> 
     <div className='homepage-2221' data-aos="flip-right">
      <div className='homepage-2222'>
        <img src={cardio} alt='CARDIO'></img>
        <h2>Cardio Plans</h2>
        <p>Elevates Your Heart rate And Improve The Health Of Your Heart And Circulatory System.Can Include Cycling,Running,Swimming..</p>
      </div>
      <div className='homepage-2222'>
        <img src={hiit} alt='HIIT'></img>
        <h2>HIIT Plans</h2>
        <p>HIGH INTENSITY INTERVAL TRAINING,Workout Strategy That Alternate Short Burst Of Intense Training With Brief Period Of Rest.</p>
      </div>
     </div>
     <div className='homepage-2221' data-aos="flip-left">
      <div className='homepage-2222'>
        <img src={train} alt='POWERLIFTING' ></img>
        <h2>Strength Training Plans</h2>
        <p>Involves Lifting Weights,Using Resistance To Build Muscles And Increase Strength Improving Overall Physical Performance</p>
      </div>
      <div className='homepage-2222'>
        <img src={hyper} alt='HYPERTROPHY'></img>
        <h2>HyperTrophy Plans</h2>
        <p>Process Of Muscle Growth,Where Indivisuals Muscle Fibres Increase In Size.Leads To Stronger And More Defined Muscles</p>
      </div>
     </div>
      </div>
      <div className='homepage-11' data-aos="flip-right">
      <img src={green} alt='OUR PLANS'></img>
      </div>
    </div>
    <div className='homepage2'>
      <div className='homepage-111' data-aos="flip-left">
      <img src={yellow} alt='OUR PLANS'></img>
      </div>
      <div className='homepage-2223'> 
      <h2 style={{textDecoration:"underline"}} data-aos="fade-up-left">Team OG</h2>
      <h2 data-aos="fade-up-left">DISCOVER EXPERT TRAINING</h2>
      <h2 data-aos="fade-up-left">TOP NOTCH PROGRAMS</h2>
      <h2 data-aos="fade-up-left">JOIN US TODAY</h2>
      
      <div className='social-media' data-aos="flip-up"> 
        <img src={fb} alt='FACEBOOK' data-aos="flip-up"></img>
        <img src={insta} alt='INSTAGRAM' data-aos="flip-up"></img>
        <img src={twit} alt='TWITTER' data-aos="flip-up"></img>
      </div><h2 data-aos="zoom-out">Designed And Developed By</h2>
      <h2 data-aos="zoom-out">Shivank Pandey</h2>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage