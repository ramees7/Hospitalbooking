import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Col,  Form, Row } from 'react-bootstrap'
import { IoMdDownload } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { addDocterApi, viewDepartmentListApi } from '../Services/allApis';
import profileImg from '../Assets/profile.webp'



function DrApplication() {

    const [token, setToken] = useState("")
    const [ifSumbit, setIfSubmit] = useState(false)
    const [previewImg, setPreviewImg] = useState("")
    const navigate = useNavigate()
    const [docterDetails, setDocterDetails] = useState({
        firstname: "", lastname: "", email: "", phone: "", dob: "", address: "", department: "", education: "", experience: "", fee: "₹ ", dr_image: "", userId: "", status: "" ,messages:""
    })
    const [selectedDob, setSelectedDob] = useState('');
    const [deptName,setDeptName]=useState("")


    useEffect(() => {
        const existingUser = JSON.parse(localStorage.getItem("currentUser"))
        // console.log(existingUserId);
        if (existingUser) {
            setDocterDetails({ ...docterDetails, userId: existingUser._id, status: "Requested" ,messages:"Not Approved Yet"})
            setToken(localStorage.getItem("token"))
            console.log(token);
            handleDeptNameList()
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
        const { firstname, lastname, email, phone, dob, address, department, education, experience, fee, dr_image, userId, status ,messages} = docterDetails
        // const today = new Date(); // Current date
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
        if (!firstname || !lastname || !email || !phone || !dob || !address || !department || !education || !experience || !fee || !dr_image || !userId || !status || !messages) {
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
            docterData.append("messages", messages)
            console.log(docterData)
            const reqHeader = {
                "Content-Type": "multipart/form-data", "Authorization": `bearer ${token}`
            }
            const res = await addDocterApi(docterData, reqHeader)
            console.log(res)
            if (res.status === 200) {
                message.success("Request SuccessFully Send to Admin")
                setIfSubmit(true)
                sessionStorage.setItem("docterToPdf", JSON.stringify(res.data))
                handleClear()
                navigate("/docterpdf")
            }
            else {
                message.error("error")
            }
        }
    }
    const handleClear = () => {
        setDocterDetails({
            firstname: "", lastname: "", email: "", phone: "", dob: "", address: "", department: "", education: "", experience: "", fee: "₹ "
        })
        setSelectedDob({
            selectedDate: ""
        })
        setPreviewImg(profileImg)
        
    }


        // ----------------------------------------dept---------------------------------------------------------------------
        const handleDeptNameList=async()=>{
            const reqHeader = {
                "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
            }
            console.log(reqHeader)
            const res = await viewDepartmentListApi(reqHeader)
            if (res.status === 200) {
                setDeptName(res.data)
            }
    }
    console.log(deptName);

    // ----------------------------------------dept---------------------------------------------------------------------

    console.log(docterDetails);
    console.log(previewImg);



    return (
        <div>
            <Header />
            <div style={{ height: "", backgroundColor: "#fff", paddingTop: "110px", position: "" }} className=''>
                <div className='py-5 px-3  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}} ' >
                    <Row className='gx-0 rounded py-5' style={{ backgroundColor: "black" }}>
                        <Col sm={12} className=' mb-3'>
                            <h1 className='text-center fw-bold' style={{color:"#fff", fontSize: "clamp(1.25rem, 0.6944rem + 2.2222vw, 2.5rem)"}}>Application for Docter Vacancy</h1>
                        </Col>
                        <Col md={12} className='d-flex justify-content-center p-4'>
                            <label htmlFor="profile" className='text-center'>
                                <input type="file" id='profile' style={{ display: "none" }} onChange={(e) => { setDocterDetails({ ...docterDetails, dr_image: e.target.files[0] }) }} />
                                <img src={previewImg ? previewImg : profileImg} alt="profile img" style={{ borderRadius: "50%" }} width={"150px"} height={"150px"} />
                            </label>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4 '>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>First Name : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.firstname} onChange={(e) => setDocterDetails({ ...docterDetails, firstname: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Last Name : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.lastname} onChange={(e) => setDocterDetails({ ...docterDetails, lastname: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Phone Number : </h5>
                            <Form.Control type="number" placeholder="" style={{ height: "50px" }} value={docterDetails.phone} onChange={(e) => setDocterDetails({ ...docterDetails, phone: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Email : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.email} onChange={(e) => setDocterDetails({ ...docterDetails, email: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Date Of Birth : </h5>
                            <input type="date" className='rounded ps-3' style={{ width: "100%", height: "50px"}} value={selectedDob} onChange={(e) => setSelectedDob(e.target.value)} />
                            <h6 id='dobid' className='text-danger'></h6>
                            {/* <input type="date" className='rounded ps-3'  style={{ width: "100%", height: "50px" }} value={docterDetails.dob} onChange={(e) => setDocterDetails({ ...docterDetails, dob: e.target.value })} /> */}
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Your Address : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.address} onChange={(e) => setDocterDetails({ ...docterDetails, address: e.target.value })} />
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Education : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.education} onChange={(e) => setDocterDetails({ ...docterDetails, education: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}'>Specialised to : </h5>
                            <Form.Select aria-label="" name='docter' style={{ height: "50px" }} onChange={(e)=>setDocterDetails({...docterDetails,department:e.target.value})}>
                                        <option value={""} >Select Your Department</option>
                                        {
                                            deptName?
                                            deptName.map(item=>(
                                                <option  style={{}} value={item.dept_name + item._id}>{item.dept_name}</option>
                                            )):""
                                        }
                                            
                                    </Form.Select>
                            {/* <Form.Control type="text" placeholder="" style={{ height: "50px" , backgroundColor:"#e0e0e0"}} value={docterDetails.department} onChange={(e) => setDocterDetails({ ...docterDetails, department: e.target.value })} /> */}
                        </Col>

                        <Col md={1}></Col>
                        <Col md={1}></Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Work Experience : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px"}} value={docterDetails.experience} onChange={(e) => setDocterDetails({ ...docterDetails, experience: e.target.value })} />
                        </Col>
                        <Col md={5} className='p-4'>
                            <h5 className='text-light'  style={{fontSize: "clamp(0.8125rem, 0.4625rem + 1.4vw, 1.25rem)"}}>Consultation fee : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.fee} onChange={(e) => setDocterDetails({ ...docterDetails, fee: e.target.value })} />
                        </Col>


                        <Col md={1}></Col>
                        {/* <Col md={1}></Col> */}
                        {/* <Col md={5} className='p-4'>
                            <h5 className='text-light'>Consulting Time : </h5>
                            <Form.Control type="text" placeholder="" style={{ height: "50px" }} value={docterDetails.time}  onChange={(e) => setDocterDetails({ ...docterDetails, time: e.target.value })} />
                        </Col> */}
                        <Col sm={12} className='d-flex justify-content-center '>
                            <Button className='mx-2 px-3' onClick={handleClear}>Reset</Button>
                            <Button className='mx-2 px-3' onClick={handleAddDocter}>Submit</Button>
                            {
                                ifSumbit ?
                                    <Link to={"/docterpdf"}><Button className='mx-2 px-3' ><IoMdDownload style={{ fontSize: "24px" }} />Downold</Button></Link>
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

export default DrApplication