import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { IoMdDownload } from "react-icons/io";
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { addAppoinemntRequestApi, addAppoinemntsApi, getDoctersAcceptedApi } from '../Services/allApis';
import PdfTemplate from '../Components/PdfTemplate';

function Booking({ drItem }) {

    const docterSpecifedBooking = drItem ? true : false
    const [ifSumbit, setIfSubmit] = useState(false)
    const [token, setToken] = useState(false)
    const [userIdStatus, setUserIdStatus] = useState("")
    const [tokenNumber, setTokenNumber] = useState("")
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDob, setSelectedDob] = useState('');

    // const [appoinmentPdf,setAppoinmentPdf]=useState("")
    const [appoinmentDetails, setAppoinmentDetails] = useState({
        firstname: "", lastname: "", phone: "", dob: "", address: "", docter: "", dateofbooked: "", userId: "", tokenNo: ""
    })
    const [search,setSearch]=useState("")

    const [docterList, setDocterList] = useState("")
    // const tokenNumber= Date.now()

    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem("currentUser"))
        setTokenNumber(Date.now())
        if (existingUser) {
            setAppoinmentDetails({ ...appoinmentDetails, userId: existingUser._id, tokenNo: tokenNumber })
            setToken(localStorage.getItem("token"))
            handleDocterList()
            setUserIdStatus({ ...appoinmentDetails, userId: existingUser._id })
        }
    }, [token])

    const handleDocterList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${token}`
        }
        console.log(reqHeader)
        const res = await getDoctersAcceptedApi(reqHeader,search)
        if (res.status === 200) {
            setDocterList(res.data)
        }
    }



    const handleAppoinments = async () => {
        const { firstname, lastname, phone, dob, address, docter, dateofbooked, userId, tokenNo } = appoinmentDetails
        const today = new Date(); // Current date

        
        const dobObject=new Date(selectedDob)
        console.log(dobObject,"dobObject");
        if(dobObject < today){
            console.log("succcess");
            setAppoinmentDetails({ ...appoinmentDetails, dob: dobObject })
            document.getElementById("dobid").innerHTML = ""
        }
        else  {
            console.log("Error");
            setAppoinmentDetails({ ...appoinmentDetails, dob: "" })
            document.getElementById("dobid").innerHTML = "Wrong Date Selection"

        }

        const dateofbookedObject = new Date(selectedDate)
        console.log(dateofbookedObject, "gggg");
        if (dateofbookedObject >= today) {
            console.log("succcess");
            setAppoinmentDetails({ ...appoinmentDetails, dateofbooked: dateofbookedObject ,dob:dobObject})
            document.getElementById("dateid").innerHTML = ""
        }
        else {
            console.log("Error");
            setAppoinmentDetails({ ...appoinmentDetails, dateofbooked: "" })
            document.getElementById("dateid").innerHTML = "Please Select Date Tomorrow or Above Date"

        }
        // console.log(appoinmentDetails.dateofbooked, "dateofbooked");
        if (!firstname || !lastname || !phone || !dob || !address || !docter || !dateofbooked || !userId || !tokenNo) {
            message.warning("Enter Valid Details")
        }
        else {
            const appoinmentData = new FormData()
            appoinmentData.append("firstname", firstname)
            appoinmentData.append("lastname", lastname)
            appoinmentData.append("phone", phone)
            appoinmentData.append("dob", dob)
            appoinmentData.append("address", address)
            appoinmentData.append("docter", docter)
            appoinmentData.append("dateofbooked", dateofbooked)
            appoinmentData.append("userId", userId)
            appoinmentData.append("tokenNo", tokenNo)
            const reqHeader = {
                "Content-Type": "application/json", "Authorization": `bearer ${token}`
            }
            const res = await addAppoinemntsApi(appoinmentData, reqHeader)
            if (res.status === 200) {
                message.success(`New Appoinment Booked token ${appoinmentDetails.tokenNo}`)
                console.log(res);
                setIfSubmit(true)
                sessionStorage.setItem("bookingToPdf", JSON.stringify(res.data))
                handleClear()
                setTokenNumber(Date.now())
            }
            else {
                message.error("Failed")
            }
        }
    }


    const handleClear = () => {
        setAppoinmentDetails({
            firstname: "", lastname: "", phone: "", dob: "", address: "", docter: "", dateofbooked: "", userId: userIdStatus.userId, tokenNo: tokenNumber
        })
        setSelectedDate({
            selectedDate: "" 
        })
        setSelectedDob({
            selectedDob:""
        })

    }


    console.log(appoinmentDetails);
    return (
        <div>
            <Header />
            <div style={{ height: "", backgroundColor: "#23b3b4", paddingTop: "110px", position: "" }} className=''>
                <div className='px-5 mb-5' style={{ borderBottom: "2px solid #e0e0e0" }}>
                    {
                        docterSpecifedBooking ?
                            <div className='p-5  ' >
                                <h1 style={{ color: "#000", textTransform: "uppercase" }} className='pb-5 text-center fw-bold'>Dr.{drItem.firstname} {drItem.lastname} <span style={{ fontSize: "20px", textTransform: "lowercase" }}>{drItem.education}</span></h1>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur cupiditate nobis praesentium commodi officiis dolore vero, fuga dolorem adipisci unde obcaecati? At magnam temporibus natus, facere ipsum vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum fugiat quibusdam mollitia pariatur omnis libero quia beatae enim accusantium, neque cupiditate. Quod modi error quaerat placeat eum veniam eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sequi consequuntur ipsum esse doloribus, molestias dolorum ea sit aspernatur nemo nihil sint accusamus, harum expedita veniam ab ratione quas? Quisquam.</h6>
                            </div>
                            :
                            <div className='p-5  ' >
                                <h1 style={{ color: "#000" }} className='pb-5 text-center fw-bold'>Online Appoinments</h1>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur cupiditate nobis praesentium commodi officiis dolore vero, fuga dolorem adipisci unde obcaecati? At magnam temporibus natus, facere ipsum vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum fugiat quibusdam mollitia pariatur omnis libero quia beatae enim accusantium, neque cupiditate. Quod modi error quaerat placeat eum veniam eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sequi consequuntur ipsum esse doloribus, molestias dolorum ea sit aspernatur nemo nihil sint accusamus, harum expedita veniam ab ratione quas? Quisquam.</h6>
                            </div>
                    }

                </div>
                <div className='p-5 ' >
                    <Row className='gx-0 rounded py-5' style={{ backgroundColor: "black" }}>
                        <Col sm={12} className=' mb-3'>
                            <h1 className='text-center  fw-bold' style={{color:"#e0e0e0"}}>Appoinments Booking</h1>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4 '>
                            <h5 className='text-light'>First Name : </h5>
                            <Form.Control type="text" name='firstname' placeholder="" style={{ height: "50px", backgroundColor:"#e0e0e0"}} value={appoinmentDetails.firstname} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, firstname: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Last Name : </h5>
                            <Form.Control type="text" name='lastname' placeholder="" style={{ height: "50px" , backgroundColor:"#e0e0e0"}} value={appoinmentDetails.lastname} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, lastname: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Phone Number : </h5>
                            <Form.Control type="number" name='phone' placeholder="" style={{ height: "50px" , backgroundColor:"#e0e0e0"}} value={appoinmentDetails.phone} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, phone: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Date Of Birth : </h5>
                            <input type="date" className='rounded ps-3' name='dob' style={{ width: "100%", height: "50px" , backgroundColor:"#e0e0e0"}} value={selectedDob} onChange={(e) => setSelectedDob(e.target.value)} />
                            <h6 className='text-danger' id='dobid'></h6>
                            {/* <input type="date" className='rounded ps-3' name='dob' style={{ width: "100%", height: "50px" }} value={appoinmentDetails.dob} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, dob: e.target.value })} /> */}

                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={10} className='p-4'>
                            <h5 className='text-light'>Your Address : </h5>
                            <Form.Control type="text" placeholder="" name='address' style={{ height: "50px" , backgroundColor:"#e0e0e0"}} value={appoinmentDetails.address} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, address: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        {
                            docterSpecifedBooking ?
                                <Col md={5} className='p-4'>
                                    <h5 className='text-light'>Select Your Docter : </h5>
                                    <Form.Select aria-label="" style={{ height: "50px" , backgroundColor:"#e0e0e0"}} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, docter: e.target.value })}>
                                        <option value={""} style={{ backgroundColor:"#e0e0e0"}}>Select Your Docter</option>
                                        <option value={drItem._id} style={{ backgroundColor:"#e0e0e0"}}>{drItem.firstname} {drItem.lastname}</option>
                                    </Form.Select>
                                </Col>
                                :
                                <Col md={5} className='p-4'>
                                    <h5 className='text-light'>Select Your Docter : </h5>
                                    <Form.Select aria-label="" name='docter' style={{ height: "50px" , backgroundColor:"#e0e0e0"}} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, docter: e.target.value })}>
                                        <option value={""} style={{backgroundColor:"#e0e0e0"}}>Select Your Docter</option>
                                        {
                                            docterList ?
                                                docterList.map(item => (
                                                    <option value={item._id} key={item._id} style={{backgroundColor:"#e0e0e0"}}>{item.firstname} {item.lastname}</option>
                                                ))
                                                : ''
                                        }
                                    </Form.Select>
                                </Col>
                        }
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Date of Booking: </h5>
                            <input type="date" name='dateofbooked' className='rounded ps-3' style={{ width: "100%", height: "50px" , backgroundColor:"#e0e0e0"}} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                            <h6 className='text-danger' id='dateid'></h6>
                        </Col>
                        <Col md={1}></Col>
                        <Col sm={12} className='d-flex justify-content-center '>
                            <Button className='mx-2 px-3' onClick={handleClear}>Reset</Button>
                            <Button className='mx-2 px-3' onClick={handleAppoinments}>Submit</Button>
                            {
                                ifSumbit ?
                                    <Link to={"/bookingpdf"}><Button className='mx-2 px-3' ><IoMdDownload style={{ fontSize: "24px" }} />Downold</Button></Link>
                                    :
                                    ""
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Booking