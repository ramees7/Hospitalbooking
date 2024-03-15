import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
import AdminNavbar from './AdminNavbar';
import {  appoinmentDeleteListApi, doctersDeleteListApi, doctersRejectAcceptUpdateApi, getAppoinmentsListApi, getDoctersRequestListApi, pushDepartmentApi } from '../Services/allApis';
import { message } from 'antd';
import { MdDeleteOutline } from "react-icons/md";
import { docterAddContext } from '../Context/ContextShares';


function AdminNotification() {

    const [docterRequestList, setDocterRequestList] = useState("")
    const [appoinmentRequestList, setAppoinmentRequestList] = useState("")
    const {docterAddRes, setDocterAddRes}=useContext(docterAddContext)

    const [updateDocter, setUpdateDocter] = useState({
        firstname: "", lastname: "", email: "", phone: "", dob: "", address: "", department: "",education:"", experience: "", fee: "", time: "", dr_image: "", userId: "", status: "" ,messages:""
    })


    useEffect(() => {
        handleDocterList()
        handleAppoinmentList()
    }, [localStorage.getItem("token")])



    const handleDocterList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getDoctersRequestListApi(reqHeader)
        if (res.status === 200) {
            setDocterRequestList(res.data)
        }
    }

    const handleAppoinmentList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getAppoinmentsListApi(reqHeader)
        if (res.status === 200) {
            setAppoinmentRequestList(res.data)
        }
    }


    const handleDeleteAppoinemntList = async (item) => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader, "dfsdfsdgsg");
        console.log(item._id);
        const res = await appoinmentDeleteListApi(item._id, reqHeader)
        console.log(res);
        if (res.status === 200) {
            message.success("Appoinment Deleted")
            handleAppoinmentList()
        }
        else {
            message.error("Failed")
        }
    }

    // -------------------------------------department---------------------------------------------------
    const selectedDept = updateDocter.department.slice(-24)
    console.log(selectedDept);
    const handlePushDeptData = async (reqBody) => {
        const reqHeader = {
            "Content-Type": "multipart/form-data", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        const res = await pushDepartmentApi(selectedDept, reqBody, reqHeader)
        console.log(res);
        if (res.status === 200) {
            console.log(res);
            // message.success("New Department Added")
        }
        else {
            // message.error("Failed")
            console.log(res);
        }
    }
        // -------------------------------------department---------------------------------------------------


    const handleAcceptUpdateDocter = async (item) => {
            setUpdateDocter({ firstname: item.firstname, lastname: item.lastname, email: item.email, phone: item.phone, dob: item.dob, address: item.address,education:item.education, department: item.department, experience: item.experience, fee: item.fee, dr_image: item.dr_image, userId: item.userId, status: "Accepted" ,messages:"Request has been Approved"})

            const { firstname, lastname, email, phone, dob, address, department,education, experience, fee, dr_image, userId, status ,messages} = updateDocter
            if (!firstname || !lastname || !email || !phone || !dob || !address || !department || !education|| !experience || !fee || !dr_image || !userId || !status || !messages) {
                message.warning("Something Went Wrong")
            }
            else {
                const reqBody = new FormData()
                reqBody.append("firstname", firstname)
                reqBody.append("lastname", lastname)
                reqBody.append("email", email)
                reqBody.append("phone", phone)
                reqBody.append("dob", dob)
                reqBody.append("address", address)
                reqBody.append("department", department)
                reqBody.append("experience", experience)
                reqBody.append("education", education)
                reqBody.append("fee", fee)
                reqBody.append("dr_image", dr_image)
                reqBody.append("userId", userId)
                reqBody.append("status", status)
                reqBody.append("messages", messages)
    
                const reqHeader = {
                    "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
                }
                    const res = await doctersRejectAcceptUpdateApi(reqBody, reqHeader, item._id)
                    console.log(res);
                    if (res.status === 200) {
                        message.success("Application Accepted")
                        handleDocterList()
                        handlePushDeptData(reqBody)
                        setDocterAddRes(res.data)
                    }
                    else {
                        message.error("Failed")
                    }
        }
    }
 
    const handleRejectUpdateDocter = async (item) => {
            setUpdateDocter({ firstname: item.firstname, lastname: item.lastname, email: item.email, phone: item.phone, dob: item.dob, address: item.address,education:item.education, department: item.department, experience: item.experience, fee: item.fee, dr_image: item.dr_image, userId: item.userId, status: "Rejected" ,messages:"Request has been Rejected"})

            const { firstname, lastname, email, phone, dob, address, department,education, experience, fee, dr_image, userId, status ,messages} = updateDocter
            if (!firstname || !lastname || !email || !phone || !dob || !address || !department || !education|| !experience || !fee || !dr_image || !userId || !status || !messages) {
                message.warning("Something Went Wrong")
            }
            else {
                const reqBody = new FormData()
                reqBody.append("firstname", firstname)
                reqBody.append("lastname", lastname)
                reqBody.append("email", email)
                reqBody.append("phone", phone)
                reqBody.append("dob", dob)
                reqBody.append("address", address)
                reqBody.append("department", department)
                reqBody.append("experience", experience)
                reqBody.append("education", education)
                reqBody.append("fee", fee)
                reqBody.append("dr_image", dr_image)
                reqBody.append("userId", userId)
                reqBody.append("status", status)
                reqBody.append("messages", messages)
    
                const reqHeader = {
                    "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
                }
                    const res = await doctersRejectAcceptUpdateApi(reqBody, reqHeader, item._id)
                    console.log(res);
                    if (res.status === 200) {
                        message.success("Application Rejected")
                        handleDocterList()
                        handlePushDeptData(reqBody)
                    }
                    else {
                        message.error("Failed")
                    }
        }
    }
 
    const handleDeleteDoctersList = async (item) => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader, "dfsdfsdgsg");
        console.log(item._id);
        const res = await doctersDeleteListApi(item._id, reqHeader)
        console.log(res);
        if (res.status === 200) {
            message.success("Docter Application Deleted")
            handleDocterList()
        }
        else {
            message.error("Failed")
        }
    }



    console.log(docterRequestList);


    return (
        <div >
            <AdminNavbar />
            <Row className='gx-0 '>
                <Col md={2} xs={4} style={{ backgroundColor: "black" }}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{ backgroundColor: "#fff" }}>
                    <div style={{ backgroundColor: "#fff", paddingTop: "110px" }} className='px-3'>

                        <h1 className='text-center py-5 fw-bold' style={{fontSize: "clamp(1.25rem, 0.25rem + 4vw, 2.5rem)"}}>Appoinment Bookings </h1>
                        <Table responsive striped bordered hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>#</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}} >Name</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Date of Booking</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Docter Name</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Phone Number</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>D.O.B</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Token No</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appoinmentRequestList ?
                                        appoinmentRequestList.map((item, index) => (
                                            <tr>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{index + 1}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.firstname}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.dateofbooked.slice(0, 10)}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.docter}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.phone}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.dob.slice(0, 10)}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.tokenNo}</td>
                                                <td className='d-flex justify-content-evenly'><Button style={{ backgroundColor: "#aa0000", border: "none" }} onClick={() => handleDeleteAppoinemntList(item)}><MdDeleteOutline /></Button></td>
                                                {/* <td className='d-flex justify-content-evenly'><Button style={{ backgroundColor: "green", border: "none" }} onClick={()=>handleAcceptUpdateAppoinemnt(item)}><TiTick /></Button><Button style={{ backgroundColor: "red", border: "none" }}  onClick={()=>handleRejectUpdateAppoinment(item)}><FaXmark /></Button><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteAppoinemntList(item)}><MdDeleteOutline /></Button></td> */}
                                            </tr>
                                        ))
                                        : ""
                                }

                            </tbody>
                        </Table>

                        <h1 className='text-center py-5 fw-bold' style={{fontSize: "clamp(1.25rem, 0.25rem + 4vw, 2.5rem)"}}>Docter Application Request</h1>
                        <Table responsive striped hover bordered variant="dark" className='mb-5'>
                            <thead >
                                <tr >
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>#</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Docter Name</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Phone Number</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Education</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Specialaised</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Experience</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Consulting Fee</th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}>Status </th>
                                    <th className='py-3 text-center' style={{fontSize:" clamp(0.625rem, 0.325rem + 1.2vw, 1rem)"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    docterRequestList ?
                                        docterRequestList.map((item, index) => (
                                            <tr key={item._id}>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{index + 1}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.firstname} {item.lastname}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.phone}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.education}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.department.slice(0,-24)}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.experience}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.fee}</td>
                                                <td style={{fontSize:" clamp(0.5625rem, 0.2625rem + 1.2vw, 0.9375rem)"}}>{item.status}</td>
                                                {/* <td className='d-flex justify-content-evenly'><Button style={{ backgroundColor: "green", border: "none" }} onClick={() => handleAcceptUpdateDocter(item)}><TiTick /></Button><Button style={{ backgroundColor: "red", border: "none" }} onClick={() => handleDeleteDoctersList(item)}><FaXmark /></Button></td> */}
                                                <td className='d-flex justify-content-evenly'><Button style={{ backgroundColor: "green", border: "none" }} onClick={() => handleAcceptUpdateDocter(item)}><TiTick /></Button><Button style={{ backgroundColor: "red", border: "none" }} onClick={() => handleRejectUpdateDocter(item)}><FaXmark /></Button><Button style={{ backgroundColor: "#aa0000", border: "none" }} onClick={() => handleDeleteDoctersList(item)}><MdDeleteOutline /></Button></td>
                                            </tr>
                                        ))
                                        : ""
                                }

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default AdminNotification