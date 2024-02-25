import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Button } from '@mui/material';
import { getDoctersAcceptedApi } from '../Services/allApis';
import { BASE_URL } from '../Services/baseUrl';
import hospital_Features_6 from '../Assets/hospital_features_6.jpg'
import hospital_features_3 from '../Assets/hospital_features_3.jpg'
import hospital_Features_5 from '../Assets/hospital_features_5.jpg'
import hospital_features_2 from '../Assets/hospital_features_2.jpg'
import { Link } from 'react-router-dom';
import { docterEditResContext } from '../Context/ContextShares';



function HomeAbout() {
    const [docterList, setDocterList] = useState("")
    // const [search,setSearch]=useState("")
    const { docterEditRes, setDocterEditRes } = useContext(docterEditResContext)


    useEffect(() => {
        handleDocterList()
    }, [localStorage.getItem("token"), docterEditRes])

    const handleDocterList = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
        }
        console.log(reqHeader)
        const res = await getDoctersAcceptedApi(reqHeader)
        if (res.status === 200) {
            setDocterList(res.data)
        }
    }

    console.log(docterList);

    return (
        <div style={{ height: "100%", backgroundColor: "#23b3b4" }} id='about'>
            <Row className='h-100  gx-0 my-5' style={{ borderBottom: " 2px  solid green" }}>
                <Col lg={6} className='p-5 '>
                    <div className='h-100   d-flex  align-items-center'>
                        <div>
                            <h2 className='text-center mb-4'>ABOUT US</h2>
                            <h6 style={{ wordSpacing: "2px", lineHeight: "1.4", textAlign: "justify" }}>We prides itself on its exceptional healthcare services, anchored by a team of dedicated and professional doctors, along with well-trained nurses committed to providing compassionate care. With thoughtfully designed and comfortable rooms, the hospital ensures a conducive environment for patient recovery. The seamless online appointment booking system enhances accessibility for patients, offering convenience and efficiency in scheduling medical consultations. Furthermore, the hospital places a strong emphasis on hospitality, creating a welcoming and supportive atmosphere for patients and their families, ultimately prioritizing holistic well-being and quality healthcare experiences.</h6>
                            {/* <h4>24*7 </h4> */}
                        </div>
                    </div>
                </Col>
                <Col lg={6} className=' p-5'>
                    <div className='  h-100' >
                        <Row className='gx-0'>
                            <Col md={6} xs={6} className='p-1'>
                                <img src={hospital_Features_6} alt="" className='img-fulid w-100 ' style={{ height: "200px" }} />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src={hospital_features_3} alt="" className='img-fulid w-100 ' style={{ height: "200px" }} />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src={hospital_Features_5} alt="" className='img-fulid w-100 ' style={{ height: "200px" }} />
                            </Col>
                            <Col md={6} xs={6} className='p-1'>
                                <img src={hospital_features_2} alt="" className='img-fulid w-100 ' style={{ height: "200px" }} />
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
            <Row className='gx-0 py-5' style={{ borderBottom: " 2px  solid green" }}>
                <Col xs={12}>
                    <h1 className='text-center'>Our Docters</h1>
                </Col>
                {/* <Col xs={12} className='d-flex justify-content-center my-3 '>
                    <input type="text" className='mx-5 w-50 form-control' placeholder='Search Docter or Department' onChange={(e)=>{setSearch(e.target.value)}}/>
                </Col> */}
                {
                    docterList ?
                        docterList.map(item => (
                            <Col md={4} className='p-5 d-flex justify-content-center' key={item._id}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={`${BASE_URL}/upload/${item.dr_image}`} height={250} />
                                    <Card.Body>
                                        <Card.Title className='text-center'>{item.firstname} {item.lastname}</Card.Title>
                                        <Card.Text className='px-4'>
                                            <h6><span className='fw-bold'>Department :</span> {item.department}</h6>
                                            <h6><span className='fw-bold'>Education :</span> {item.education}</h6>
                                            <h6><span className='fw-bold'>Fee :</span> {item.fee}</h6>
                                        </Card.Text>
                                        <div className='d-flex justify-content-evenly mt-4 mb-3'>
                                            <Link to={`/${item.lastname}/booking`} ><Button variant="outlined">More About</Button></Link>
                                            <Link to={`/${item.lastname}/booking`} ><Button variant="contained" > For Booking</Button></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : ""
                }


            </Row>
            {/* <div className=' my-5  ' style={{  backgroundColor:"yellow", borderBottom:"2px solid green"}}>
                <h1 className='text-center mb-5'>24/7 Service</h1>
                <div className='d-flex justify-content-center align-items-center px-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/80/80630.png" alt="" width={100}/>
                <img src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-ambulance-clipart-5-png-image_6004171.png" alt="" height={200}  width={350}/>
                    <h6>This hospital extends its commitment to patient care by offering a 24*7 helpline, ensuring continuous access to medical assistance and information. In addition, the hospital provides a dedicated ambulance service for swift and efficient transportation during emergencies, complementing its round-the-clock healthcare services to ensure the well-being of the community.</h6>
                </div>
            </div> */}

        </div>

    )
}

export default HomeAbout