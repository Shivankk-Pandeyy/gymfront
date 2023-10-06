import React, {useState} from 'react';
import './Services.css'
import bmichart from './BMI chart.jpg'
import Footer from '../Components/Footer';
import WorkoutCalculatorHeader from './WorkoutCalculatorHeader';
import { motion } from 'framer-motion';

const BMI = () => {

    const [display,setDisplay]=useState("")
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [ans,setAns]=useState("__________");
    const HEIGHT=(e)=>{
        setHeight(e.target.value)
    }
    const WEIGHT=(e)=>{
        setWeight(e.target.value)
    }
    const BMIans=(e)=>{
        e.preventDefault();
        if(!height || !weight){
            alert("INVALID INPUT")
        }
        const h=parseInt(height)
        const w=parseInt(weight)
        const bmi=(w)/(h*h);
        const bmi_ans=(bmi*100*100).toFixed(2);
        setAns(bmi_ans);
        setHeight("");
        setWeight("");
        if(bmi_ans<16){
            setDisplay("Severe Thinness")
        }
        else if(bmi_ans>=16 && ans<17){
            setDisplay("Moderate Thinness")
        }
        else if(bmi_ans>=17 && ans<18.5){
            setDisplay("Mild Thinness")
        }
        else if(bmi_ans>=18.5 && ans<25){
            setDisplay("Normal")
        }
        else if(bmi_ans>=25 && ans<30){
            setDisplay("OverWeight");
        }
        else if(bmi_ans>=30 && ans<35){
            setDisplay("Obese Class - I")
        }
        else if(bmi_ans>=35 && ans<40){
            setDisplay("Obese Class - II")
        }
        else if(bmi_ans>=40){
            setDisplay("Obese Class - III")
        }
    }
  return (
    <>
    <WorkoutCalculatorHeader/>
    <div className='bmi'>
    <motion.div className='bmi-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h2>Introducing BMI Calculator</h2>
    <p>BMI Stands For Body Mass Index.</p>
    <p>It Is A Value Derived From Weight And Height Of A Person.</p>
    <p>It Is Defined As Body Weight Divided By Square Of Body Height.</p>
    <p>Unit Of BMI Is Kg/m<sup>2</sup></p>
    <img src={bmichart} alt='BMI CHART'></img>
    </motion.div>
    <motion.div className='bmi-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}}>
    <form onSubmit={BMIans}>
        <label>Height</label>
        <input type='number' placeholder='Enter Height In Cm' onChange={HEIGHT} value={height}></input>
        <label>Weight</label>
        <input type='number' placeholder='Enter Weight In Kg' onChange={WEIGHT} value={weight}></input>
        <button type='submit'>Calculate BMI</button>
    </form>
    <p>{`Your BMI is ${ans}`}</p>
    <p>{`${display}`}</p>
    </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default BMI