import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Mainbar from '../../components/Mainbar'
import Rightbar from '../../components/Rightbar'
import { useTheme } from '../../contexts/ThemeContext';
import { SiThreads } from "react-icons/si";
import { TfiAlignJustify } from "react-icons/tfi";
import Moreoptions from '../../components/Moreoptions';



function Home() {

  const [showMoreOptionslg,setShowMoreOptionslg]=useState(false)

  const { darkTheme, toggleTheme } = useTheme();
  return (
    <div className={`${darkTheme && 'dark'}`}>
    <div className='grid grid-cols-5 dark:bg-[#262626] relative '>

     {showMoreOptionslg && <div className='absolute z-10 bottom-0 left-12 '><Moreoptions/></div>}

      <div className='hidden lg:block lg:w-[100px] xl:w-[90%] min-h-screen bg-slate-50/20 dark:bg-[#262626] border-r border-gray-300 dark:border-white/15'>
     <Sidebar/>



     <div className='sm:hidden lg:block xl:hidden absolute bottom-10 ml-2'>
  <SiThreads size={22} className='dark:text-white'/>
      </div>


<div 
onClick={()=>setShowMoreOptionslg(!showMoreOptionslg)}
className='sm:hidden lg:block xl:hidden absolute bottom-2 lg:ml-2'>
  <TfiAlignJustify size={22} className='dark:text-white'/>
      </div>

    </div>
   
    <div className='w-[593px]  col-span-3'>
      <Mainbar/>
    </div>

    <div className='hidden xl:block xl:w-[193px] '>
      <Rightbar/>
      </div>
   
   
    </div>
    </div>
  )
}

export default Home
