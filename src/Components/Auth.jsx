import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLoginApi, userRegisterApi } from '../Services/allApis'
import './AuthMQ.css'
import hospitalLogo from '../Assets/hospital_logo.png'
import { IoIosArrowBack } from "react-icons/io";
import iphoneBattery from '../Assets/iphone_battery.png'
import fbLogo from '../Assets/Facebook_icon.png'
import googleIcon from '../Assets/google_icon.webp'
import Xlogo from '../Assets/x_icon.jpg'



function Auth({ login, admin }) {

    // const timeNow = Date().slice(16, 21)
    // console.log(timeNow)
    const [userData, setUserData] = useState({
        username: "", email: "", password: "", phone: ""
    })

    const [time, setTime] = useState("")
    useEffect(() => {
        setInterval(() => {
            setTime(Date().slice(16, 21))

        }, 1000)
    }, [])
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
                setUserData({ username: "", email: "", password: "", phone: "" })
                navigate('/home')

            }
            else if (res.status === 200 && res.data.existingAdmin) {
                localStorage.setItem("currentUser", JSON.stringify(res.data.existingAdmin))
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("role", res.data.role)
                message.success("Login SuccessFully")
                setUserData({ username: "", email: "", password: "", phone: "" })
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
        <div>
            <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "700px" }}>
                <div style={{ width: "310px", height: "80%", backgroundColor: "#fff", borderRadius: "50px", border: "10px solid black" }} className='d-flex justify-content-center p-3'>
                    <div>
                        <div style={{ width: "30%", height: "28px", backgroundColor: "black", borderRadius: "40px " }} className='mx-auto'>
                            <span style={{ position: "relative", right: "75px", fontWeight: "700", top: "3px" }}>{time}</span>
                            <span style={{ position: "relative", left: "88px", bottom: "32px" }}> <img src={iphoneBattery} alt="" width={80} /> </span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center '>
                            <img src={hospitalLogo} alt="hospital-logo" width={50} height={50} />
                            <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                <h4 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px", color: "black" }}>HOPE WELL</h4>
                                <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "1px", fontSize: "12px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>
                            </div>
                        </div>
                        {
                            registerForm ?
                                <>
                                    <Link to={'/'}><IoIosArrowBack style={{ position: "relative", bottom: "65px", fontSize: "25px", color: "#000" }} /></Link>

                                </>
                                : ""
                        }
                        {
                            registerForm ?
                                <>
                                    <h5 className='fw-bold mb-0'>Almost There !</h5>
                                    <p className='' style={{ fontSize: "13px" }}>We are excited to see you here..!</p>
                                </>
                                :
                                <>
                                    <h5 className='fw-bold mb-0 mt-4'>Welcome Back!</h5>
                                    <p className='' style={{ fontSize: "13px" }}>Sign in to Continue</p>
                                </>
                        }
                        <div className=''>


                        </div>
                        <div className=''>
                            {
                                registerForm ?
                                    <>
                                        <input type="text" placeholder='Enter Your Name' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.username} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                                        <input type="number" placeholder='Phone Number' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.phone} onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                                        <input type="email" placeholder='Email Address' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                                        <input type="password" placeholder='Password' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                                    </>
                                    :
                                    <>
                                        <input type="email" placeholder='Enter Your Email' style={{ width: "100%", fontSize: "12px", height: "35px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                                        <input type="password" placeholder='Password' style={{ width: "100%", fontSize: "12px", height: "35px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                                        <p className='text-end' style={{ fontSize: "12px" }}>Forget Password ?</p>
                                    </>
                            }
                            {
                                registerForm ?
                                    <button className='w-100 py-2' style={{ backgroundColor: "black", color: "#d3d3d3", fontWeight: "600" }} onClick={handleUserRegistration}>SIGN UP</button>
                                    :
                                    <button className='w-100 py-2' style={{ backgroundColor: "black", color: "#d3d3d3", fontWeight: "600" }} onClick={handleUserLogin}>SIGN IN</button>

                            }

                            {
                                registerForm ?
                                    <div>
                                        <p style={{ fontSize: "11px", position: "relative", top: "80px" }} className=' mb-0'>By signing up,you agree our <span style={{ textDecoration: "underline", color: "skyblue" }}>Terms & Condition </span>and <span style={{ textDecoration: "underline", color: "skyblue" }}>Privacy Policy</span></p>
                                    </div>
                                    :
                                    <>
                                        <p className='text-center mb-2 mt-3'>or login with</p>
                                        <div className='d-flex justify-content-center '>
                                            <img src={fbLogo} alt="" width={20} className='mx-3' />
                                            <img src={googleIcon} alt="" width={20} className='mx-3' />
                                            <img src={Xlogo} alt="" width={20} className='mx-3' />
                                        </div>
                                        <Link to={'/register'} style={{ textDecoration: "none", color: "#000" }}><p style={{ fontSize: "13px", position: "relative", top: "58px" }} className='text-center  mb-0'>Don't have an account ? <span style={{ fontWeight: "800" }}>SIGNUP_!</span></p></Link>

                                    </>

                            }

                        </div>
                        {
                            registerForm ?
                                <div style={{ border: "4px solid #000", position: "relative", top: "93px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div>
                                :
                                <div style={{ border: "4px solid #000", position: "relative", top: "64px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div>
                        }

                    </div>
                </div>
            </div>

            {/* // <div className='d-flex justify-content-center flex-column' style={{ position: "relative", backgroundColor: "#e0e0e0" }} >

            // <div className='d-flex justify-content-center pt-4'>

                {
                    registerForm ?
                        <h2>Sign Up</h2>
                        :
                        <h2>Sign In</h2>
                }
            // </div>
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
            </div> */}
        </div>
    )
}

export default Auth