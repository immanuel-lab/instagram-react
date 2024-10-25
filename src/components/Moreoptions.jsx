import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { LuActivitySquare } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md"; // Corrected import
import { BsExclamationSquare } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useRef,useEffect} from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Moreoptions({  onClose }) {
    const moreOptionsBarRef = useRef();


    const { darkTheme, toggleTheme } = useTheme();
    

    useEffect(() => {
        const handleClose = (e) => {
          if (!moreOptionsBarRef.current.contains(e.target)) {
            onClose()
          }
        };
      
        addEventListener('mousedown', handleClose);
      
        return () => {
          removeEventListener('mousedown', handleClose);
        };
      }, [onClose]);

   
  
      return (
    <div className={`${darkTheme && 'dark'}`}>
      <div ref={moreOptionsBarRef} className=' w-[250px] h-[460px] rounded-lg grid gap-y-1 bg-white shadow-2xl relative dark:bg-[#262626] '>
       
        <div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%]  p-3 rounded-lg mt-2 ml-1 dark:text-white  dark:hover:bg-[#555555]' >
          <IoIosSettings  size={20}/>
          <p className='text-sm hidden lg:inline  xl:inline '>Settings</p>
        </div>

        <div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%] p-3 rounded-lg ml-1 dark:text-white dark:hover:bg-[#555555]' >
          <LuActivitySquare  size={20}/>
          <p className='text-sm hidden lg:inline xl:inline'>Your Activity</p>
        </div>

        <div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%] p-3 rounded-lg ml-1 dark:text-white dark:hover:bg-[#555555]' >
          <IoBookmarkOutline  size={20}/>
          <p className='text-sm hidden lg:inline xl:inline'>Saved</p>
        </div>

        
      
        <div 
        onClick={toggleTheme}
        className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%] p-3 rounded-lg ml-1 ml-1 dark:text-white dark:hover:bg-[#555555]' >
         { darkTheme ? <FaMoon size={20}/>:<MdWbSunny size={20}/> }
          <p className='text-sm hidden lg:inline xl:inline'>Switch Appearance</p>
        </div>

        <div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%] p-3 rounded-lg ml-1 dark:text-white dark:hover:bg-[#555555]' >
          <BsExclamationSquare  size={18}/>
          <p className='text-sm hidden lg:inline xl:inline'>Report a Problem</p>
        </div>

        <hr className='border border-2 bg-gray-300'/>
        
        <div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[95%] p-3 rounded-lg ml-1 dark:text-white dark:hover:bg-[#555555]' >
          <FaThreads  size={20}/>
          <p className='text-sm hidden lg:inline xl:inline'>Threads</p>
        </div>

        <hr className='border border-2 bg-gray-200'/>

        <div className=' hover:bg-gray-200/70 hover:cursor-pointer w-[92%] p-3 rounded-lg ml-2 dark:text-white dark:hover:bg-[#555555]' >
          <p className='text-sm hidden lg:inline xl:inline'>Switch Account</p>
        </div>

        <hr />

        <div className=' hover:bg-gray-200/70 hover:cursor-pointer w-[92%] p-3 rounded-lg ml-2 mb-2 dark:text-white dark:hover:bg-[#555555]' >
          <p className='text-sm hidden  lg:inline xl:inline'>Log out</p>
        </div>

      </div>
    </div>
  )
}

export default Moreoptions;
