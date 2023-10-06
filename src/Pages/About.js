import React, { useEffect } from 'react'
import Aos from 'aos';
import '../../node_modules/aos/dist/aos.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Page.css';
import logo from './ABOUT.png'
import centric from './CENTRIC.png'
import skills from './SKILLS.png'
import improvement from './IMPROVEMENT.png'
import collab from './COLLABORATION.png'
import empathy from './EMPATHY.png'
import inclu from './INCLUSIVE.png'
import c1 from './culture-1.png'
import c2 from './culture-2.png'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import pic from './About.gif'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);
  return (
    <>
    <Header/>
    <div className='about'>
    <motion.div className='about-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <img src={pic} alt='ABOUT US'></img>
      <h1 data-aos="fade-down">We Are Team Only Gains</h1>
      <h2 data-aos="fade-up">More Than Just Your Average Fitness Life</h2>
    </motion.div>
    <div className='about-11'>
      <motion.div className='about-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
        <img src={logo} alt='LOGO' data-aos="flip-left"></img>
      </motion.div>
      <motion.div className='about-111' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
        <h2 data-aos="flip-left">Our Story</h2>
        <p data-aos="flip-right">At Team Only Gains, We Believe That Fitness And Well Being Are The ConerStones of A Vibrant Life.Established In 2023,We Began Our Journey As Self Buissness Dedicated To Providing Exceptional Fitness Knowledge And Guidance At Affordable Prices.But,We Dreamed Bigger Than Just Being An Ordinary Fitness Knowledge Provider:</p>
        <p data-aos="flip-right">WE ASPIRE TO LEAD INDUSTRY</p>
        <p data-aos="flip-right">Join Us In Our Mission To Improve Lives Through Fitness And Wellness,Beacause At TEAM ONLY GAINS,Your Health Is Our PASSION</p>
      </motion.div>
    </div>
    </div>
    <div className='about-2'>
      <h2 data-aos="zoom-in">OUR VALUES</h2>
      <p data-aos="zoom-in">We Live And Breathe Our Six Core Values And Six Brand Promises — They Serve As The Backbone Of Our Operations And Speak Of Our Commitment To Improving The Lives Of Our Customers, Supporting Our Team, Championing Industry Standards, And Driving Our Business With Integrity And Passion.</p>
      <div className='about-22' >
      <div className='about-222' data-aos="fade-down">
        <img src={centric} alt='CENTRIC'></img>
        <h2>People Centric</h2>
        <p>Prioritising The Happiness And Well Being Of Our Team Members,Customers And STakeholders Before All Else.</p>
      </div>
      <div className='about-222' data-aos="fade-down">
      <img src={skills} alt='SKILLS' ></img>
        <h2>Skillfull</h2>
        <p>Combining Skill ACtions With Agile Thinking To Approach Challenges,Fostering,Resilience Through Creative And Problem Solving.</p>
      </div>
      <div className='about-222' data-aos="fade-down">
      <img src={improvement} alt='IMPROVEMENT'></img>
        <h2>Continous Improvement</h2>
        <p>Constantly Seeking New Ways To Grow, learn, And Innovate — Embracing And leading Change As A Catalyst For Progress.</p>
      </div>
      </div>
      <div className='about-22'>
      <div className='about-222' data-aos="fade-up">
      <img src={collab} alt='COLLABRATION'></img>
        <h2>Collaboration</h2>
        <p>Working Together With Effective Communication, Mutual Respect And Individual Ownership To Achieve Shared Goals And Collective Accountability.</p>
      </div>
      <div className='about-222' data-aos="fade-up">
      <img src={empathy} alt='EMPATHY'></img>
      <h2>Empathy</h2>
      <p>Demonstrating Kindness, Compassion And Understanding Towards Others To Cultivate Deeper Relationships And Create A Positive Impact.</p>
      </div>
      <div className='about-222' data-aos="fade-up">
      <img src={inclu} alt='INCLUSIVITY'></img>
      <h2>Inclusivity</h2>
      <p>Cultivating A Culture That Welcomes Differences, Celebrates Unique Perspectives, And Provides A Respectful And Nurturing Environment.</p>
      </div>
      </div>
    </div>
    <div className='about-3'>
    <h2 data-aos="zoom-in">Our Culture</h2>
    <p data-aos="fade-up">We Know That Building A Positive Culture Is Incredibly Important. We Believe In Encouraging, Supporting, Challenging, Learning And Growing To Be The Best! Our Flexible Working Solutions, Gym Rebates And Educational Opportunities Create A Positive Work/Life Balance For All Our Employees.</p>
    <p data-aos="fade-up">We Believe In Giving Back And Offering Time, Money And Products To Volunteer Services And Community Organisations. We’re Committed To Improving iIndividuals' Health, Fitness, And Well-Being By Supporting Global And Local Charities, Local Sports Teams, And Events.</p>
    <button data-aos="flip-right"><NavLink to='/Contact'>Get In Touch</NavLink></button>
    <div className='culture'>
    <img src={c1} alt='GET MOTIVATED' data-aos="flip-left"></img>
    <img src={c2} alt='JOIN US NOW' data-aos="flip-right"></img>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About