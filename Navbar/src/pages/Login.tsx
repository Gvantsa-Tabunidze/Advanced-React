import React from 'react'
import AuthForm from '../components/forms/AuthForm'
import type { IAuth } from '../interfaces/auth.interface'
import $axios from '../http'


const Login = () => {
    const  onSubmit =(formData:IAuth) =>{
        $axios.post('/login', {...formData})
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    }  
    
    return <AuthForm type='login' onSubmit={onSubmit}/>
}

export default Login
