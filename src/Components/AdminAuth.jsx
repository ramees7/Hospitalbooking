import { TextField } from '@mui/material'
import {   message } from 'antd'
import React, { useState } from 'react'
import { Button, Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { adminRegisterApi } from '../Services/allApis'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'


function AdminAuth() {

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
            <AdminNavbar/>

            <Row className='gx-0'>
                <Col md={2} xs={4} style={{backgroundColor:"black"}}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{backgroundColor:"#23b3b4"}}>
                <div className='row justify-content-center px-3 py-5 gx-0' style={{ backgroundColor: "#23b3b4", marginTop:"110px"}}>
                <div className='col-md-5 d-flex justify-content-center flex-column' style={{ position: "relative", backgroundColor: "gray" }} >
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
                </div>
            </div>
                </Col>
            </Row>

            
        </>
    )
}

export default AdminAuth