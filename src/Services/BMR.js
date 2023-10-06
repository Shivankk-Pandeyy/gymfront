import React, {useState} from 'react';
import './Services.css'
import bmichart from './BMR chart.jpg'
import Footer from '../Components/Footer';
import WorkoutCalculatorHeader from './WorkoutCalculatorHeader';
import { motion } from 'framer-motion';
const BMR = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [age,setAge]=useState("");
    const [ans,setAns]=useState("__________");
    const [gen,setGen]=useState("");
    const HEIGHT=(e)=>{
        setHeight(e.target.value)
    }
    const WEIGHT=(e)=>{
        setWeight(e.target.value)
    }
    const AGE=(e)=>{
      setAge(e.target.value)
  }
    const BMIans=(e)=>{
        e.preventDefault();
        if(!height || !weight || !age || !gen){
            alert("INVALID INPUT");
        }
        const h=parseInt(height);
        const w=parseInt(weight);
        const a=parseInt(age);
        if(gen==="Female"){
            const bmrFemale=655.1+(9.563*w)+(1.85*h)-(4.676*a);
            setAns(bmrFemale.toFixed(2));
        }
        if(gen==="Male"){
            const bmrMale=66.47+(13.75*w)+(5.003*h)-(6.755*a);
            setAns(bmrMale.toFixed(2));
        }
        setHeight("");
        setWeight("");
        setAge("");
    }
  return (
    <>
    <WorkoutCalculatorHeader/>
    <div className='bmi'>
    <motion.div className='bmi-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h2>Introducing BMR Calculator</h2>
    <p>BMR Stands For Basal Metabolidc Rate.Unit=[kcal/24hrs]</p>
    <p>It Is A Number Of Calories.</p>
    <p>Your Body Need To Maintain Basic Functions At Rest,</p>
    <p>Such As Breathing And Digestion,Without Any Additional Activity..</p>
    <p>Calculated Using:<strong>Mifflin-St Jeor Equation:</strong></p>
    <img src={bmichart} alt='BMI CHART'></img>
    </motion.div>
    <motion.div className='bmi-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
    <form onSubmit={BMIans}>
        <label>Height</label>
        <input type='number' placeholder='Enter Height In Cm' onChange={HEIGHT} value={height}></input>
        <label>Weight</label>
        <input type='number' placeholder='Enter Weight In Kg' onChange={WEIGHT} value={weight}></input>
        <label>Age</label>
        <input type='number' placeholder='Enter Age' onChange={AGE} value={age}></input>
        <label>Select Gender</label>
        <div className='gender'>
        <input type='radio' value='Male' name='gender' onClick={(e)=>{setGen(e.target.value)}}></input><label>Male</label>
        <input type='radio' value='Female' name='gender' onClick={(e)=>{setGen(e.target.value)}}></input><label>Female</label>
        
        </div>
        <button type='submit'>Calculate BMI</button>
    </form>
    <p>{`Your BMR is ${ans} Kcal/24Hrs`}</p>
    </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default BMR