import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
function Register() {

  const{register,handleSubmit, formState: { errors ,isValid ,isSubmitting},unregister }=useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
<div className='flex flex-col items-center'>
<div className='w-[350px] min-h-[602] border border-gray-300 mt-[10px]'>
<center className=' mt-10'>
  <h1 className='font-cursive text-4xl text-gray-700'>Instagram</h1>
  <div className='mt-5'>
   <p className=' text-base font-semibold text-black/60 leading-[20px]'> Sign in to see photos and videos <br/> from your friends.</p>
  </div>

{/* facebook button */}
  <div className='mt-5'>
  <div className=' w-[268px] h-[33px] bg-[#0095F6] px-[7px] py-[16px] rounded-lg flex justify-center items-center space-x-3'>
    <h1 className='w-[20px] h-[20px] bg-white font-semibold text-blue-600'>f</h1>
    <button className='text-white font-semibold'>login with facebook</button>
  </div>
  </div>


{/* break */}

<div className='mt-5'>
<div className="flex items-center">
        <div className="flex-grow border-b-[1px] border-[#DBDBDB] ml-10"></div>
        <h4 className="px-4 text-sm text-center">OR</h4>
        <div className="flex-grow  border-b-[1px] border-[#DBDBDB] mr-10"></div>
    </div>
</div>

{/* forms */}
<div className='mt-3'>
  <form onSubmit={handleSubmit(onSubmit)}>
    
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
    className='w-[256px] h-[30px] bg-[#FAFAFA] border border-gray-300 px-[7px] py-[9px] focus:outline-none'/>
   

    <input 
    type='text'
    {...register("name", { required: true })}
    placeholder='Full Name'
    style={{ fontSize: "12px"}}
   className='w-[256px] h-[30px] mt-2  bg-[#FAFAFA] border border-gray-300 px-[7px] py-[9px] focus:outline-none'
   />

    
    <input 
    placeholder='Username'
    {...register("username", { required: true })}
    style={{ fontSize: "12px"}}
    className='w-[256px] h-[30px] bg-[#FAFAFA] mt-2 border border-gray-300 px-[7px] py-[9px] focus:outline-none'
    />

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
    className='w-[256px] h-[30px] bg-[#FAFAFA] mt-2 border  border-gray-300 px-[7px] py-[9px] focus:outline-none'
    />
  
<div className='mt-3 mx-10'>
  <p 
  style={{ fontSize: "12px", lineHeight: "14px" }} 
  className='text-gray-500'
  >
    People who use our service may have uploaded your contact information to Instagram.<span className='text-[#00376B]'>Learn more</span> </p>
  </div>


  <div className='mt-5 mx-10'>
  <p 
  style={{ fontSize: "12px", lineHeight: "14px" }} 
  className='text-gray-500'
  >
    
By signing up, you agree to our<span className='text-[#00376B] hover:cursor-pointer'> Terms, Privacy Policy and Cookies Policy.</span>
</p>
  </div>

<div className='mt-6 mb-6'>
  <button
  // disabled={!isValid}
  className='w-[268px] h-[32px]  bg-[#67a5fc] rounded-lg text-white font-semibold'
  >
    {isSubmitting?<ClipLoader color={'#FFFFFF'}  size={18}/>:<p>Sign Up</p>}
  </button>
</div>

{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
{errors.name && <p className='text-red-500 '>name is required</p>}
{errors.username && <p className='text-red-500 '>username is required</p>}
{errors.password && <p className='text-red-500'>{errors.password.message}</p>}

  </form>


</div>







</center>




</div>

</div>

<div className='flex justify-center'>
<div className='w-[350px] h-20 border border-gray-300 mb-10  mt-7 flex justify-center items-center'>
<p>Have an account? <span className='text-[#0095F6] hover:cursor-pointer'> <Link to="/login">Log in</Link></span></p>

</div>
</div>
    </>
  )
}

export default Register;
