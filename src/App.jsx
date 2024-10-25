// import React from 'react'
// import Register from './Auth/Register'
// import Login from './Auth/Login'
// import WelcomeLayout from './Auth/WelcomeLayout'
// import Home from './root/pages/Home';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
// import AuthLayout from './Auth/AuthProvider';


// function App() {
//   return (
//     <>
 
//  <BrowserRouter>
//       <AuthProvider>
//         <Routes>
        
//         <Route path='/login' element={<WelcomeLayout/>}>
//                 <Route index element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//         </Route>

          
//         <Route path="/" element={<AuthProvider/>}>
//          <Route path="/home" element={<Home />} />
//          </Route>
        
//         </Routes>
      
//       </AuthProvider>
//     </BrowserRouter>
  
//    </>
//  )
// }

// export default App;

   

    

// In App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthLayout from './Auth/AuthProvider';
import WelcomeLayout from './Auth/WelcomeLayout';
import Register from './Auth/Register';
import Home from './root/pages/Home'; // Import your Home component
import Search from './root/pages/Search';
import Explore from './root/pages/Explore';
import Notifications from './root/pages/Notifications';
import Messages from './root/pages/Messages';
import Reels from './root/pages/Reels';
import Create from './root/pages/Create';
import Profile from './root/pages/Profile';

function App() {
  return (
    <>
     <BrowserRouter>
     {/* <AuthProvider> */}
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<WelcomeLayout />} />
         
       {/* <Route path="/" element={<AuthLayout />}> */}
            {/*  authenticated routes  */}
           <Route index element={<Home />} />
           <Route path="/search" element={<Search/>}/>
           <Route path="/explore" element={<Explore/>}/>
           <Route path="/reels" element={<Reels/>}/>
           <Route path="/notifications" element={<Notifications/>}/>
           <Route path="/messages" element={<Messages/>}/>
           <Route path="/create" element={<Create/>}/>
           <Route path="/profile" element={<Profile/>}/>

           {/* </Route> */}
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter> 
       
       
    </>
  );
}

export default App;

