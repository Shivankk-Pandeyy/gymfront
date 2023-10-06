import React, { useEffect } from 'react'
import './Services.css'
import WorkoutSchduleHeader from './WorkoutSchduleHeader'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import Aos from 'aos';
import padv from './PPLADV.pdf'
import pbeg from './PPLBEG.pdf';
import pint from './PPLINT.pdf';
const PPL = () => {
    useEffect(()=>{
    Aos.init({duration:1000});
    },[]);
  return (
    <>
    <WorkoutSchduleHeader/>
    <div className='PPL'>
    <motion.div className='PPL-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h1>Push,Pull,Legs</h1>
    <h2>It Is A Popular Workout Split That Divides Your Training Into Three Main Days</h2>
    <h2>PUSH Day,PULL Day,Legs Day</h2>
    <h2>Push Day Focuses On Chest,Shoulder & Triceps(CST)</h2>
    <h2>Pull Day Focuses On Back & Biceps</h2>
    <h2>Leg Day Focuses On Lower Body(Legs-Quads,Hamstring & Calves)</h2>
    <h2>Download FREE PDFs To Get Your Workout Schedule</h2>
    <div className='PPL-11'>
        <button><a href={pbeg} download="PPLBeginner_OnlyGains">PPL Beginer</a></button>
        <button><a href={pint} download="PPLIntermediate_OnlyGains">PPL Intermediate</a></button>
        <button><a href={padv} download="PPLAdvance_OnlyGains">PPL Advance</a></button>
    </div>
    <h2>Take A Look Before</h2>
    <h2 style={{color:"#ff1616"}}>DISCLAIMER: This Schedule Has Come Purely On The Basis Of Experience</h2>
    <h2 style={{color:"#ff1616"}}>Make Changes According To Your Goal</h2>
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
                <td>PPL Beginer</td>
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
                <td rowSpan={5}>Monday(PUSH-1)</td>
                <td>Incline Dumbell Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Flat Machine Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Overhead Cable Triceps Extension</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>5 Sets(20,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Tuesday(PULL-1)</td>
                <td>Neutral Grip Lat Pulldowns</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Close Grip Lat Pulldowns</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Cable Lat Pullovers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Rear Delt Flys</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seat Supported Biceps Curl</td>
                <td>5 Sets(12,10,8,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Wednesday(LEGS-1)</td>
                <td>Smith Squats</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Leg Press</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lying/Seated Curls</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Dumbell Shoulder Press</td>
                <td>4 Set(15,12,10,8)</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Thrusday(PUSH-2)</td>
                <td>Flat Bench/Dumbell Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Machine/Cable Flys</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Skull Crushers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>5 Sets(20,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Friday(PULL-2)</td>
                <td>Lat Pulldowns</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seated Rowing Machine</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Single Hand Cable Rowing</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Deadlift</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seated Preacher Curl</td>
                <td>5 Sets(15,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={5}>Saturday(LEGS-2)</td>
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
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Shoulder Press </td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
        </table>
        <h2 data-aos="fade-up">Workout Summary</h2>
        <table data-aos="zoom-in">
            <tr>
                <td>Main Goal</td>
                <td>Build Muscle</td>
            </tr>
            <tr>
                <td>Workout Type</td>
                <td>PPL Intermidiate</td>
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
                <td rowSpan={6}>Monday(PUSH-1)</td>
                <td>Incline Dumbell Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Flat Machine Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Overhead Cable Triceps Extension</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Arnold Shoulder Press</td>
                <td>3 Sets(12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>5 Sets(20,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={6}>Tuesday(PULL-1)</td>
                <td>Neutral Grip Lat Pulldowns</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Close Grip Lat Pulldowns</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Machine/Cable Rowing</td>
                <td>4 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Cable Lat Pullovers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Rear Delt Flys</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seat Supported Biceps Curl</td>
                <td>5 Sets(12,10,8,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={6}>Wednesday(LEGS-1)</td>
                <td>Smith Squats</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Leg Press</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Stiff Leg Deadlift</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Lying/Seated Curls</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Dumbell Shoulder Press</td>
                <td>4 Set(15,12,10,8)</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={6}>Thrusday(PUSH-2)</td>
                <td>Flat Bench/Dumbell Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Incline Dumbell/Bench Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Machine/Cable Flys</td>
                <td>3 Sets(12,10,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Skull Crushers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>5 Sets(20,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={6}>Friday(PULL-2)</td>
                <td>Deadlift</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lat Pulldowns</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seated Rowing Machine</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Single Hand Cable Rowing</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            
            <tr>
                <td>Seated Biceps Curl</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Hammer Curls</td>
                <td>3 Sets(12,12,12)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={6}>Saturday(LEGS-2)</td>
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
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Shoulder Press </td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Shrugs</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
        </table>
        <h2 data-aos="fade-up">Workout Summary</h2>
        <table data-aos="zoom-in">
            <tr>
                <td>Main Goal</td>
                <td>Build Muscle</td>
            </tr>
            <tr>
                <td>Workout Type</td>
                <td>PPL Advance</td>
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
                <td rowSpan={7}>Monday(PUSH-1)</td>
                <td>Incline Dumbell Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Flat Machine Chest Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Cable Flys</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Overhead Cable Triceps Extension</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seated Shoulder Press</td>
                <td>3 Sets(12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>4 Sets(20,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={7}>Tuesday(PULL-1)</td>
                <td>Neutral Grip Lat Pulldowns</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Close Grip Lat Pulldowns</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Machine/Cable Rowing</td>
                <td>4 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Cable Lat Pullovers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Rear Delt Flys</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seat Supported Biceps Curl</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seat Supported Hammer Curl</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={7}>Wednesday(LEGS-1)</td>
                <td>Smith Squats</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Leg Press</td>
                <td>4 Sets(15,12,10,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Stiff Leg Deadlift</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Lying/Seated Curls</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Dumbell Shoulder Press</td>
                <td>4 Set(15,12,10,8)</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Shrugs</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={7}>Thrusday(PUSH-2)</td>
                <td>Decline Bench/Dumbell Press</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>1 Minute</td>
            </tr>
            <tr>
                <td>Incline Dumbell/Bench Press</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Machine/Cable Flys</td>
                <td>3 Sets(12,10,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Skull Crushers</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Cables Triceps PushDown</td>
                <td>4 Sets(15,12,10,10)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lateral Raises</td>
                <td>5 Sets(20,15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Seated Shoulder Press</td>
                <td>3 Sets(20,15,12)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={7}>Friday(PULL-2)</td>
                <td>Lat Pulldowns</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Lat Pulldowns CLose Grip</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Seated Rowing Machine</td>
                <td>4 Sets(12,10,8,8)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Single Hand Cable Rowing</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Seated Biceps Curl</td>
                <td>3 Sets(8,8,8)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Seated Biceps Curl</td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Hammer Curls</td>
                <td>3 Sets(12,12,12)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td rowSpan={7}>Saturday(LEGS-2)</td>
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
                <td>4 Sets(15,15,15)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Calve Raise</td>
                <td>4 Sets(25,25,25,25)Reps</td>
                <td>30 Seconds</td>
            </tr>
            <tr>
                <td>Shoulder Press </td>
                <td>4 Sets(15,15,15,15)Reps</td>
                <td>45 Seconds</td>
            </tr>
            <tr>
                <td>Shrugs</td>
                <td>3 Sets(15,15,15)Reps</td>
                <td>45 Seconds</td>
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

export default PPL