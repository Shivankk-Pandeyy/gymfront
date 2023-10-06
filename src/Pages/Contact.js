import React , {useState}from 'react'
import { motion } from 'framer-motion';
import './Page.css'
import ContactPage from './contactpage.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import contactcard from './contact-card.pdf'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Contact = () => {
  const [data,setData]=useState({
    name:"",
    suggestion:"",
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
    if(data.name && data.suggestion){
    axios.post("http://localhost:3001/Suggest",data)
    .then((res)=>{
      console.log(res.data.message)
      alert("Your Suggestion Has Been Sent")
      setData({
        name:"",
        suggestion:"",
      });
    })
    .catch((err)=>{
      console.log(err.response.data.message);
    })
    }
    else{
      alert("Fill All Details For Suggestion")
    }
  }
  return (
    <>
    <Header/>
    <div className='contact'>
        <motion.div className='contact-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}} exit={{opacity:0}}>
        <img src={ContactPage} alt='CONTACT INFORMATION'></img>
        </motion.div>
        <motion.div className='contact-2' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>
        <button title='Call Us'><a href="tel:7389288618">Call Us</a></button>
        <button title='Email Us'><a href='mailto:pandeyshivank21@gmail.com'>Email Us</a></button>
        <button title='Download Our Contact Card'><a href={contactcard} download="ContactCard_OG">Contact Card</a></button>
        <button title='Join Our Community'><NavLink to='/Signup'>Join Us</NavLink></button>
        <form onSubmit={submitData}>
          <p>Any Suggestion?</p>
          <label>Name</label>
          <input type='text' placeholder='Your Name.....' name='name' onChange={handleData} autoComplete='off' value={data.name}></input>
          <label>Suggestion</label>
          <input type='text' placeholder='Your Suggestion.....' name='suggestion' onChange={handleData} autoComplete='off' value={data.suggestion}></input>
          <button type='submit'>Submit</button>
        </form>
        </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact