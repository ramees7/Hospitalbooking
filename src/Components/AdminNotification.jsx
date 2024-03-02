import React, { useEffect, useState } from 'react'
import hospitalLogo from '../Assets/hospital_logo.png'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
import AdminNavbar from './AdminNavbar';
import {  appoinemntRejectAcceptUpdateApi, appoinmentDeleteListApi, doctersDeleteListApi, doctersRejectAcceptUpdateApi, getAppoinmentsListApi, getDoctersRequestListApi } from '../Services/allApis';
import { message } from 'antd';
import { MdDeleteOutline } from "react-icons/md";


function AdminNotification() {

    const [docterRequestList, setDocterRequestList] = useState("")
    const [appoinmentRequestList, setAppoinmentRequestList] = useState("")
    // const [rejectAcceptUpdateAppoinment,setRejectAcceptUpdateAppoinment]=useState({
    //     firstname:"",lastname:"",phone:"",dob:"",address:"",docter:"",dateofbooked:"",userId:"",status:""
    // })

    const [updateDocter,setUpdateDocter]=useState({
        firstname:"", lastname:"", email:"", phone:"", dob:"", address:"", department:"", experience:"", fee:"", time:"",dr_image:"", userId:"", status:""
    })
    const [docterName,setDocterName]=useState("")



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


    const handleDeleteAppoinemntList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await appoinmentDeleteListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Appoinment Deleted")
            handleAppoinmentList()
        }
        else{
            message.error("Failed")
        }
    }


    const handleAcceptUpdateDocter=async(item)=>{
        setUpdateDocter({firstname:item.firstname, lastname:item.lastname, email:item.email, phone:item.phone, dob:item.dob, address:item.address, department:item.department, experience:item.experience, fee:item.fee,dr_image:item.dr_image, userId:item.userId, status:"Accepted"})

        const {firstname, lastname, email, phone, dob, address, department, experience, fee,dr_image, userId, status}=updateDocter
        if(!firstname || !lastname || !email || !phone || !dob || !address || !department || !experience || !fee || !dr_image|| !userId || !status){
            message.warning("Something Went Wrong")
        }
        else{
            const reqBody=new FormData()
            reqBody.append("firstname",firstname)
            reqBody.append("lastname",lastname)
            reqBody.append("email",email)
            reqBody.append("phone",phone)
            reqBody.append("dob",dob)
            reqBody.append("address",address)
            reqBody.append("department",department)
            reqBody.append("experience",experience)
            reqBody.append("fee",fee)
            reqBody.append("dr_image",dr_image)
            reqBody.append("userId",userId)
            reqBody.append("status",status)

            const reqHeader={
                "Content-Type":"application/json","Authorization":`bearer ${localStorage.getItem("token")}`
            }
            const res=await doctersRejectAcceptUpdateApi(reqBody,reqHeader,item._id)
            console.log(res);
            if(res.status===200){
                message.success("Appoinment Accepted")
                handleDocterList()
            }
            else{
                message.error("Failed")
            }
        }
    }
    const handleRejectUpdateDocter=async(item)=>{
        setUpdateDocter({firstname:item.firstname, lastname:item.lastname, email:item.email, phone:item.phone, dob:item.dob, address:item.address, department:item.department, experience:item.experience, fee:item.fee,dr_image:item.dr_image, userId:item.userId, status:"Rejected"})

        const {firstname, lastname, email, phone, dob, address, department, experience, fee,dr_image, userId, status}=updateDocter
        if(!firstname || !lastname || !email || !phone || !dob || !address || !department || !experience || !fee  || !dr_image || !userId || !status){
            message.warning("Something Went Wrong")
        }
        else{
            const reqBody=new FormData()
            reqBody.append("firstname",firstname)
            reqBody.append("lastname",lastname)
            reqBody.append("email",email)
            reqBody.append("phone",phone)
            reqBody.append("dob",dob)
            reqBody.append("address",address)
            reqBody.append("department",department)
            reqBody.append("experience",experience)
            reqBody.append("fee",fee)
            reqBody.append("dr_image",dr_image)
            reqBody.append("userId",userId)
            reqBody.append("status",status)

            const reqHeader={
                "Content-Type":"application/json","Authorization":`bearer ${localStorage.getItem("token")}`
            }
            const res=await doctersRejectAcceptUpdateApi(reqBody,reqHeader,item._id)
            console.log(res);
            if(res.status===200){
                message.success("Appoinment Rejected")
                handleDocterList()
            }
            else{
                message.error("Failed")
            }
        }
    }


    const handleDeleteDoctersList =async(item)=>{
        const reqHeader={
            "Content-Type": "application/json","Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader,"dfsdfsdgsg");
        console.log(item._id);
        const res = await doctersDeleteListApi(item._id,reqHeader)
        console.log(res);
        if(res.status===200){
            message.success("Docter Application Deleted")
            handleDocterList()
        }
        else{
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
                <Col md={10} xs={8} style={{ backgroundColor: "#23b3b4" }}>
                    <div style={{ backgroundColor: "#23b3b4", paddingTop: "110px" }} className='px-3'>

                        <h1 className='text-center py-5'>Appoinment Bookings </h1>
                        <Table responsive striped hover variant="dark">
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>Name</th>
                                    <th className='py-3'>Date of Booking</th>
                                    <th className='py-3'>Docter Name</th>
                                    <th className='py-3'>Phone Number</th>
                                    <th className='py-3'>D.O.B</th>
                                    <th className='py-3'>Token No</th>
                                    {/* <th className='py-3'>Token No</th>  */}
                                        <th className='py-3'> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // allProductss.filter(productitem => productitem.id === proid).map(productitem => (
                                    appoinmentRequestList ?
                                    // appoinmentRequestList.filter(item=>item)
                                        appoinmentRequestList.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index+1}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.dateofbooked.slice(0,10)}</td>
                                                <td>{item.docter}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.dob.slice(0,10)}</td>
                                                <td>{item.tokenNo}</td>
                                                <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteAppoinemntList(item)}><MdDeleteOutline /></Button></td>
                                                {/* <td className='d-flex justify-content-evenly'><Button style={{ backgroundColor: "green", border: "none" }} onClick={()=>handleAcceptUpdateAppoinemnt(item)}><TiTick /></Button><Button style={{ backgroundColor: "red", border: "none" }}  onClick={()=>handleRejectUpdateAppoinment(item)}><FaXmark /></Button><Button  style={{ backgroundColor: "#aa0000", border: "none" }}  onClick={()=>handleDeleteAppoinemntList(item)}><MdDeleteOutline /></Button></td> */}
                                            </tr>
                                        ))
                                        :""
                                }

                            </tbody>
                        </Table>

                        <h1 className='text-center py-5'>Docter Application Request</h1>
                        <Table responsive striped hover variant="dark" className='mb-5'>
                            <thead >
                                <tr >
                                    <th className='py-3'>#</th>
                                    <th className='py-3'>Docter Name</th>
                                    <th className='py-3'>Phone Number</th>
                                    <th className='py-3'>Specialaised</th>
                                    <th className='py-3'>Experience</th>
                                    <th className='py-3'>Consulting Fee</th>
                                    <th className='py-3'>Status </th>
                                    <th className='py-3'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    docterRequestList ?
                                        docterRequestList.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item.firstname} {item.lastname}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.department}</td>
                                                <td>{item.experience}</td>
                                                <td>{item.fee}</td>
                                                <td>{item.status}</td>
                                                <td className='d-flex justify-content-evenly'><Button  style={{ backgroundColor: "green", border: "none" }} onClick={()=>handleAcceptUpdateDocter(item)}><TiTick /></Button><Button style={{ backgroundColor: "red", border: "none" }} onClick={()=>handleRejectUpdateDocter(item)}><FaXmark /></Button><Button  style={{ backgroundColor: "#aa0000", border: "none" }} onClick={()=>handleDeleteDoctersList(item)}><MdDeleteOutline /></Button></td>
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