import { Button, FormControl,  TextField, Typography } from '@mui/material'
import React, { useState, type FormEvent } from 'react'
import type { IAuth } from '../../interfaces/auth.interface'

interface AuthformProps{
    type:string,
    onSubmit: (formData:IAuth)=>void

}
const AuthForm:React.FC<AuthformProps> = ({type, onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

const handleSubmit =(e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  onSubmit({email, password})
  setEmail('')
}

  return (
    <div>
      <FormControl component = 'form' onSubmit={handleSubmit}>
        <Typography>{type === 'login' ? 'Login' : 'Register'} </Typography>
        <TextField 
        style={{marginBottom:'8px'}}
        label='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        variant='outlined'
        type='email'
        fullWidth
        required
        />
   
   
        <TextField 
        label='Password'
        value={password}
        onChange={(e)=>setPass(e.target.value)}
        variant='outlined'
        type='password'
        fullWidth
        required
        />

        <Button type='submit'><Typography>{type === 'login' ? 'Login' : 'Register'}</Typography></Button>
      </FormControl>
    </div>
  )
}

export default AuthForm
