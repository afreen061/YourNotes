import React from 'react';
import {Formik,Form ,Field} from 'formik';
import * as Yup from 'yup';
import logo from '../assets/logo2.jpg';
import image from '../assets/image2.jpg'


import {useState,useEffect} from 'react'
const Loginsignup =()=>{
  const int ={
    name:'Afreen',
    email:'Anjum',
    password:'12345678'

  }
  const validate ={

  }
return(
  <div className=' w-[500px] h-[500px]'>
   <Formik
   initialValues ={int}

   onSubmit ={(values)=>{
     const paylod ={
      userNAme:values.name,
      email:values.email,
      password:values.password
     
     }
     console.log(paylod)
   }}
   >
    <>
    <div className='rounded-2xl'><img className='rounded-full' src={image} alt='logo'/></div>
    <Form>
      <Field name='name' type='text' placeholder='name'/>
      <Field name='email' type='text' placeholder='email'/>
      <Field name='password' type='text' placeholder='password'/>
      <button type='submit'>Submit</button>
    </Form>
    </>
   </Formik>
  </div>
)
}
export default Loginsignup;
