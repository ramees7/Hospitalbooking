import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminNavbar from './AdminNavbar'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { addDocterApi } from '../Services/allApis'


function AdminDrAdd() {
    const [token, setToken] = useState("")
    const [previewImg, setPreviewImg] = useState("")
    const navigate = useNavigate()
    const [docterDetails, setDocterDetails] = useState({
        firstname: "", lastname: "", email: "", phone: "", dob: "", address: "", department: "",education:"", experience: "", fee: "₹ ", dr_image: "", userId: "" ,status:""
    })
    const [selectedDob, setSelectedDob] = useState('');


    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem("currentUser"))
        // console.log(existingUserId);
        if (existingUser) {
            setDocterDetails({ ...docterDetails, userId: existingUser._id ,status:"Accepted"})
            setToken(localStorage.getItem("token"))
            console.log(token);
        }
        else {
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (docterDetails.dr_image) {
            setPreviewImg(URL.createObjectURL(docterDetails.dr_image))
        }
    }, [docterDetails.dr_image])

    const handleAddDocter = async () => {
        const { firstname, lastname, email, phone, dob, address, department,education, experience, fee, dr_image, userId ,status} = docterDetails
        const dobObject = new Date(selectedDob);
        const twentyFiveYearsAgo = new Date();
        twentyFiveYearsAgo.setFullYear(twentyFiveYearsAgo.getFullYear() - 25)
        const notFiftyYearsAgo = new Date();
        notFiftyYearsAgo.setFullYear(notFiftyYearsAgo.getFullYear() - 50)

        // const dobObject=new Date(selectedDob)
        // console.log(dobObject,"dobObject");
        if (dobObject < twentyFiveYearsAgo && dobObject > notFiftyYearsAgo) {
            console.log("succcess");
            setDocterDetails({ ...docterDetails, dob: dobObject })
            document.getElementById("dobid").innerHTML = ""
        }

        else {
            console.log("Error");
            setDocterDetails({ ...docterDetails, dob: "" })
            document.getElementById("dobid").innerHTML = "Age Must be on 25 Years to 50 Years old"

        }
        if (!firstname || !lastname || !email || !phone || !dob || !address || !department || !education || !experience || !fee  || !dr_image || !userId || !status) {
            message.warning("Enter Valid Details")
        }
        else {
            const docterData = new FormData()
            docterData.append("firstname", firstname)
            docterData.append("lastname", lastname)
            docterData.append("email", email)
            docterData.append("phone", phone)
            docterData.append("dob", dob)
            docterData.append("address", address)
            docterData.append("department", department)
            docterData.append("education", education)
            docterData.append("experience", experience)
            docterData.append("fee", fee)
            docterData.append("dr_image", dr_image)
            docterData.append("userId", userId)
            docterData.append("status", status)
            console.log(docterData,"docterdata")
            const reqHeader = {
                "Content-Type": "multipart/form-data", "Authorization":`bearer ${token}`
            }
            console.log(reqHeader)
            const result = await addDocterApi(docterData,reqHeader)
            console.log(result,"res")
            if (result.status === 200) {
                message.success(`${JSON.parse(localStorage.getItem("currentUser")).username} Added New Docter`)
                handleClear()
            }
            else {
                message.error("error")
            }
        }
    }
    const handleClear=()=>{
        setDocterDetails({
            firstname: "", lastname: "", email: "", phone: "", dob: "", address: "", department: "" ,education:"", experience: "", fee: "₹ ", dr_image: ""
        })
        setSelectedDob({
            selectedDate: ""
        })
        setPreviewImg("https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png")
    }

    console.log(docterDetails);
    console.log(previewImg);

  return (
    <div>
      <AdminNavbar/>
      <Row className='gx-0'>
                <Col md={2} xs={4} style={{backgroundColor:"black"}}>
                    <AdminHeader />
                </Col>
                <Col md={10} xs={8} style={{backgroundColor:"#23b3b4"}}>
                <div style={{ height: "", backgroundColor: "#23b3b4", paddingTop: "110px", position: "" }} className=''>
                <div className='p-5 ' >
                    <Row className='gx-0 rounded py-5' style={{ backgroundColor: "black" }}>
                        <Col sm={12} className=' mb-3'>
                            <h1 className='text-center ' style={{color:"#e0e0e0"}}>Application for Docter Vacancy</h1>
                        </Col>
                        <Col md={12} className='d-flex justify-content-center p-4'>
                            <label htmlFor="profile" className='text-center'>
                                <input type="file" id='profile' style={{ display: "none" }} onChange={(e) => { setDocterDetails({ ...docterDetails, dr_image: e.target.files[0] }) }} />
                                <img src={previewImg ? previewImg : "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png"} alt="profile img" style={{ borderRadius: "50%" }} width={"150px"} height={"150px"} />
                            </label>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4 '>
                            <h5 className='text-light'>First Name : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.firstname} onChange={(e) => setDocterDetails({ ...docterDetails, firstname: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Last Name : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }}  value={docterDetails.lastname} onChange={(e) => setDocterDetails({ ...docterDetails, lastname: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Phone Number : </h5>
                            <Form.Control type="number" placeholder="" style={{ height: "50px" }} value={docterDetails.phone} onChange={(e) => setDocterDetails({ ...docterDetails, phone: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Email : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.email} onChange={(e) => setDocterDetails({ ...docterDetails, email: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Date Of Birth : </h5>
                            <input type="date" className='rounded ps-3'  style={{ width: "100%", height: "50px" }} value={selectedDob} onChange={(e) => setSelectedDob(e.target.value)} />
                            <h6 id='dobid' className='text-danger'></h6>
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Your Address : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.address} onChange={(e) => setDocterDetails({ ...docterDetails, address: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Education : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.education} onChange={(e) => setDocterDetails({ ...docterDetails, education: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Specialised to : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.department} onChange={(e) => setDocterDetails({ ...docterDetails, department: e.target.value })} />
                        </Col>
                        
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Work Experience : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.experience} onChange={(e) => setDocterDetails({ ...docterDetails, experience: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'>Consultation fee : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.fee} onChange={(e) => setDocterDetails({ ...docterDetails, fee: e.target.value })} />
                        </Col>                 
                        <Col md={1}></Col>
                        <Col sm={12} className='d-flex justify-content-center '>
                            <Button className='mx-2 px-3' onClick={handleClear}>Reset</Button>
                            <Button className='mx-2 px-3' onClick={handleAddDocter}>Submit</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
        </Row>
    </div>
  )
}

export default AdminDrAdd