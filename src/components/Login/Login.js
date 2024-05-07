import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import Ellipse from '../../assets/Ellipse 33.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [check,setCheck] = useState(false)
    const [error,setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value} = event.target
        if(name === 'email') setEmail(value)
        else if(name === 'password') setPassword(value)
    }

    const handleCheckboxChange = (event) => {
        setCheck(event.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password){
            setError('Please fill in all the fields')
        }else {
            setError('')
            setEmail('')
            setPassword('')
            navigate('/dashboard')
            setCheck(false)
        }
    }
  return (
    <>
        <div className='login-page'>
            <div className='login-page-box'>
                <div className='login-logo'>
                    <img src = {logo} alt ='logo' />
                </div>
                <div className='lp-input-container'>
                    <div className='login-user-image'><img src = {Ellipse} alt = 'logo1'/></div>
                    <div>
                        <div className='login-box'>
                            <span>Welcome back...</span>
                        </div>
                        <form onSubmit={handleSubmit} className='form-wrap'>
                            <input type = 'text' value={email} name = 'email' onChange={handleChange} placeholder='Enter your email...' className = 'email-input'/>
                            <input type = 'password' value={password} name = 'password' onChange={handleChange} placeholder='Enter your password' className = 'email-input'/>
                            <div className='checkbox-container'>
                                <input type = 'checkbox' checked={check} onChange={handleCheckboxChange}/>
                                <span className='text-box'>Remember Me</span>
                            </div>
                            <button className='login-button'>Login</button>
                            {error && <p>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login