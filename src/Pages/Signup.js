import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ServicesHeader from '../Components/ServicesHeader'
import Footer from '../Components/Footer'
import './Page.css'
import loginpic from './LOGIN.png';
import { NavLink , useNavigate} from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
    const navigate=useNavigate();
    const [data,setData]=useState({
        name:"",
        number:"",
        email:"",
        password:""
    });
    const handleData=(e)=>{
        const {name,value}=e.target;
        setData({
          ...data,
          [name]:value
        });
      };
      const submitData=(e)=>{
        e.preventDefault();
        if(data.name && data.number && data.email && data.password){
        axios.post("http://localhost:3001/Register",data)
        .then((res)=>{
          alert("User Created");
          navigate("/Login")
          setData({
            name:"",
            number:"",
            email:"",
            password:"",
          });
        })
        .catch((err)=>{
          console.log(err.response.data.message);
          if(err.response.data.message==="ALREADY"){
            alert("Email Already Exists");
            setData({
                name:"",
                number:"",
                email:"",
                password:"",
              });
          }
        })
        }
        else{
          alert("All Fields Are Mandatory");
          setData({
            name:"",
            number:"",
            email:"",
            password:"",
          });
        }
      }
  return (
    <>
    <ServicesHeader/>
    <div className='login'>
        <motion.div className='login-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}} exit={{opacity:0}}>
        <img src={loginpic} alt='LOGIN PIC WITH MOTIVATON'></img>
        </motion.div>
        <motion.div className='login-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}} exit={{opacity:0}}>
            <form onSubmit={submitData}>
                <div className='login-22'>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter Name.....' name='name' value={data.name} onChange={handleData} autoComplete='off'></input>
                </div>
                <div className='login-22'>
                    <label>Number:</label>
                    <input type='text' placeholder='Enter Number.....' name='number' value={data.number} onChange={handleData} autoComplete='off'></input>
                </div>
                <div className='login-22'>
                    <label>Email:</label>
                    <input type='text' placeholder='Enter Email.....' name='email' value={data.email} onChange={handleData} autoComplete='off'></input>
                </div>
                <div className='login-22'>
                    <label>Password:</label>
                    <input type='text' placeholder='Enter Password.....' name='password' onChange={handleData} value={data.password} autoComplete='off'></input>
                </div> 
                <button type='submit' >Signup</button>
            </form>
            <NavLink to='/Login'>Already An User?</NavLink>
            <p> Indicates That Fields Are Mandatory</p>
        </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup