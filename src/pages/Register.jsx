import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-bold text-3xl p-3 my-5'>Register</h1>
        <form className='flex flex-col my-5 gap-3' onSubmit={handleSubmit}>
            <input className='px-8 border-2 py-5' onChange={handleChange} value={formData.username} type="text" name="username" placeholder='Username'/>
            <input className='px-8 border-2 py-5' onChange={handleChange} value={formData.email} type="email" name="email" placeholder='email'/>
            <input className='px-8 border-2 py-5' onChange={handleChange} value={formData.password} type="password" name="password" placeholder='password'/>
            <div>
                <button type='submit' className='bg-red-500 text-white py-3 w-full hover:bg-red-600 transition-colors'>Register</button>
            </div>
        <Link className='text-blue-500 hover:text-blue-600 hover:underline' to='/login'>Already have a account, please login</Link>
        </form>
    </div>
  )
}

export default Register