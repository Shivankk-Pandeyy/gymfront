import React, { useState } from 'react'
import './Components.css'
import smallLogo from '../Pages/SmallLOGO.png'
import { NavLink } from 'react-router-dom'
import menu from '../Pages/MENU.png';
const Header = () => {
  const [ham,setHam]=useState(false);
  const setMenu=()=>{
    setHam(!ham);
  }

  return (
    <>
    <div className={ham?'header-on':'header'}>
    <div className='name'>
        <img src={smallLogo} alt='LOGO OFFICIAL'></img>
        <p>TEAM ONLY GAINS</p>
    </div>
    <div className={ham?'links-on':'links'}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/Services'>Services</NavLink>
    </div>
    <div className='menu'>
      <img src={menu} alt='MENU' onClick={setMenu}></img>
    </div>
    </div>
    </>
  )
}

export default Header;