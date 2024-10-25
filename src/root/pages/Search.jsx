import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useTheme } from '../../contexts/ThemeContext';


function Search() {
  const { darkTheme} = useTheme();

  return (
    <>
    <div className={`${darkTheme && 'dark'}`}>
   
    <div className="grid grid-cols-5  dark:dark:bg-[#262626] min-h-screen">
      <Sidebar/>
    <div className='cols-span-3'>search profile</div>  
    </div>
    </div>
    </>
  )
}

export default Search
