import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import ServicesHeader from '../Components/ServicesHeader'
import Footer from '../Components/Footer'
import './Page.css'
import loginpic from './LOGIN.png';
import axios from 'axios'
const Login = () => {
    const navigate=useNavigate();
    const [data,setData]=useState({
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
        if(data.email && data.password){
        axios.post("http://localhost:3001/Login",data)
        .then((res)=>{
          navigate("/LandingPage")
          setData({
            email:"",
            password:"",
          });
        })
        .catch((err)=>{
          console.log(err.response.data.message);
          if(err.response.data.message==="EMAIL"){
            alert("Invalid Email");
            setData({
                email:"",
                password:"",
              });
          }
          else if(err.response.data.message==="PASSWORD"){
            alert("Invalid Password");
            setData({
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
                    <label>Email:</label>
                    <input type='text' placeholder='Enter Email.....' name='email' onChange={handleData} value={data.email} autoComplete='off'></input>
                </div>
                <div className='login-22'>
                    <label>Password:</label>
                    <input type='text' placeholder='Enter Password.....' name='password' onChange={handleData} value={data.password} autoComplete='off'></input>
                </div> 
                <button type='submit'>Login</button>
            </form>
            <NavLink to='/Signup'>Not Yet An User?Signup!</NavLink>
            <p> Indicates That Fields Are Mandatory</p>
        </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Login