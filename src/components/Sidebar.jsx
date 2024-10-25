import React from 'react'
import { IoHomeOutline,IoSearch } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TfiAlignJustify } from "react-icons/tfi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { TbSquarePlus } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
// import { SiThreads } from "react-icons/si";
import { useState } from 'react';
import Moreoptions from './Moreoptions';
import { useTheme } from '../contexts/ThemeContext';
import { NavLink } from 'react-router-dom';



function Sidebar() {

const { darkTheme} = useTheme();


  const [showMoreOptions, setShowMoreOptions] = useState(false);


const handleToggleMoreOptions = () => {
  setShowMoreOptions(false);
};




  return (
    <div className={`${darkTheme && 'dark'}`}>
    <div className='ml-2  dark:bg-[#262626] '>

<div className='mt-8 ml-4 dark:text-white'>
    <p className='font-cursive text-2xl hidden xl:inline ml-5'>Instagram</p>
    <div className='hidden md:inline xl:hidden'><FaInstagram size={22}/></div>
</div>

{showMoreOptions && <div className='z-20 absolute top-12'><Moreoptions onClose={handleToggleMoreOptions} /></div>}




{/* icons */}
<nav className='mt-8 grid gap-y-1'>

<NavLink  to="/">
{({ isActive}) => (
<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >
<IoHomeOutline  size={25} className={`${isActive && 'text-blue-500'}`}/>
<p className={`text-md hidden xl:inline ${isActive && 'text-blue-500'}`}>Home</p>
</div>
  )}
</NavLink>


<NavLink
  to="/search"
  >
    {({ isActive}) => (
<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >
<IoSearch  size={25} className={`${isActive && 'text-blue-500'}`}/>
<p className={`text-md hidden  xl:inline ${isActive && 'text-blue-500'}`}>Search</p>
</div>
      )}
</NavLink>


<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<FaRegCompass  size={25} className='text-black/80 dark:text-white'/>
<p className='text-md  hidden  xl:inline'>Explore</p>
</div>

<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<MdOutlineSmartDisplay  size={25} className='text-black/90 dark:text-white'/>
<p className='text-md hidden  xl:inline'>Reels</p>
</div>

<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<RiMessengerLine  size={25} className='text-black/90 dark:text-white'/>
<p className='text-md hidden  xl:inline'>Messages</p>
</div>

<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<FaRegHeart size={22} className='text-black/90 dark:text-white'/>
<p className='text-md hidden  xl:inline'>Notifications</p>
</div>

<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<TbSquarePlus size={25} className='text-black dark:text-white'/>
<p className='text-md hidden  xl:inline'>Create</p>
</div>


<div className='flex space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md dark:text-white  dark:hover:bg-[#555555]' >

<CgProfile size={25} className='text-black/90 hidden md:block dark:text-white' />
<p className='text-md hidden  xl:inline'>Profile</p>
</div>



<div 
onClick={()=>setShowMoreOptions(!showMoreOptions)}
className='space-x-5 hover:bg-gray-200/70 hover:cursor-pointer w-[90%] p-3 rounded-md flex hidden xl:flex dark:text-white  dark:hover:bg-[#555555]' >

<TfiAlignJustify size={20} className='text-black dark:text-white'/>
<p className='text-md hidden  xl:inline'>More</p>
</div>

{/* {openBar && <div className='z-20 absolute top-3'><Moreoptions onClose={handleCloseMoreOptions} /></div>} */}





{/* <div className='sm:hidden lg:block xl:hidden absolute bottom-10 ml-2'>
  <SiThreads size={22}/>
      </div>


<div className='sm:hidden lg:block xl:hidden absolute bottom-2 lg:ml-2'>
  <TfiAlignJustify size={22}/>
      </div> */}




</nav>


    </div>
    </div>
  )
}

export default Sidebar
