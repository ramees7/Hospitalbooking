import { TextField } from '@mui/material'
import { message } from 'antd'
import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { adminRegisterApi } from '../Services/allApis'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import hospitalLogo from '../Assets/hospital_logo.png'

import { IoIosArrowBack } from "react-icons/io";

import iphoneBattery from '../Assets/iphone_battery.png'
import fbLogo from '../Assets/Facebook_icon.png'
import googleIcon from '../Assets/google_icon.webp'
import Xlogo from '../Assets/x_icon.jpg'


function AdminAuth() {
    const timeNow = Date().slice(16, 21)
    console.log(timeNow)
    const [userData, setUserData] = useState({
        username: "", email: "", password: "", phone: ""
    })

    const navigate = useNavigate()

    const handleAdminRegistration = async (e) => {
        e.preventDefault()
        if (!userData.username || !userData.email || !userData.password || !userData.phone) {
            message.warning("Enter Valid Details")
        }
        else {
            const res = await adminRegisterApi(userData)
            if (res.status === 200) {
                message.success(`Registration of ${userData.username}`)
                setUserData({ username: "", email: "", password: "", phone: "" })
                navigate('/adminpage')
            }
            else {
                message.error("Already Existed User! Enter Unique Email")
            }
        }
    }
    return (
        <>
            <AdminNavbar />

            <Row className='gx-0'>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#23b3b4" }}>
                    <div className='row justify-content-center px-3 py-5 gx-0' style={{ backgroundColor: "#23b3b4", marginTop: "110px" }}>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "700px" }}>
                            <div style={{ width: "310px", height: "80%", backgroundColor: "#e0e0e0", borderRadius: "50px", border: "10px solid black" }} className='d-flex justify-content-center p-3'>
                                <div>
                                    <div style={{ width: "30%", height: "28px", backgroundColor: "black", borderRadius: "40px " }} className='mx-auto'>
                                        <span style={{ position: "relative", right: "75px", fontWeight: "700", top: "3px" }}>{timeNow}</span>
                                        <span style={{ position: "relative", left: "88px", bottom: "32px" }}> <img src={iphoneBattery} alt="" width={80} /> </span>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <img src={hospitalLogo} alt="hospital-logo" width={50} height={50} />
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h4 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px", color: "black" }}>HOPE WELL</h4>
                                            <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "1px", fontSize: "12px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                            <input type="text" placeholder='Enter Your Name' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                                            <input type="number" placeholder='Phone Number' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                                            <input type="email" placeholder='Email Address' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                                            <input type="password" placeholder='Password' style={{ width: "100%", fontSize: "12px", height: "28px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                                        <button className='w-100 py-2' style={{ backgroundColor: "black", color: "#d3d3d3", fontWeight: "600" }} onClick={handleAdminRegistration}>SIGN UP</button>
                                        <div>
                                            <p style={{ fontSize: "11px", position: "relative", top: "120px" }} className=' mb-0'>By signing up,you agree our <span style={{ textDecoration: "underline", color: "skyblue" }}>Terms & Condition </span>and <span style={{ textDecoration: "underline", color: "skyblue" }}>Privacy Policy</span></p>
                                        </div>
                                    </div>

                                    <div style={{ border: "4px solid #000", position: "relative", top: "80px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div>
                                </div>
                            </div>
                            {/* <div className='col-md-5 d-flex justify-content-center flex-column' style={{ position: "relative", backgroundColor: "gray" }} >
                    <h2 className='text-center pt-4'>Admin Registration</h2>
                    <div className='d-flex justify-content-center '>
                        <div className='d-flex flex-column '>

                            <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" className='mt-4' style={{ width: "100%" }} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" className='mt-3' style={{ width: "100%" }} onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                            <TextField id="outlined-basic" label="Email Address" variant="outlined" className='my-3 ' style={{ width: "100%" }} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" className='mb-3' style={{ width: "100%" }} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                            <div className='mb-5 '>
                                <Button className='' onClick={handleAdminRegistration}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div> */}
                        </div>
                    </div>
                </Col>
            </Row>


        </>
    )
}

export default AdminAuth