import React, { useEffect } from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Form method='POST' action='/'>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name='email' />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" name='password' />
        </div>
        <button type='submit'>Subscribe</button>
      </Form>
    </div>
  )
}

export default FormComponent


export const action = async ({request}:any)=> {
 
  const data =await request.formData()
  const innputValues = {
    email:data.get('email'),
    message: data.get('password')
  }
  console.log(innputValues)
  return redirect('/countries');
}