import { TextField } from '@mui/material'
import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userLoginApi, userRegisterApi } from '../Services/allApis'
import { adminLoginApi } from '../Services/allApis'
import './AuthMQ.css'


function Auth({ login, admin }) {

    const [userData, setUserData] = useState({
        username: "", email: "", password: "", phone: ""
    })

    const navigate = useNavigate()

    const handleUserRegistration = async (e) => {
        e.preventDefault()
        if (!userData.username || !userData.email || !userData.password || !userData.phone) {
            message.warning("Enter Valid Details")
        }
        else {
            const res = await userRegisterApi(userData)
            if (res.status === 200) {
                message.success(`Registration of ${userData.username} Success`)
                navigate('/')
                setUserData({ username: "", email: "", password: "", phone: "" })
            }
            else {
                message.error("Already Existed User! Enter Unique Email")
            }
        }
    }

    const handleUserLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {
            message.warning("Enter Valid Details")
        }
        else {
            const res = await userLoginApi(userData)
            if (res.status === 200 && res.data.existingUser) {
                localStorage.setItem("currentUser", JSON.stringify(res.data.existingUser))
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("role", res.data.role)
                message.success("Login SuccessFully")
                setUserData({username: "", email: "", password: "", phone: ""})
                navigate('/home')

            }
            else if (res.status === 200 && res.data.existingAdmin) {
                localStorage.setItem("currentUser", JSON.stringify(res.data.existingAdmin))
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("role", res.data.role)
                message.success("Login SuccessFully")
                setUserData({username: "", email: "", password: "", phone: ""})
                navigate('/adminpage')

            }
            else {
                message.error("Login Failed!! Please Try Again")
            }
        }
    }

    console.log(userData);


    const registerForm = login ? true : false

    return (
        // <div>

        <div className='d-flex justify-content-center flex-column' style={{ position: "relative", backgroundColor: "gray" }} >

            <div className='d-flex justify-content-center pt-4'>

                {
                    registerForm ?
                        <h2>Sign Up</h2>
                        :
                        <h2>Sign In</h2>
                }
            </div>
            <div className='d-flex justify-content-center '>
                <div className='d-flex flex-column '>
                    {
                        registerForm &&
                        <>
                            <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" className='mt-4' style={{ width: "100%" }} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                            <TextField id="outlined-basic" type='number' label="Phone Number" variant="outlined" className='mt-3' style={{ width: "100%" }}  onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                        </>
                    }

                    <TextField id="outlined-basic" label="Email Address" variant="outlined" className='my-3 ' style={{ width: "100%" }} value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" className='mb-3' style={{ width: "100%" }} value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                    <div className='mb-5 '>
                        {
                            registerForm ?
                                <div>

                                    <Button className='mx-3' onClick={handleUserRegistration}>Sign Up</Button>
                                    <Link to={'/'} style={{ textDecoration: "none", color: "black" }} className='me-2'>Already a User? Sign In...</Link>

                                </div> :
                                <div>
                                    <Button className='me-3' onClick={handleUserLogin}>Sign In</Button>
                                    <Link to={'/register'} style={{ textDecoration: "none", color: "black" }} className='me-2'>New User? Sign Up...</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Auth