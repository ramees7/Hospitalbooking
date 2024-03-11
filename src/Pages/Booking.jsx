import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Col,  Form, Modal, Row } from 'react-bootstrap'
import { IoMdDownload } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import {  addAppoinemntsApi, getDoctersAcceptedApi } from '../Services/allApis';
import { docterEditResContext } from '../Context/ContextShares';

function Booking({ drItem }) {
    const {drAdd,setDrAdd}=useContext(docterEditResContext)
    const docterSpecifedBooking = drItem ? true : false
    const [ifSumbit, setIfSubmit] = useState(false)
    const [token, setToken] = useState(false)
    const navigate = useNavigate()
    const [userIdStatus, setUserIdStatus] = useState("")
    const [tokenNumber, setTokenNumber] = useState("")
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDob, setSelectedDob] = useState('');
    const [show, setShow] = useState(false);


    // const [appoinmentPdf,setAppoinmentPdf]=useState("")
    const [appoinmentDetails, setAppoinmentDetails] = useState({
        firstname: "", lastname: "", phone: "", dob: "", address: "", docter: "", dateofbooked: "", userId: "", tokenNo: "", payment: "",docterId:""
    })
    const [search, setSearch] = useState("")

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
    }, [token,drAdd])

    const handleDocterList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${token}`
        }
        console.log(reqHeader)
        const res = await getDoctersAcceptedApi(reqHeader, search)
        if (res.status === 200) {
            setDocterList(res.data)
        }
    }
    console.log(docterList, "fgfdgdsgfdg");



    const handleAppoinments = async () => {
        const { firstname, lastname, phone, dob, address, docter, dateofbooked, userId, tokenNo, payment ,docterId} = appoinmentDetails
        const today = new Date(); // Current date


        const dobObject = new Date(selectedDob)
        console.log(dobObject, "dobObject");
        if (dobObject < today) {
            console.log("succcess");
            setAppoinmentDetails({ ...appoinmentDetails, dob: dobObject })
            document.getElementById("dobid").innerHTML = ""
        }
        else {
            console.log("Error");
            setAppoinmentDetails({ ...appoinmentDetails, dob: "" })
            document.getElementById("dobid").innerHTML = "Wrong Date Selection"

        }

        const dateofbookedObject = new Date(selectedDate)
        console.log(dateofbookedObject, "gggg");
        if (dateofbookedObject >= today) {
            console.log("succcess");
            setAppoinmentDetails({ ...appoinmentDetails, dateofbooked: dateofbookedObject, dob: dobObject })
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
            appoinmentData.append("docter", docter.slice(0, -24))
            appoinmentData.append("docterId", docter.slice(-24))
            appoinmentData.append("dateofbooked", dateofbooked)
            appoinmentData.append("userId", userId)
            appoinmentData.append("tokenNo", tokenNo)
            appoinmentData.append("payment", payment)
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
                navigate('/bookingpdf')

            }
            else {
                message.error("Failed")
            }
        }
    }


    const handleClear = () => {
        setAppoinmentDetails({
            firstname: "", lastname: "", phone: "", dob: "", address: "", docter: "", dateofbooked: "", userId: userIdStatus.userId, tokenNo: tokenNumber, payment: ""
        })
        setSelectedDate({
            selectedDate: ""
        })
        setSelectedDob({
            selectedDob: ""
        })

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(appoinmentDetails);
    return (
        <div>
            <Header />
            <div style={{ height: "", backgroundColor: "#fff", paddingTop: "110px", position: "" }} className=''>
                <div className='px-5 mb-5' style={{ borderBottom: "2px solid #e0e0e0" }}>
                    {
                        docterSpecifedBooking ?
                            <div className='py-5 ' >
                                <h1 style={{ color: "#000", textTransform: "uppercase", fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)" }} className='pb-2 text-center fw-bold'>Dr.{drItem.firstname} {drItem.lastname} <span style={{ fontSize: " clamp(0.75rem, 0.5278rem + 0.8889vw, 1.25rem)", textTransform: "lowercase" }}>{drItem.education}</span></h1>
                                <h3 style={{ color: "#000", textTransform: "uppercase", fontSize: "clamp(0.9375rem, 0.6319rem + 1.2222vw, 1.625rem)" }} className='pb-5 text-center fw-bold'>{drItem.department.slice(0, -24)} </h3>
                                <h6 style={{ fontSize: "clamp(0.75rem, 0.6389rem + 0.4444vw, 1rem)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur cupiditate nobis praesentium commodi officiis dolore vero, fuga dolorem adipisci unde obcaecati? At magnam temporibus natus, facere ipsum vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum fugiat quibusdam mollitia pariatur omnis libero quia beatae enim accusantium, neque cupiditate. Quod modi error quaerat placeat eum veniam eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sequi consequuntur ipsum esse doloribus, molestias dolorum ea sit aspernatur nemo nihil sint accusamus, harum expedita veniam ab ratione quas? Quisquam.</h6>
                            </div>
                            :
                            <div className='py-5 ' >
                                <h1 style={{ color: "#000", fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)" }} className='pb-5 text-center fw-bold'>Online Appoinments</h1>
                                <h6 style={{ fontSize: "clamp(0.75rem, 0.6389rem + 0.4444vw, 1rem)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur cupiditate nobis praesentium commodi officiis dolore vero, fuga dolorem adipisci unde obcaecati? At magnam temporibus natus, facere ipsum vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum fugiat quibusdam mollitia pariatur omnis libero quia beatae enim accusantium, neque cupiditate. Quod modi error quaerat placeat eum veniam eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sequi consequuntur ipsum esse doloribus, molestias dolorum ea sit aspernatur nemo nihil sint accusamus, harum expedita veniam ab ratione quas? Quisquam.</h6>
                            </div>
                    }

                </div>
                <div className='p-5 ' >
                    <Row className='gx-0 rounded py-5' style={{ backgroundColor: "black" }}>
                        <Col sm={12} className=' mb-3'>
                            <h1 className='text-center  fw-bold' style={{ color: "#fff", fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)" }}>Appoinments Booking</h1>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4 ' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>First Name : </h5>
                            <Form.Control type="text" name='firstname' placeholder="" style={{ height: "50px" }} value={appoinmentDetails.firstname} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, firstname: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Last Name : </h5>
                            <Form.Control type="text" name='lastname' placeholder="" style={{ height: "50px" }} value={appoinmentDetails.lastname} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, lastname: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Phone Number : </h5>
                            <Form.Control type="number" name='phone' placeholder="" style={{ height: "50px" }} value={appoinmentDetails.phone} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, phone: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Date Of Birth : </h5>
                            <input type="date" className='rounded ps-3' name='dob' style={{ width: "100%", height: "50px"}} value={selectedDob} onChange={(e) => setSelectedDob(e.target.value)} />
                            <h6 className='text-danger' id='dobid'></h6>
                            {/* <input type="date" className='rounded ps-3' name='dob' style={{ width: "100%", height: "50px" }} value={appoinmentDetails.dob} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, dob: e.target.value })} /> */}

                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={10} className='p-4' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Your Address : </h5>
                            <Form.Control type="text" placeholder="" name='address' style={{ height: "50px" }} value={appoinmentDetails.address} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, address: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        {
                            docterSpecifedBooking ?
                                <Col md={5} className='p-4'>
                                    <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Select Your Docter : </h5>
                                    <Form.Select aria-label="" style={{ height: "50px" }} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, docter: e.target.value })}>
                                        <option value={""} >Select Your Docter</option>
                                        <option value={drItem.firstname + drItem.lastname + drItem._id} style={{ backgroundColor: "#e0e0e0" }}>{drItem.firstname} {drItem.lastname} *({drItem.department.slice(0, -24)})*</option>
                                    </Form.Select>
                                </Col>
                                :
                                <Col md={5} className='p-4'>
                                    <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Select Your Docter : </h5>
                                    <Form.Select aria-label="" name='docter' style={{ height: "50px" }} onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, docter: e.target.value })}>
                                        <option value={""} >Select Your Docter</option>
                                        {
                                            docterList ?
                                                docterList.map(item => (
                                                    <option value={item.firstname + item.lastname + item._id} key={item._id} >{item.firstname} {item.lastname}  *({item.department.slice(0, -24)})*</option>
                                                ))
                                                : ''
                                        }
                                    </Form.Select>
                                </Col>
                        }
                        <Col md={5} className='p-4'>
                            <h5 className='text-light' style={{ fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)" }}>Date of Booking: </h5>
                            <input type="date" name='dateofbooked' className='rounded ps-3' style={{ width: "100%", height: "50px"}} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                            <h6 className='text-danger' id='dateid'></h6>
                        </Col>
                        <Col md={1}></Col>
                        <Col sm={12} className='d-flex justify-content-center '>
                            <Button className='mx-2 px-3' onClick={handleClear}>Reset</Button>
                            <Button className='mx-2 px-3' onClick={handleShow}>Payment</Button>

                            {/* <Button className='mx-2 px-3' onClick={handleShow()}>Payment</Button> */}
                            {/* <Button className='mx-2 px-3' onClick={handleAppoinments}>Submit</Button> */}
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
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='mx-auto fw-bold'>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-5'>
                    <label htmlFor="" >UPID No :</label>
                    <input type="text" required placeholder='Enter UPID Number' className='w-100 my-2' onChange={(e) => setAppoinmentDetails({ ...appoinmentDetails, payment:"Success" })} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        docterSpecifedBooking ?
                            <Button className='mx-2 px-3' onClick={handleAppoinments}>Pay {drItem.fee} & Submit</Button>
                            :
                            <Button className='mx-2 px-3' onClick={handleAppoinments}>Pay {docterList ? docterList.filter(item => item._id === appoinmentDetails.docter.slice(-24)).map(item => (item.fee)) : ""} & Submit</Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Booking