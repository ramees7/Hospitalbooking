import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import {  Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { adminRegisterApi } from '../Services/allApis'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import hospitalLogo from '../Assets/hospital_logo.png'


import iphoneBattery from '../Assets/iphone_battery.png'

function AdminAuth() {
    const [time,setTime]=useState("")
    const [userData, setUserData] = useState({
        username: "", email: "", password: "", phone: ""
    })

    useEffect(()=>{
        setInterval(()=>{
            setTime( Date().slice(16, 21))

        },1000)
    },[])
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
                message.error("Something Went Wrong! Enter Unique Email")
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
                <Col md={10} xs={8} style={{ backgroundColor: "#fff" }}>
                    <div className='row justify-content-center px-3 py-5 gx-0' style={{ backgroundColor: "#fff", marginTop: "110px" }}>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "700px" }}>
                            <div style={{ width: "310px", height: "80%", backgroundColor: "#fff", borderRadius: "50px", border: "10px solid black" }} className='d-flex justify-content-center p-3'>
                                <div>
                                    <div style={{ width: "30%", height: "28px", backgroundColor: "black", borderRadius: "40px " }} className='mx-auto'>
                                        <span style={{ position: "relative", right: "100%", fontWeight: "700", top: "3px" }}>{time}</span>
                                        <span style={{ position: "relative", left: "112%", bottom: "32px" }}> <img src={iphoneBattery} alt="" width={75} /> </span>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <img src={hospitalLogo} alt="hospital-logo" width={50} height={50} />
                                        <div className='mt-4' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}>
                                            <h4 className='d-flex justify-content-center mb-0' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px", color: "black" }}>HOPE WELL</h4>
                                            <p className='d-flex justify-content-center' style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "1px", fontSize: "12px", color: "black" }}>TRUST US , WE ARE WITH YOU</p>
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                            <input type="text"  placeholder='Enter Your Name' required minLength={5} style={{ width: "100%", fontSize: "12px", height: "40px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                                            <input type="number" placeholder='Phone Number' style={{ width: "100%", fontSize: "12px", height: "40px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                                            <input type="email" placeholder='Email Address' style={{ width: "100%", fontSize: "12px", height: "40px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                                            <input type="password" placeholder='Password' style={{ width: "100%", fontSize: "12px", height: "40px", border: "none", outline: "none" }} className='mb-2 px-2 shadow' onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                                        <button className='w-100 py-2' style={{ backgroundColor: "black", color: "#d3d3d3", fontWeight: "600" }} onClick={handleAdminRegistration}>SIGN UP</button>
                                        <div>
                                            <p style={{ fontSize: "11px", position: "relative", top: "75px" }} className=' mb-0'>By signing up,you agree our <span style={{ textDecoration: "underline", color: "skyblue" }}>Terms & Condition </span>and <span style={{ textDecoration: "underline", color: "skyblue" }}>Privacy Policy</span></p>
                                        </div>
                                    </div>

                                    <div style={{ border: "4px solid #000", position: "relative", top: "33px", width: "60%", borderRadius: "4px" }} className='mx-auto'></div>
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