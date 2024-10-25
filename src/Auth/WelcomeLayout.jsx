import React from 'react'
import  george from '../assets/george.jpg'
import Login from './Login'

function WelcomeLayout() {
  return (
    <>
      <div className='grid lg:grid-cols-2'>
                <div className='hidden lg:block '>
                    <img src={george} alt='image' className='min-h-screen object-cover w-full'/>
                </div>
                <div className='mt-1'>
                    <Login/>
                </div>

      </div>
    </>
  )
}

export default WelcomeLayout



