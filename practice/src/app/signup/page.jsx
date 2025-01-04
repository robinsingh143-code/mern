'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast'





const SignupSchema = Yup.object().shape({
  name : Yup.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50,'Name must be  at must 50 characters')
  .required('Name is required'),

  email : Yup.string()
  .email('please enter a vaild email address')
  .required('Email is requied'),

  password : Yup.string()
  .min(8,'password must be at least 8 characters')
  .matches(/[a-z]/,'password must contain at least one loweercase letter')
  .matches(/[A-Z]/, 'password must contain at least one uppercase letter')
  .matches(/[!@#$%^&*()_+\[\]{};':"\\|,.<>|/?]/, 'password must contain at least one charracter')
  .required('password is required'),
})



const SignUp = () => {
  const signupForm = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : '',
    },
    onSubmit : (values, {resetForm}) => {
      console.log(values);
      
      resetForm()
      toast.success(" SignUp Successfully ")
    },
    validationSchema : SignupSchema,

  })


  return (
    <div className='flex justify-center items-center h-screen bg-gray-500'>
    <div className="md:w-full lg:w-1/4 h-auto bg-white border-[5px] rounded-md shadow-lg">
  <div className="m-2 text-center ">
    <h1 className="p-2 font-bold italic text-black text-xl  md:text-2xl lg:text-4xl ">
      Sign Up
    </h1>
    <p className="text-sm text-gray-800">create an account</p>
  </div>
  <form onSubmit={signupForm.handleSubmit} action="" className="mx-3 mb-2 text-gray-800">
    <label htmlFor="name">Name</label>
    {signupForm.errors.name && signupForm.touched.name ? (
      <div className='text-red-500 text-sm'>
        {signupForm.errors.name}
      </div>
    ) : null}
    <input
      id="name"
      type="text"
      onChange={signupForm.handleChange}
      value={signupForm.values.name}
      placeholder="Name"
      className="mb-2 p-2 block w-full rounded-md border border-gray-500 border-b-4 "
    />
    <label htmlFor="email">Email</label>
    {signupForm.errors.email && signupForm.touched.email ?(
      <div className='text-red-500 text-sm'>
        {signupForm.errors.email}
      </div>

    ) : null}
    <input  
      id="email"
      type="text"
      onChange={signupForm.handleChange}
      value={signupForm.values.email}
      placeholder="Email"
      className="mb-2 p-2 block w-full rounded-md  border border-gray-500 border-b-4 "
    />
    <label htmlFor="password">Password</label>
    {signupForm.errors.password && signupForm.touched.password ?(
      <div className='text-red-500 text-sm'>
        {signupForm.errors.password}
      </div>
    ) : null}
    <input
      id="password"
      type="text"
      onChange={signupForm.handleChange}
      value={signupForm.values.password}
      placeholder="Password"
      className="mb-2 p-2 block w-full rounded-md  border border-gray-500 border-b-4 "
    />
    
    <button type="submit" className=" mb-3 p-2  w-full  text-black border bg-blue-500 rounded-md hover:bg-purple-300 ">
      sign up
    </button>
  </form>
  
  
</div>
</div>

  )
}

export default SignUp;




