import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom'
import smallLogo from '../Pages/SmallLOGO.png'
import menu from '../Pages/MENU.png';

const ServicesHeader = () => {
  
  const [ham,setHam]=useState(false);
  const setMenu=()=>{
    setHam(!ham);
  }
  console.log(ham)
  return (
    <>
    <div className={ham?'header-on':'header'}>
    <div className='name'>
        <img src={smallLogo} alt='LOGO OFFICIAL'></img>
        <p>TEAM ONLY GAINS</p>
    </div>
    <div className={ham?'links-on':'links'}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Services'>Services</NavLink>
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/Signup'>Signup</NavLink>
    </div>
    <div className='menu'>
      <img src={menu} alt='MENU' onClick={setMenu}></img>
    </div>
    </div>
    </>
  )
}
export default ServicesHeader