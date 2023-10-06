import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import BMI from '../Services/BMI';
import PPL from '../Services/PPL';
import TwoX from '../Services/TwoX';
import BroSplit from '../Services/BroSplit';
import LandingPage from '../Services/LandingPage';
import WorkoutLandingPage from '../Services/WorkoutLandingPage';
import CalculatorLandingPage from '../Services/CalculatorLandingPage';
import BMR from '../Services/BMR';
import DIY from '../Services/DIY';
import CalorieCaounter from '../Services/CalorieCaounter';
const AnimatedRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/LandingPage' element={<LandingPage/>}></Route>
      <Route path='/DIYProgram' element={<DIY/>}></Route>
      <Route path='/CalculatorLandingPage' element={<CalculatorLandingPage/>}></Route>
      <Route path='/BMI' element={<BMI/>}></Route>
      <Route path='/BMR' element={<BMR/>}></Route>
      <Route path='/CalorieCounter' element={<CalorieCaounter/>}></Route>
      <Route path='/WorkoutLandingPage' element={<WorkoutLandingPage/>}></Route>
      <Route path='/PPL' element={<PPL/>}></Route>
      <Route path='/TwoX' element={<TwoX/>}></Route>
      <Route path='/BroSplit' element={<BroSplit/>}></Route>
    </Routes>
    </>
  )
}
export default AnimatedRoutes