import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginSuccess } from '../features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const email = formData.email
        const password = formData.password

        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })

        const data = await res.json()

        if(res.ok) {
            dispatch(loginSuccess(data))
            navigate('/')

        }else{
            alert(data.message)
        }
    }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-bold text-3xl p-3 my-5'>Login</h1>
        <form className='flex flex-col my-5 gap-3' onSubmit={handleSubmit}>
            <input className='px-8 border-2 py-5' onChange={handleChange} value={formData.email} type="email" name="email" placeholder='email'/>
            <input className='px-8 border-2 py-5' onChange={handleChange} value={formData.password} type="password" name="password" placeholder='password'/>
            <div>
                <button type='submit' className='bg-red-500 text-white py-3 w-full hover:bg-red-600 transition-colors'>Login</button>
            </div>
        <Link className='text-blue-500 hover:text-blue-600 hover:underline' to='/register'>You don't have a account, please Register</Link>
        </form>
    </div>
  )
}

export default Login