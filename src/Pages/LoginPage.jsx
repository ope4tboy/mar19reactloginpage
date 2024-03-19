import React from 'react'
import NavBar from '../Component/NavBar'
import { useState } from 'react'
import Footer from '../Component/Footer'

const LoginPage = () => {
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')

    const LoginPage = (e) => {
        e.preventDefault()
        const formData = {UserName, PassWord}
        console.log(formData)
    }
        
    return (
        <div>
            <NavBar />
            <div className="formontainer d-flex justify-content-center align-items-center vh-100">
                <form onSubmit={LoginPage} action="" className='border rounded bg-light pd-light p-5'>
                <h2 className='text-center text-primary'>Login Form</h2>
                    <div>
                    <label htmlfor="">Username:</label>
                    <input 
                    value={UserName} 
                    className='bg-white'
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" 
                    placeholder='Enter Your Username'></input>
                    </div>

                    <div>
                    <label htmlfor="">Password:</label>
                    <input 
                    value={PassWord}
                    onChange={(e) => setPassWord(e.target.value)}
                    type="password" 
                    placeholder='Enter Your Password' />
                    </div>

                   <div className="button-container my-3">
                   <button className='btn btn-primary w-100'>Login</button>
                   </div>

                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage