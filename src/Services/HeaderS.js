import React, { useState } from 'react'
import '../Components/Components.css'
import smallLogo from '../Pages/SmallLOGO.png'
import { NavLink , useNavigate} from 'react-router-dom'
import menu from '../Pages/MENU.png';
const HeaderS = () => {
  let i=0;
  const navigate=useNavigate();
    const [ham,setHam]=useState(false);
    const setMenu=()=>{
      setHam(!ham);
    }
    const LOGOUT=()=>{
      
      if(i===0){
        alert("Sure To Logout?")
        i++;
      }
      else if(i===1){
        navigate('/Login')
      }
    }
    return (
      <>
      <div className={ham?'header-on':'header'}>
      <div className='name'>
          <img src={smallLogo} alt='LOGO OFFICIAL'></img>
          <p>TEAM ONLY GAINS</p>
      </div>
      <div className={ham?'links-on':'links'}>
          <NavLink to='/LandingPage'>Home</NavLink>
          <NavLink to='/CalculatorLandingPage'>Calculators</NavLink>
          <NavLink to='/WorkoutLandingPage'>Plans</NavLink>
          <NavLink to='/DIYProgram'>DIY Plans</NavLink>
          <a onClick={LOGOUT}>Logout</a>
      </div>
      <div className='menu'>
        <img src={menu} alt='MENU' onClick={setMenu}></img>
      </div>
      </div>
      </>
    )
}

export default HeaderS