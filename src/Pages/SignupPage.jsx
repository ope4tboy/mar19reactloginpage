import React from 'react'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer'
import { useState } from 'react'

const SignupPage = () => {
    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [PassWord, setPassWord] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const formData = {FullName, Email, PhoneNumber, PassWord}
        console.log(formData)
    }
  return (
    <div>
        <NavBar/>
        <div className="formontainer d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={submitForm} action="" className='border rounded bg-light pd-light p-5'>
                <h2 className='text-center text-secondary' >Signup</h2>
                <div className="input-container my-3">
                    <label htmlFor="">FullName:</label>
                    <input 
                        value={FullName} 
                        className='bg-white' 
                        onChange={(e) => setFullName(e.target.value)}
                        type="text" 
                        placeholder='Enter Your Fullname' />
                </div>

                <div className="input-container my-3">
                    <label htmlFor="">Email:</label>
                    <input 
                    value={Email} 
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder='Enter Your Email Address' />
                </div>

                <div className="input-container my-3">
                    <label htmlFor="">Phone Number:</label>
                    <input 
                    value={PhoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel" 
                    placeholder='Enter Your Phone Number' />
                </div>

                <div className="input-container my-3">
                    <label htmlFor="">Password:</label>
                    <input 
                    value={PassWord} 
                    onChange={(e) => setPassWord(e.target.value)}
                    type="Password" 
                    placeholder='Enter Your Password' />
                </div>
                <div className="button-container my-3">
                    <button className='btn btn-primary w-100'>Signup</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default SignupPage