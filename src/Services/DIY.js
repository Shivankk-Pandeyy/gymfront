import React from 'react'
import './Services.css'
import HeaderS from './HeaderS'
import Footer from '../Components/Footer'
import pic from './DIYpage.gif';
const DIY = () => {
  return (
    <>
    <HeaderS/>
    <div className='diy'>
    <img src={pic} alt='SORRY FOR INCONVINIENCE'></img>
    </div>
    <Footer/>
    </>
  )
}

export default DIY