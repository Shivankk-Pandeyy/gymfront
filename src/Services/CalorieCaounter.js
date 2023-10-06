import React from 'react';
import pic from './DIYpage.gif';
import WorkoutCalculatorHeader from './WorkoutCalculatorHeader';
import Footer from '../Components/Footer';
const CalorieCaounter = () => {
  return (
    <>
    <WorkoutCalculatorHeader/>
    <div className='diy'>
    <img src={pic} alt='SORRY FOR THE INCONVININCE'></img>
    </div>
    <Footer/>
    </>
  )
}

export default CalorieCaounter