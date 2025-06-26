import React from 'react'
import AuthForm from '../components/forms/AuthForm'
import type { IAuth } from '../interfaces/auth.interface'
import $axios from '../http'


const Register = () => {
const  onSubmit = async (formData:IAuth) =>{
    try {
        const response =await $axios.post('/registration', {...formData})
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}  
  return <AuthForm type='register' onSubmit={onSubmit}/>
}

export default Register
