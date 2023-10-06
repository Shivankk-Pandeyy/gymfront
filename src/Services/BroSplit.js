import React, { useEffect } from 'react'
import './Services.css'
import WorkoutSchduleHeader from './WorkoutSchduleHeader'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import Aos from 'aos';
import pdf from './BROSPLIT.pdf'
const BroSplit = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
        },[]);
  return (
    <>
    <WorkoutSchduleHeader/>
    <div className='PPL'>
    <motion.div className='PPL-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h1>Bro Split</h1>
    <h2>It Is A Popular Workout Split That Divides Your Training Into Each Body Part Per Day</h2>
    <h2>Monday:Chest</h2>
    <h2>Tuesday:Shoulder</h2>
    <h2>Wednesday:Triceps</h2>
    <h2>Thrusday:Back</h2>
    <h2>Friday:Biceps</h2>
    <h2>Saturday:Legs</h2>
    <h2>Download FREE PDF To Get Your Workout Schedule</h2>
    <div className='PPL-11'>
        <button><a href={pdf} download="BroSplit_OnlyGains">BroSplit PDF</a></button>
    </div>
    <h2>Take A Look Before</h2>
    <h2 style={{color:"#ff1616"}}>DISCLAIMER: This Schedule Has Come Purely On The Basis Of Experience</h2>
    <h2 style={{color:"#ff1616"}}>You Can Adjust The Schedule Accordingly</h2>
    <h2 style={{color:"#ff1616"}}>Follow It For Minimum For 2 Months To See Results And DIET is A MUST</h2>
    <h2 style={{color:"#ff1616"}}>Workout Accompanied With Diet = BEST RESULTS</h2>
    <h2 style={{color:"#ff1616"}}>Record Your Weights And Try To Progressively Overload</h2>
    <h2 style={{color:"#ff1616"}}>Progressive Overload=Adding Weight/Increasing Reps(With Same Weight)</h2>
    </motion.div>
    <div className='PPL-2'>
        <h2 data-aos="fade-up">Workout Summary</h2>
        <table data-aos="zoom-in">
            <tr>
                <td>Main Goal</td>
                <td>Build Muscle</td>
            </tr>
            <tr>
                <td>Workout Type</td>
                <td>Bro Split</td>
            </tr>
            <tr>
                <td>Days Per Week</td>
                <td>6 Days/Week</td>
            </tr>
            <tr>
                <td>Equipments Required</td>
                <td>Barbell,Dumbells,Machines</td>
            </tr>
            <tr>
                <td>Target Gender</td>
                <td>Male & Female</td>
            </tr>
            <tr>
                <td>Supplements Recomended</td>
                <td>Whey Protein,Creatine,Multivitamins,BCAA</td>
            </tr>
        </table>
        <h2 data-aos="fade-up">Workout Schedule</h2>
        <table data-aos="zoom-in">
            <tr>
                <td>Day</td>
                <td>Workout</td>
                <td>Sets</td>
                <td>Rest</td>
            </tr>
            <tr>
                <td rowSpan={5}>Monday(Chest)</td>
                <td>Flat Dumbell/Barbel Bench Press</td>
                <td>3 Sets(12,10,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Incline Dumbell/Barbel Bench Press</td>
                <td>3 Sets(12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Machine Fly</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cable Flys</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Decline Bench Press</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Tuesday(Shoulder)</td>
                <td>Dumbell Shoulder Press</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Barbell Shoulder Press</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Front Shoulder Raises</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Shrugs</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Wednesday(Triceps)</td>
                <td>Triceps Cable PushDown</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Rope Cable PushDown</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Triceps Kickback</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Skull Crusher</td>
                <td>3 Sets(10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Triceps Overhand Extension</td>
                <td>3 (15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Thrusday(Back)</td>
                <td>Lat Pulldowns</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Close Grip Lat Pulldowns</td>
                <td>3 Sets(12,10,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Machine Rowing</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cable Lat Pullovers</td>
                <td>3 Sets(15,12,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Deadlift</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Friday(Biceps)</td>
                <td>Barbel Bicep Curls</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Dumbell Bicep Curls</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Hammer Curls</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Preacher Curl</td>
                <td>3 Sets(15,12,10)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Reverse Grip Bicep Curls</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Saturday(Legs)</td>
                <td>Barbel Squats</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Leg Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Leg Curls</td>
                <td>4 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Stiff Leg Deadlift</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>30 Seconds</td>
            </tr>
        </table>
        <h2 data-aos="flip-left">NOTE:</h2>
        <h2 data-aos="flip-left">Workout Should Be Complete By Around 60 - 90 Mins</h2>
        <h2 data-aos="flip-left">Dont Forget To Train Your Abs As They Are Also A Part Of Body</h2>
        <h2 data-aos="flip-left">Even Add Cardio On Alternate Days To See Better Results</h2>
        <h2 data-aos="flip-left">BEST OF LUCK FOR YOUR JOURNEY</h2>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default BroSplit