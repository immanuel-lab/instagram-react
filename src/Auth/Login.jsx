// https://play.tailwindcss.com/Hw3ZXvr7MV

import React from 'react'
import { useForm } from "react-hook-form"
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

function Login() {

  const{register,handleSubmit, formState: {isValid ,isSubmitting}}=useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
<div className='flex justify-center items-center'>

<div className='w-[350px] min-h-[602] border border-gray-300 mt-[10px]'>


<div className='flex flex-col items-center justify-center'>
<h1 className='font-cursive text-4xl text-gray-700 mt-10'>Instagram</h1>
</div>


<div className='mx-10 mt-12'>
<form>
<input 
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "please enter valid email"
      }
    })} 
    placeholder=' email address'
    style={{ fontSize: "12px"}}
    className='w-[256px] h-[35px] bg-[#FAFAFA] border border-gray-300 px-[7px] py-[9px] focus:outline-none'/>

<input 
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters"
      },
      maxLength: {
        value: 30,
        message: "Password cannot be more than 30 characters"
      }
    })} 
    placeholder='Password'
    style={{ fontSize: "12px"}}
    className='w-[256px] h-[35px] bg-[#FAFAFA] mt-2 border  border-gray-300 px-[7px] py-[9px] focus:outline-none'
    />

<div className='mt-6 mb-6'>
  <button
  disabled={!isValid}
  className='w-[268px] h-[32px]  bg-[#67a5fc] rounded-lg text-white font-semibold'
  >
    {isSubmitting?<ClipLoader color={'#FFFFFF'}  size={18}/>:<p>Log in</p>}
  </button>
</div>

</form>

{/* break */}
<div className='mt-3'>
<div className="flex items-center">
        <div className="flex-grow border-b-[1px] border-[#DBDBDB] ml-10"></div>
        <h4 className="px-4 text-sm text-center text-gray-500">OR</h4>
        <div className="flex-grow  border-b-[1px] border-[#DBDBDB] mr-10"></div>
    </div>
</div>


<div className='flex space-x-3 mt-10 ml-10'>
  <div className='size-5 bg-blue-600'>
<h1 className='text-white text-center font-semibold'>f</h1>
</div>
  <p className='text-blue-900 font-semibold text-sm'>Login with Facebook</p>
</div>

<div className='mt-7 ml-12 mb-5'>
  <p className='text-sm  text-blue-900'>forgotten your password ?</p>
</div>



</div>
</div>
</div>


<div className='flex justify-center'>
<div className='w-[350px] h-20 border border-gray-300 mb-10  mt-7 flex justify-center items-center'>
<p>Dont have an account? <span className='text-[#0095F6] hover:cursor-pointer'>
  <Link to="/register">
  Sign Up
  </Link>
  </span></p>

</div>
</div>

      
    </>
  )
}

export default Login
